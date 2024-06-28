import { MdClose } from "react-icons/md"
import tw from "tailwind-styled-components"

const Wrapper = tw.button`
  bg-black
  text-white
  rounded-full
  w-min h-min
  p-1
`

type CloseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: number
}

const CloseButton: React.FC<CloseButtonProps> = ({size, ...props}) => {
  return (
    <Wrapper {...props}>
      <MdClose size={size} />
    </Wrapper>
  )
}

export default CloseButton
