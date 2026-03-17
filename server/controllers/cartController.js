const Cart = require('../models/Cart')
const Product = require('../models/Product')

// GET /api/cart/:sessionId
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ sessionId: req.params.sessionId }).populate(
      'items.product',
      'name price images category stock'
    )
    if (!cart) return res.json({ success: true, items: [] })
    res.json({ success: true, cart })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}

// POST /api/cart/:sessionId/add
const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body
    const product = await Product.findById(productId)
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' })
    if (product.stock < quantity)
      return res.status(400).json({ success: false, message: 'Insufficient stock' })

    let cart = await Cart.findOne({ sessionId: req.params.sessionId })

    if (!cart) {
      cart = await Cart.create({
        sessionId: req.params.sessionId,
        items: [{ product: productId, quantity }],
      })
    } else {
      const idx = cart.items.findIndex((i) => i.product.toString() === productId)
      if (idx > -1) {
        cart.items[idx].quantity += quantity
      } else {
        cart.items.push({ product: productId, quantity })
      }
      await cart.save()
    }

    await cart.populate('items.product', 'name price images category stock')
    res.json({ success: true, cart })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}

// PUT /api/cart/:sessionId/update
const updateCartItem = async (req, res) => {
  try {
    const { productId, quantity } = req.body
    const cart = await Cart.findOne({ sessionId: req.params.sessionId })
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' })

    const idx = cart.items.findIndex((i) => i.product.toString() === productId)
    if (idx === -1) return res.status(404).json({ success: false, message: 'Item not in cart' })

    if (quantity <= 0) {
      cart.items.splice(idx, 1)
    } else {
      cart.items[idx].quantity = quantity
    }
    await cart.save()
    await cart.populate('items.product', 'name price images category stock')
    res.json({ success: true, cart })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}

// DELETE /api/cart/:sessionId/remove/:productId
const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ sessionId: req.params.sessionId })
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' })

    cart.items = cart.items.filter((i) => i.product.toString() !== req.params.productId)
    await cart.save()
    await cart.populate('items.product', 'name price images category stock')
    res.json({ success: true, cart })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}

// DELETE /api/cart/:sessionId/clear
const clearCart = async (req, res) => {
  try {
    await Cart.findOneAndDelete({ sessionId: req.params.sessionId })
    res.json({ success: true, message: 'Cart cleared' })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}

module.exports = { getCart, addToCart, updateCartItem, removeFromCart, clearCart }
