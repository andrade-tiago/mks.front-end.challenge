import tw from "tailwind-styled-components";

const Wrapper = tw.footer`
  bg-gray-200
  p-2
`
const CopyrightText = tw.p`
  mx-auto w-max
  text-black text-xs
`

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <CopyrightText>
        MKS sistemas &copy; Todos os direitos reservados
      </CopyrightText>
    </Wrapper>
  )
}

export default Footer
