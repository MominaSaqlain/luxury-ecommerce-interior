const express = require('express')
const router = express.Router()
const {
  createCheckoutSession,
  handleWebhook,
  getSessionDetails,
} = require('../controllers/stripeController')

// Webhook must use raw body — mount BEFORE json middleware in index.js
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook)

router.post('/checkout', createCheckoutSession)
router.get('/session/:sessionId', getSessionDetails)

module.exports = router
