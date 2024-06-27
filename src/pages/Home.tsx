import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"
import ShoppingCart from "@/components/ShoppingCart"
import ShoppingCartList from "@/components/ShoppingCartList"
import useProducts from "@/hooks/use-products"
import tw from "tailwind-styled-components"

const ShopWindow = tw.main`
  grid gap-x-3 gap-y-5 grid-cols-[repeat(auto-fit,224px)] justify-center
  max-w-5xl
  mx-auto my-10 px-2
`

const HomePage = (): JSX.Element => {
  const { data: productsList, isLoading, error } = useProducts({ pageNumber: 1 })

  return (
    <>
      <Header>
        <ShoppingCart />
      </Header>

      <ShoppingCartList />

      <ShopWindow>
        {productsList?.products && (
          productsList.products.map(item => (
            <ProductCard key={item.id} product={item} />
          ))
        )}
      </ShopWindow>

      <Footer />
    </>
  )
}

export default HomePage
