import tw from "tailwind-styled-components"
import { TiShoppingCart } from "react-icons/ti"
import useShoppingCartStore from "@/store/use-shopping-cart-store"

const Wrapper = tw.button`
  bg-white
  text-black text-lg
  w-max min-w-20
  rounded-lg
  py-1 px-3
  flex items-center gap-3
`
const ItemsAmount = tw.span`font-bold`

const ShoppingCart: React.FC = () => {
  const shoppingCart = useShoppingCartStore()

  return (
    <Wrapper onClick={() => shoppingCart.setIsOpen(true)}>
      <TiShoppingCart />
      <ItemsAmount>
        {shoppingCart.items.length}
      </ItemsAmount>
    </Wrapper>
  )
}

export default ShoppingCart
