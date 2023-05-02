import { ProductModel } from '@/interfaces/product.interface'
import Link from 'next/link'

export interface ProductItem{
    product: ProductModel
}
function Product({product}:ProductItem) {
    return (
        <>
           <Link key={product.id} href={`/product/${encodeURIComponent(product.id)}`} className="flex flex-col bg-white dark:bg-slate-800 rounded-sm shadow dark:shadow-lg border dark:border-gray-700 p-2 items-center">
                    <div className='bg-slate-100 w-full'> 
                        <img className="w-full h-[200px] object-cover" src={product.image} />
                    </div>
                    <div className='mt-2 text-gray-400 w-full text-xl'>
                        {product.category}
                    </div>
                    <div className="mt-2 w-full tracking-wide text-sm text-black font-semibold from-neutral-950 dark:text-white">{product.title}</div>
                    <div className='w-full mt-4'>
                        <div className="flex justify-between">
                            <div className="flex justify-start">
                                <div className="mr-1">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <div className="mr-1 text-gray-400">
                                    {product.rating.rate}
                                </div>
                                <div className="mr-1 text-gray-400">|</div>
                                <div className='text-gray-400'>{product.rating.count}</div>
                            </div>
                            <div className="text-teal-500 font-bold text-lg">
                               $ {product.price}
                            </div>
                        </div>
                    </div>
                </Link>
        </>
    )
}
  
export default Product