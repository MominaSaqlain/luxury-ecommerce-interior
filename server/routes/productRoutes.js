const express = require('express')
const router = express.Router()

const upload = require("../middleware/upload")

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview
} = require('../controllers/productController')

const { protect, admin } = require("../middleware/authMiddleware")

// GET all products
// POST create product (Admin only + Image Upload)
router.route('/')
  .get(getProducts)
  .post(protect, admin, upload.array("images", 5), createProduct)

// ⭐ CREATE PRODUCT REVIEW
router.post('/:id/reviews', protect, createProductReview)

// GET single product
// UPDATE product (Admin only)
// DELETE product (Admin only)
router.route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct)

module.exports = router