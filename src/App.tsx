import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import tw from "tailwind-styled-components"

const Wrapper = tw.div`
  min-h-screen
  flex flex-col
`
const Container = tw.div`
  flex-1
`

const App = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <Outlet />
      </Container>

      <Footer />
    </Wrapper>
  )
}

export default App
