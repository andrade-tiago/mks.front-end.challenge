import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"
import ShoppingCart from "@/components/ShoppingCart"
import ShoppingCartList from "@/components/ShoppingCartList"
import Skeleton from "@/components/Skeleton"
import useProducts from "@/hooks/use-products"
import { useEffect } from "react"
import tw from "tailwind-styled-components"

const ShopWindow = tw.main`
  grid gap-x-3 gap-y-5 grid-cols-[repeat(auto-fit,224px)] justify-center
  max-w-5xl
  mx-auto my-10 px-2
`
const LoadingCard = tw(Skeleton)`
  w-56 h-72
`

const HomePage: React.FC = () => {
  const { data: productsList } = useProducts({ pageNumber: 1 })

  useEffect(() => {
    document.title = 'Home | MKS Sistemas'
  }, [])

  return (
    <>
      <Header>
        <ShoppingCart />
      </Header>

      <ShoppingCartList />

      <ShopWindow>
        {productsList?.products ? (
          productsList.products.map(item => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          Array.from({ length: 8 }).map((_, index) => (
            <LoadingCard key={index} />
          ))
        )}
      </ShopWindow>
    </>
  )
}

export default HomePage
