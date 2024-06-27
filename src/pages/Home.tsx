import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"
import ShoppingCart from "@/components/ShoppingCart"
import ShoppingCartList from "@/components/ShoppingCartList"
import useShoppingCartStore from "@/store/use-shopping-cart-store"
import tw from "tailwind-styled-components"

const ShopWindow = tw.main`
  grid gap-x-3 gap-y-5 grid-cols-[repeat(auto-fit,224px)] justify-center
  max-w-5xl
  mx-auto my-10 px-2
`

const HomePage = (): JSX.Element => {
  const shoppingCart = useShoppingCartStore()

  return (
    <>
      <Header>
        <ShoppingCart
          itemsAmount={0}
          onClick={() => shoppingCart.setIsOpen(true)}
        />
      </Header>

      <ShoppingCartList />

      <ShopWindow>
        {new Array(20).fill(<ProductCard />)}
      </ShopWindow>

      <Footer />
    </>
  )
}

export default HomePage
