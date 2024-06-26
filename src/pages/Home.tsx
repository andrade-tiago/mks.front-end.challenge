import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ShoppingCart from "@/components/ShoppingCart"

const HomePage = (): JSX.Element => {
  return (
    <>
      <Header>
        <ShoppingCart itemsAmount={0} />
      </Header>

      <Footer />
    </>
  )
}

export default HomePage
