import tw from "tailwind-styled-components"
import Logo from "@/components/Logo"
import { ReactNode } from "react"

const Wrapper = tw.header`bg-primary`
const Container = tw.div`
  max-w-7xl
  px-2 py-4
  flex justify-between items-center gap-4
`

type HeaderProps = {
  children?: ReactNode
}

const Header = ({ children }: HeaderProps): JSX.Element => {
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
