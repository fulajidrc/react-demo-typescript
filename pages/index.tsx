import Product from "@/components/shared/Product"
import { get_products } from "@/store/product/product.action"
import { RootState } from "@/store/reducers/types"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"

export default function Home() {

  const dispatch:Dispatch<any> = useDispatch()
  const productState = useSelector((state: RootState) => state.product)
  const { products } = productState
  useEffect(() =>{
    dispatch(get_products())
  }, [dispatch])
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-4'>
             {products.map((product) => (
                <Product product={product}></Product>
             ))}
      </div>
    </>
  )
}
