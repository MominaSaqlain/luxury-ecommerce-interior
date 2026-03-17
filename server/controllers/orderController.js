const Order = require("../models/Order")
const Product = require("../models/Product")

// CREATE ORDER
// POST /api/orders
const createOrder = async (req, res) => {
  try {

    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      totalPrice
    } = req.body

    if (orderItems && orderItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No order items"
      })
    }
    // reduce product stock
// reduce product stock
for (const item of orderItems) {

  const product = await Product.findById(item.product)

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    })
  }

  // check stock
  if (product.stock < item.quantity) {
    return res.status(400).json({
      success: false,
      message: `Not enough stock for ${product.name}`
    })
  }

  product.stock = product.stock - item.quantity
  await product.save()
}

    const order = new Order({
  user: req.user._id,
  orderItems,
  shippingAddress,
  paymentMethod,
  totalPrice,
  orderRef: "ORD-" + Date.now()
})

    const createdOrder = await order.save()

    res.status(201).json({
      success: true,
      order: createdOrder
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }
}


// GET MY ORDERS
// GET /api/orders/myorders
const getMyOrders = async (req, res) => {
  try {

    const orders = await Order.find({ user: req.user._id })

    res.json({
      success: true,
      orders
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }
}


// GET ALL ORDERS (ADMIN)
// GET /api/orders
const getOrders = async (req, res) => {
  try {

    const orders = await Order.find({}).populate("user", "id name")

    res.json({
      success: true,
      orders
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }
}


// UPDATE ORDER TO DELIVERED
// PUT /api/orders/:id/deliver

const updateOrderToDelivered = async (req, res) => {
  try {

    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      })
    }

    // update fields
    order.isDelivered = true
    order.deliveredAt = new Date()

    // save updated order
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      order,
      { new: true, runValidators: false }
    )

    res.json({
      success: true,
      message: "Order marked as delivered",
      order: updatedOrder
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }
}
module.exports = {
  createOrder,
  getMyOrders,
  getOrders,
  updateOrderToDelivered
}