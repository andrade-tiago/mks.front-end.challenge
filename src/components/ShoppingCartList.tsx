import tw from "tailwind-styled-components"
import CloseButton from "./CloseButton"
import ShoppingCartListItem from "./ShoppingCartListItem"
import useShoppingCartStore from "@/store/use-shopping-cart-store"
import { AnimatePresence, motion } from "framer-motion"
import currencyFormatter from "@/utils/currency-formatter"
import { useEffect } from "react"

const Wrapper = tw(motion.div)`
  fixed top-0 right-0
  bg-primary
  shadow-2xl
  w-full max-w-sm sm:max-w-lg h-screen
  flex flex-col
`
const Row = tw(motion.div)`
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
  flex flex-col gap-4 flex-1 items-center
  px-12 py-8
`
const NoItems = tw(motion.p)`
  text-gray-200 text-md font-normal text-center
`
const BuyButton = tw(motion.button)`
  bg-black
  w-full
  p-3
`
const CloseCartButton = tw(CloseButton)`
  max-sm:text-primary text-3xl
  translate-x-1/2
`

const ShoppingCartList: React.FC = () => {
  const shoppingCart = useShoppingCartStore()

  const totalPrice = shoppingCart.items.reduce((acc, item) => {
    return acc + (item.amount * item.price)
  }, 0)

  const animations = {
    display: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  }

  const handleFinalizePurchase = () => {
    shoppingCart.clearItems()
  }

  useEffect(() => {
    return () => shoppingCart.setIsOpen(false)
  }, [])

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
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              Carrinho de compras
            </Title>

            <CloseCartButton
              {...animations.display}
              transition={{ delay: .5 }}
              onClick={() => shoppingCart.setIsOpen(false)}
            />
          </Row>

          <ItemList>
            {shoppingCart.items.length > 0 ? (
              shoppingCart.items.map(item => (
                <ShoppingCartListItem key={item.id} itemId={item.id} />
              ))
            ) : (
              <NoItems
                {...animations.display}
                transition={{ delay: .6 }}
              >
                Adicione itens para visualizá-los no carrinho
              </NoItems>
            )}
          </ItemList>

          <Row
            {...animations.display}
            transition={{ delay: .7 }}
          >
            <Text>
              Total:
            </Text>

            <Text>
              {currencyFormatter.format(totalPrice)}
            </Text>
          </Row>
          <BuyButton
            {...animations.display}
            transition={{ delay: .9, duration: .5 }}
            onClick={handleFinalizePurchase}
          >
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
