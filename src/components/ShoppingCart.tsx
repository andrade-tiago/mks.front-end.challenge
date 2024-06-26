import tw from "tailwind-styled-components"
import { TiShoppingCart } from "react-icons/ti"

const Wrapper = tw.div`
  bg-white
  text-black text-lg
  w-max min-w-20
  rounded-lg
  py-1 px-3
  flex items-center gap-3
`

const ItemsAmount = tw.span`font-bold`

type ShoppingCartProps = {
  itemsAmount: number
}

const ShoppingCart = ({ itemsAmount }: ShoppingCartProps): JSX.Element => {
  return (
    <Wrapper>
      <TiShoppingCart />
      <ItemsAmount>
        {itemsAmount}
      </ItemsAmount>
    </Wrapper>
  )
}

export default ShoppingCart
