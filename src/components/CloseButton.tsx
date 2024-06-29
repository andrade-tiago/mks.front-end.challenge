import { HTMLMotionProps, motion } from "framer-motion"
import { MdClose } from "react-icons/md"
import tw from "tailwind-styled-components"

const Wrapper = tw(motion.button)`
  bg-black
  text-white
  rounded-full
  w-min h-min
  p-1
`

type CloseButtonProps = HTMLMotionProps<"button">

const CloseButton: React.FC<CloseButtonProps> = (props) => {
  return (
    <Wrapper {...props}>
      <MdClose />
    </Wrapper>
  )
}

export default CloseButton
