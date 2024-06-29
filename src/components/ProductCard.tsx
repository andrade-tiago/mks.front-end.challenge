import tw from "tailwind-styled-components"
import { RiShoppingBag3Line } from "react-icons/ri"
import Product from "@/types/product"
import currencyFormatter from "@/utils/currency-formatter"
import useShoppingCartStore from "@/store/use-shopping-cart-store"
import { motion } from "framer-motion"
import useProductImg from "@/hooks/use-product-img"
import Skeleton from "./Skeleton"
import PriceTag from "./PriceTag"

const Wrapper = tw(motion.div)`
  max-w-56
  bg-white
  rounded-xl
  shadow-sm
  flex flex-col justify-between
`
const Container = tw.div`
  p-3
  flex flex-col gap-3 flex-1 justify-between
`
const ProductImage = tw.img`
  w-full h-36
  object-contain
`
const LoadingImage = tw(Skeleton)`
  w-full h-36
`
const Row = tw.div`
  flex gap-1 justify-between
`
const Column = tw.div`
  flex flex-col gap-3
`
const Title = tw.h3`
  flex-1
  text-black text-base font-normal
`
const Description = tw.p`
  text-zinc-700 text-xs font-light
  
`
const BuyButton = tw.button`
  bg-primary
  text-white text-sm font-semibold uppercase
  disabled:bg-zinc-700
  transition-colors
  w-full
  rounded-b-xl
  p-2
  flex justify-center gap-2 items-center
`

type ProductCardProps = {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const shoppingCart = useShoppingCartStore()
  const { data: imgURL } = useProductImg(product.id)

  const descriptionLengthLimit = 45

  const handleAddToCart = () => {
    if (shoppingCart.containsItem(product.id)) {
      return
    }
    shoppingCart.addItem({
      id: product.id,
      name: product.name,
      imgURL: imgURL as string,
      price: product.price,
      amount: 1,
    })
  }

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <Container>
        <Column>
          {imgURL ? (
            <ProductImage src={imgURL} />
          ) : (
            <LoadingImage />
          )}
          <Row>
            <Title>
              {product.name}
            </Title>
            <PriceTag>
              {currencyFormatter.format(product.price)}
            </PriceTag>
          </Row>
        </Column>

        <Description>
          {product.description.substring(0, descriptionLengthLimit)}
          {product.description.length > descriptionLengthLimit && '...'}
        </Description>
      </Container>

      <BuyButton
        onClick={handleAddToCart}
        disabled={shoppingCart.containsItem(product.id)}
      >
        <RiShoppingBag3Line />
        <span>
          Comprar
        </span>
      </BuyButton>
    </Wrapper>
  )
}

export default ProductCard
