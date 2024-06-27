import tw from "tailwind-styled-components"
import CloseButton from "./CloseButton"
import ShoppingCartListItem from "./ShoppingCartListItem"
import useShoppingCartStore from "@/store/use-shopping-cart-store"
import { AnimatePresence, motion } from "framer-motion"
import currencyFormatter from "@/utils/currency-formatter"

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
const ItemList = tw.ul`
  overflow-y-auto overflow-x-hidden
  flex flex-col gap-4 flex-1
  px-12 py-8
`
const NoItems = tw.p`
  text-gray-200 text-md font-normal text-center
`
const BuyButton = tw.button`
  bg-black
  w-full
  p-3
`

const ShoppingCartList = (): JSX.Element => {
  const shoppingCart = useShoppingCartStore()

  const totalPrice = shoppingCart.items.reduce((acc, item) => {
    return acc + (item.amount * item.price)
  }, 0)

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
            {shoppingCart.items.length > 0 ? (
              shoppingCart.items.map(item => (
                <ShoppingCartListItem key={item.id} itemId={item.id} />
              ))
            ) : (
              <NoItems>
                Adicione itens para visualizá-los no carrinho
              </NoItems>
            )}
          </ItemList>

          <Row>
            <Text>
              Total:
            </Text>

            <Text>
              {currencyFormatter.format(totalPrice).split(',')[0]}
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
