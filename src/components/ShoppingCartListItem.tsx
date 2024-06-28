import { FiMinus, FiPlus } from "react-icons/fi"
import tw from "tailwind-styled-components"
import CloseButton from "./CloseButton"
import useShoppingCartStore from "@/store/use-shopping-cart-store"
import currencyFormatter from "@/utils/currency-formatter"
import { motion } from "framer-motion"

const Wrapper = tw(motion.li)`
  bg-white
  w-full max-w-64 sm:max-w-96
  p-4 sm:p-2
  rounded-lg
  flex flex-col sm:flex-row gap-5 justify-between items-center
  relative
`
const ItemImage = tw.img`
  w-full h-24 sm:w-12 sm:h-16
  object-contain
`
const Title = tw.h3`
  text-neutral-800 text-xs font-normal
  w-28
`
const Column = tw.div`
  flex flex-col gap-1
`
const Row = tw.div`
  flex gap-1 items-center justify-between
  w-full
`
const AmountText = tw.span`
  text-black text-[10px] font-normal
  hidden sm:visible
`
const ButtonGroup = tw.div`
  border-[1px] border-neutral-300 rounded-md
  flex
  py-2

  *:border-r-[1px] *:border-neutral-300
`
const Button = tw.button`
  text-black text-xs font-normal
  px-3
  last:border-r-0
`
const UnitPrice = tw.span`
  text-white sm:text-black text-sm font-bold
  max-sm:bg-zinc-700
  rounded-lg
  px-1 py-2
  w-24
`
const RemoveItemButton = tw(CloseButton)`
  absolute top-1 right-1 sm:top-0 sm:right-0
  sm:-translate-y-1/2 sm:translate-x-1/2
  bg-transparent sm:bg-black
  text-black sm:text-white 
`

type ShoppingCartListItemProps = {
  itemId: number
}

const ShoppingCartListItem: React.FC<ShoppingCartListItemProps> = ({ itemId }) => {
  const shoppingCart = useShoppingCartStore()
  const item = useShoppingCartStore(state => state.items[state.getItemIndex(itemId)])

  const handleAdd = () => {
    shoppingCart.addToItem(itemId)
  }
  const handleSubtract = () => {
    if (item.amount === 1) {
      return
    }
    shoppingCart.subtractFromItem(itemId)
  }
  const handleRemoveItem = () => {
    shoppingCart.removeItem(itemId)
  }

  return (
    <Wrapper
      initial={{ x: 300 }}
      animate={{ x: 0 }}
    >
      <ItemImage src={item.imgURL} />

      <Title>
        {item.name}
      </Title>

      <Row>
        <Column>
          <AmountText>Qtd:</AmountText>

          <ButtonGroup>
            <Button onClick={handleSubtract}>
              <FiMinus />
            </Button>

            <Button $as="output">
              {item.amount}
            </Button>

            <Button onClick={handleAdd}>
              <FiPlus />
            </Button>
          </ButtonGroup>
        </Column>

        <UnitPrice>
          {currencyFormatter.format(item.price)}
        </UnitPrice>
      </Row>

      <RemoveItemButton size={12} onClick={handleRemoveItem} />
    </Wrapper>
  )
}

export default ShoppingCartListItem
