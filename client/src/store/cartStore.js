import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [], // [{ product: {...}, quantity: Number }]

      addItem: (product, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((i) => i.product._id === product._id)
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product._id === product._id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            }
          }
          return { items: [...state.items, { product, quantity }] }
        })
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((i) => i.product._id !== productId),
        }))
      },

      updateQty: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.product._id === productId ? { ...i, quantity } : i
          ),
        }))
      },

      clearCart: () => set({ items: [] }),

      // Derived values
      get count() {
        return get().items.reduce((sum, i) => sum + i.quantity, 0)
      },

      get total() {
        return get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
      },
    }),
    {
      name: 'muqqa-cart', // localStorage key
    }
  )
)
