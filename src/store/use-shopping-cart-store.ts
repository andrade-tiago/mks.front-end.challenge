import CartItem from "@/types/cart-item"
import { create } from "zustand"

type ShoppingCartStore = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void

  items: CartItem[]
  addItem: (item: CartItem) => void
  addToItem: (id: number) => void
  clearItems: () => void
  containsItem: (id: number) => boolean
  getItemIndex: (id: number) => number
  removeItem: (id: number) => void
  subtractFromItem: (id: number) => void
}

const useShoppingCartStore = create<ShoppingCartStore>((set, get) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set(() => ({ isOpen })),

  items: [],
  addItem: (item: CartItem) => set(state => ({ items: [ ...state.items, item ] })),
  addToItem: (id: number) => {
    const items = get().items
    const itemIndex = get().getItemIndex(id)

    if (itemIndex !== -1) {
      items[itemIndex].amount++

      set(() => ({ items }))
    }
  },
  clearItems: () => set(() => ({ items: [] })),
  containsItem: (id: number) => get().getItemIndex(id) !== -1,
  getItemIndex: (id: number) => get().items.findIndex(item => item.id === id),
  removeItem: (id: number) => {
    const items = get().items
    const itemIndex = get().getItemIndex(id)

    if (itemIndex !== -1) {
      items.splice(itemIndex, 1)

      set(() => ({ items }))
    }
  },
  subtractFromItem: (id: number) => {
    const items = get().items
    const itemIndex = get().getItemIndex(id)

    if (itemIndex !== -1) {
      items[itemIndex].amount--

      set(() => ({ items }))
    }
  },
}))

export default useShoppingCartStore
