import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useWishlistStore = create(
  persist(
    (set, get) => ({
      items: [],

      toggle: (id) => {
        set((state) => {
          const index = state.items.findIndex((item) => item === id)
          if (index > -1) {
            const newItems = state.items.filter((_ , i) => i !== index)
            return { items: newItems }
          } else {
            return { items: [...state.items, id] }
          }
        })
      },

      isWishlisted: (id) => {
        return get().items.includes(id)
      },

      add: (id) => set((state) => ({ items: [...state.items, id] })),
      remove: (id) => set((state) => ({ items: state.items.filter(item => item !== id) })),
      clear: () => set({ items: [] }),

      get count() {
        return get().items.length
      },
    }),
    {
      name: 'muqqa-wishlist',
    }
  )
)

export { useWishlistStore }

