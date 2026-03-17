const express = require("express")
const router = express.Router()

const {
  createOrder,
  getMyOrders,
  getOrders,
  updateOrderToDelivered
} = require("../controllers/orderController")

const { protect, admin } = require("../middleware/authMiddleware")

// CREATE ORDER
router.post("/", protect, createOrder)

// GET MY ORDERS
router.get("/myorders", protect, getMyOrders)

// GET ALL ORDERS (ADMIN)
router.get("/", protect, admin, getOrders)

// DELIVER ORDER
router.put("/:id/deliver", protect, admin, updateOrderToDelivered)

module.exports = router