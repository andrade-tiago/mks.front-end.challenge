import backEndAPI from "@/services/back-end-api"
import Product from "@/types/product"
import { useQuery } from "react-query"

type ProductList = {
  products: Product[]
  count: number
}
type GetProductsOptions = {
  pageNumber: number
}

const useProducts = (options: GetProductsOptions) => {
  return useQuery({
    queryFn: () => getProducts(options),
    queryKey: ['products', options],
  })
}

const getProducts = async ({ pageNumber }: GetProductsOptions) => {
  const getProductsResponse = await backEndAPI.get<ProductList>('products', {
    params: {
      page: pageNumber,
      rows: 16,
      sortBy: 'id',
      orderBy: 'ASC',
    },
  })
  return getProductsResponse.data
}

export default useProducts
