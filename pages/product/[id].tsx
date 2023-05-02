import Button from "@/components/shared/Button";
import { ProductModel } from "@/interfaces/product.interface";
import { addProductToCart } from "@/store/cart/cart.action";
import { getOneProduct } from "@/store/product/product.action";
import { RootState } from "@/store/reducers/types";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

export default function ProductDetail() {
    const router = useRouter();
    const dispatch:Dispatch<any> = useDispatch();
    const {id} = router.query
    const { product } = useSelector((state:RootState) => state.product)
    useEffect(() => {
        if(typeof id === 'string'){
            dispatch(getOneProduct(id))
        }
    }, [id])

    const handleChildClicked = (product:ProductModel) => {
        console.log('child clicked', product);
        dispatch(addProductToCart(product))
    }

    return(
        <>
            { product 
                ? 
                <>
                    <div className="flex flex-col md:flex-row bg-white rounded-xl dark:bg-slate-800 border dark:border-slate-700 shadow">
                        <div className=" p-2 m-2 flex-none w-fit">
                            <img className="w-full md:w-[200px] lg:w-[300px]" src={product.image} />
                        </div>
                        <div className="grow p-4 m-2">
                            <div className="block mt-1 text-sm leading-tight font-medium text-gray-400 hover:underline">
                                {product.category}
                            </div>
                            <div className="mt-4 tracking-wide text-xl text-black dark:text-white font-semibold">{product.title}</div>
                            <div className="flex justify-start mt-2">
                                <div className="mr-1">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <div className="mr-1 text-gray-400">
                                    {product.rating.rate} Ratings
                                </div>
                                <div className="mr-1 text-gray-400">|</div>
                                <div className='text-gray-400'>{product.rating.count} Reviews</div>
                            </div>
                            <div className="text-gray-400 text-sm mt-4">
                                Description
                            </div>
                            <p className=" text-slate-500">
                                {product.description}
                            </p>
                            
                            <div className="flex justify-between ...">
                                <div className="text-teal-500 font-bold text-lg mt-2">
                                $ {product.price}
                                </div>
                                <div>
                                    <Button text={`Add to cart`} type="button" onClick={(e) => handleChildClicked(product)} processingStatus={false} color={'indigo'} className="bg-indigo-500 hover:bg-indigo-700"></Button>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </>
                : <></>
            }
            <div ></div>
        </>
    );
}

