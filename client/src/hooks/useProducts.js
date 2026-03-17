import { useState, useEffect } from 'react'
import api from '../utils/api'

export function useProducts({ category, featured, limit } = {}) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    const params = {}
    if (category) params.category = category
    if (featured) params.featured = featured
    if (limit) params.limit = limit

    api
      .get('/products', { params, signal: controller.signal })
      .then((res) => setProducts(res.data.products))
      .catch((err) => {
        if (err.name !== 'CanceledError') setError(err.message)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [category, featured, limit])

  return { products, loading, error }
}

export function useProduct(id) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    setError(null)

    api
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data.product))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  return { product, loading, error }
}
