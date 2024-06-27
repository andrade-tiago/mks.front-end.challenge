import tw from "tailwind-styled-components"
import CloseButton from "./CloseButton"
import ShoppingCartListItem from "./ShoppingCartListItem"

const Wrapper = tw.div`
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
const Title = tw(Text)`
  max-w-44
`
const CloseMenuButton = tw(CloseButton)`
  translate-x-full
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
  return (
    <Wrapper>
        <Row>
          <Title $as="h2">
            Carrinho de compras
          </Title>

          <CloseMenuButton size={20} />
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
  )
}

export default ShoppingCartList
