const Product = require('../models/Product')

// GET /api/products
const getProducts = async (req, res) => {
  try {
    const { category, featured, search, limit = 50, page = 1 } = req.query
    const filter = {}

    if (category) filter.category = category
    if (featured) filter.featured = featured === 'true'
    if (search) filter.$text = { $search: search }

    const skip = (Number(page) - 1) * Number(limit)

    const [products, total] = await Promise.all([
      Product.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit)),
      Product.countDocuments(filter),
    ])

    res.json({
      success: true,
      total,
      page: Number(page),
      products
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

// GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      })
    }

    res.json({
      success: true,
      product
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

// POST /api/products
const createProduct = async (req, res) => {
  try {

    console.log("BODY:", req.body)
    console.log("FILES:", req.files)

    let images = []

    if (req.files && req.files.length > 0) {
      images = req.files.map(file => file.path)
    }

    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      images
    })

    res.status(201).json({
      success: true,
      product
    })

  } catch (err) {

    console.error(err)

    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

// PUT /api/products/:id
const updateProduct = async (req, res) => {
  try {

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    )

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      })
    }

    res.json({
      success: true,
      product
    })

  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
}

// DELETE /api/products/:id
const deleteProduct = async (req, res) => {
  try {

    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      })
    }

    res.json({
      success: true,
      message: 'Product deleted'
    })

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

// ⭐ POST /api/products/:id/reviews
const createProductReview = async (req, res) => {
  try {

    const { rating, comment } = req.body

    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      })
    }

    const alreadyReviewed = product.reviews.find(
      r => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      return res.status(400).json({
        success: false,
        message: "Product already reviewed"
      })
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()

    res.status(201).json({
      success: true,
      message: "Review added"
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// ⭐ EXPORTS (ALWAYS LAST)
module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview
}