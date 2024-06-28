import tw from "tailwind-styled-components"
import { RiShoppingBag3Line } from "react-icons/ri"
import Product from "@/types/product"
import currencyFormatter from "@/utils/currency-formatter"
import useShoppingCartStore from "@/store/use-shopping-cart-store"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Skeleton } from "@nextui-org/skeleton"
import useProductImg from "@/hooks/use-product-img"

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
  w-full max-h-36
  object-contain
`
const LoadingImage = tw(Skeleton)`
  w-full h-36
  rounded-lg
  bg-gray-300
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
const Price = tw.span`
  bg-zinc-700
  text-white text-base font-bold
  rounded-md
  px-1
  min-w-16 w-max h-max
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

const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
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
            <Price>
              {currencyFormatter.format(product.price)}
            </Price>
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
