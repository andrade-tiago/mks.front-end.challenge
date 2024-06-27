import { create } from "zustand"

type ShoppingCartStore = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const useShoppingCartStore = create<ShoppingCartStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set(() => ({ isOpen }))
}))

export default useShoppingCartStore
