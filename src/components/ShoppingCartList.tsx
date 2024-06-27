import tw from "tailwind-styled-components"
import CloseButton from "./CloseButton"
import ShoppingCartListItem from "./ShoppingCartListItem"
import useShoppingCartStore from "@/store/use-shopping-cart-store"
import { AnimatePresence, motion } from "framer-motion"

const Wrapper = tw(motion.div)`
  fixed top-0 right-0
  bg-primary
  shadow-2xl
  w-full max-w-lg h-screen
  flex flex-col
`
const Row = tw.div`
  flex justify-between
  px-12 py-8
`
const Text = tw.span`
  text-white text-2xl font-bold
`
const Title = tw(motion.h2)`
  text-white text-2xl font-bold
  max-w-44
`
const ItemList = tw.div`
  overflow-y-auto
  flex flex-col gap-4 flex-1
  px-12 py-8
`
const BuyButton = tw.button`
  bg-black
  w-full
  p-3
`

const ShoppingCartList = (): JSX.Element => {
  const shoppingCart = useShoppingCartStore()

  return (
    <AnimatePresence>
      {shoppingCart.isOpen && (
        <Wrapper
          initial={{ x: 600 }}
          animate={{ x: 0 }}
          exit={{ x: 600 }}
        >
          <Row>
            <Title
              initial={{ y: -200 }}
              animate={{ y: 0 }}
            >
              Carrinho de compras
            </Title>

            <CloseButton
              size={20}
              onClick={() => shoppingCart.setIsOpen(false)}
            />
          </Row>

          <ItemList>
            {new Array(10).fill(<ShoppingCartListItem />)}
          </ItemList>

          <Row>
            <Text>
              Total:
            </Text>

            <Text>
              R$456
            </Text>
          </Row>
          <BuyButton>
            <Text>
              Finalizar Compra
            </Text>
          </BuyButton>
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

export default ShoppingCartList
