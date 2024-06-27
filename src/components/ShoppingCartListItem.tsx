import { FiMinus, FiPlus } from "react-icons/fi"
import tw from "tailwind-styled-components"
import CloseButton from "./CloseButton"

const Wrapper = tw.div`
  bg-white
  w-full max-w-96
  p-2
  rounded-lg
  flex gap-5 justify-between items-center
  relative
`
const ItemImage = tw.img`
  w-12 h-16
  object-contain
`
const Title = tw.h3`
  text-neutral-800 text-xs font-normal
  w-28
`
const Column = tw.div`
  flex flex-col gap-1
`
const AmountText = tw.span`
  text-black text-[10px] font-normal
`
const ButtonGroup = tw.div`
  border-[1px] border-neutral-300 rounded-md
  flex
  py-2

  *:border-r-[1px] *:border-neutral-300
`
const Button = tw.button`
  text-black text-xs font-normal
  px-3

  last:border-r-0
`
const UnitPrice = tw.span`
  text-black text-sm font-bold
  w-16
`
const RemoveItemButton = tw(CloseButton)`
  absolute top-0 right-0
  -translate-y-1/2 translate-x-1/2
`

const ShoppingCartListItem = (): JSX.Element => {
  const imgURL = 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/9/26/298ffbef-785d-4645-b6d8-9c3a739650b7.png'

  return (
    <Wrapper>
      <ItemImage src={imgURL} />

      <Title>
        Apple Watch Series 4 GPS
      </Title>

      <Column>
        <AmountText>Qtd:</AmountText>

        <ButtonGroup>
          <Button>
            <FiMinus />
          </Button>

          <Button $as="output">1</Button>

          <Button>
            <FiPlus />
          </Button>
        </ButtonGroup>
      </Column>

      <UnitPrice>
        R$552
      </UnitPrice>

      <RemoveItemButton size={12} />
    </Wrapper>
  )
}

export default ShoppingCartListItem
