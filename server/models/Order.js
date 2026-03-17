const mongoose = require("mongoose")

const orderItemSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  image: String,
  price: Number,
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  }
})

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    orderItems: [orderItemSchema],

    shippingAddress: {
      address: String,
      city: String,
      postalCode: String,
      country: String
    },

    paymentMethod: {
      type: String,
      required: true
    },

    totalPrice: {
      type: Number,
      required: true,
      default: 0
    },

    isPaid: {
      type: Boolean,
      default: false
    },

    paidAt: Date,

    isDelivered: {
      type: Boolean,
      default: false
    },

    deliveredAt: Date
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Order", orderSchema)