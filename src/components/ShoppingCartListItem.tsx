import { FiMinus, FiPlus } from "react-icons/fi"
import tw from "tailwind-styled-components"
import CloseButton from "./CloseButton"
import useShoppingCartStore from "@/store/use-shopping-cart-store"
import currencyFormatter from "@/utils/currency-formatter"
import { HTMLMotionProps, motion } from "framer-motion"
import PriceTag from "./PriceTag"
import CartItem from "@/types/cart-item"

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
const UnitPrice = tw(PriceTag)`
  sm:text-black text-sm
  sm:bg-transparent
  py-2
  w-24
`
const RemoveItemButton = tw(CloseButton)`
  absolute top-1 right-1 sm:top-0 sm:right-0
  sm:-translate-y-1/2 sm:translate-x-1/2
  max-sm:bg-transparent
  max-sm:text-black max-sm:text-3xl
`

type ShoppingCartListItemProps = HTMLMotionProps<"li"> & {
  item: CartItem
}

const ShoppingCartListItem: React.FC<ShoppingCartListItemProps> = ({ item, ...props }) => {
  const shoppingCart = useShoppingCartStore()

  const handleAdd = () => {
    shoppingCart.addToItem(item.id)
  }
  const handleSubtract = () => {
    if (item.amount === 1) {
      return
    }
    shoppingCart.subtractFromItem(item.id)
  }
  const handleRemoveItem = () => {
    shoppingCart.removeItem(item.id)
  }

  return (
    <Wrapper {...props}>
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

      <RemoveItemButton onClick={handleRemoveItem} />
    </Wrapper>
  )
}

export default ShoppingCartListItem
