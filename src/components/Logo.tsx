import tw from "tailwind-styled-components"

const Wrapper = tw.div`
  flex items-baseline gap-1
  text-white
`

const FirstName = tw.span`text-4xl font-semibold`
const LastName = tw.span`text-xl font-light`

const Logo: React.FC = () => {
  return (
    <Wrapper>
      <FirstName>
        MKS
      </FirstName>
      <LastName>
        Sistemas
      </LastName>
    </Wrapper>
  )
}

export default Logo
