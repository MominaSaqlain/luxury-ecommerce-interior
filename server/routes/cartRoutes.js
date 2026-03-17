const express = require('express')
const router = express.Router()
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} = require('../controllers/cartController')

router.get('/:sessionId', getCart)
router.post('/:sessionId/add', addToCart)
router.put('/:sessionId/update', updateCartItem)
router.delete('/:sessionId/remove/:productId', removeFromCart)
router.delete('/:sessionId/clear', clearCart)

module.exports = router
