import { useQuery } from "react-query"

const useProductImg = (productId: number) => {
  const queryFn = async () => {
    const { "default": image } = await import(`@/img/products/${productId}.png`)

    return image as string
  }

  return useQuery({
    queryFn,
    queryKey: ['products', 'image', productId],
  })
}

export default useProductImg
