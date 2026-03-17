const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const Order = require('../models/Order')

// POST /api/stripe/checkout
// Body: { items: [{name, image, price, quantity}], shippingInfo, totalAmount }
const createCheckoutSession = async (req, res) => {
  try {
    const { items, shippingInfo, totalAmount } = req.body

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, message: 'No items in cart' })
    }

    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'pkr',
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100), // smallest unit
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
      metadata: {
        shippingName: shippingInfo?.name || '',
        shippingEmail: shippingInfo?.email || '',
        shippingPhone: shippingInfo?.phone || '',
        shippingAddress: shippingInfo?.address || '',
        shippingCity: shippingInfo?.city || '',
      },
    })

    res.json({ success: true, url: session.url, sessionId: session.id })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}

// POST /api/stripe/webhook
const handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature']

  let event
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('Webhook signature error:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object

    try {
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 100 })

      const items = lineItems.data.map((li) => ({
        product: li.price?.product,
        name: li.description,
        price: (li.amount_total / 100) / li.quantity,
        quantity: li.quantity,
      }))

      await Order.create({
        items,
        totalAmount: session.amount_total / 100,
        stripeSessionId: session.id,
        paymentStatus: 'paid',
        shippingInfo: {
          name: session.metadata.shippingName,
          email: session.metadata.shippingEmail,
          phone: session.metadata.shippingPhone,
          address: session.metadata.shippingAddress,
          city: session.metadata.shippingCity,
        },
      })

      console.log(`✅ Order created for session: ${session.id}`)
    } catch (err) {
      console.error('Order creation error:', err.message)
    }
  }

  res.json({ received: true })
}

// GET /api/stripe/session/:sessionId — for the success page
const getSessionDetails = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.sessionId, {
      expand: ['line_items'],
    })
    const order = await Order.findOne({ stripeSessionId: req.params.sessionId })
    res.json({ success: true, session, order })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}

module.exports = { createCheckoutSession, handleWebhook, getSessionDetails }
