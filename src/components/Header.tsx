import tw from "tailwind-styled-components"
import Logo from "@/components/Logo"
import { ReactNode } from "react"

const Wrapper = tw.header`
  bg-primary
  sticky top-0
  shadow-lg
`
const Container = tw.div`
  max-w-7xl
  mx-auto px-2 py-4
  flex justify-between items-center gap-4
`

type HeaderProps = {
  children?: ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Logo />
        {children}
      </Container>
    </Wrapper>
  )
}

export default Header
