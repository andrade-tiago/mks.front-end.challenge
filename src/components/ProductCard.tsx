import tw from "tailwind-styled-components"
import { RiShoppingBag3Line } from "react-icons/ri"

const Wrapper = tw.section`
  max-w-56
  bg-white
  rounded-xl
  shadow-sm
`
const Container = tw.div`
  p-2
  flex flex-col gap-2
`
const ProductImage = tw.img`
  w-full max-h-36
  object-contain
`
const Row = tw.div`
  flex gap-1
`
const Title = tw.h3`
  text-black text-base font-normal
`
const Price = tw.span`
  bg-black
  text-white text-base font-bold
  rounded-md
  p-1
  min-w-16 h-max
`
const Description = tw.p`
  text-zinc-700 text-xs font-light
`
const BuyButton = tw.button`
  bg-primary
  text-white text-sm font-semibold uppercase
  w-full
  rounded-b-xl
  p-2
  flex justify-center gap-2 items-center
`

const ProductCard = (): JSX.Element => {
  const imgURL = 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/9/26/298ffbef-785d-4645-b6d8-9c3a739650b7.png'

  return (
    <Wrapper>
      <Container>
        <ProductImage src={imgURL} />

        <Row>
          <Title>
            Apple iPhone X 128GB
          </Title>
          <Price>
            R$199
          </Price>
        </Row>

        <Description>
          Redesigned from scratch and completely revised.
        </Description>
      </Container>

      <BuyButton>
        <RiShoppingBag3Line />
        <span>
          Comprar
        </span>
      </BuyButton>
    </Wrapper>
  )
}

export default ProductCard
