import { CartModel } from "@/interfaces";
import Button from "../shared/Button";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addQtyToProduct, removeProductFromCart, removeQtyToProduct } from "@/store/cart/cart.action";

interface CartPage{
    cart:CartModel
}
export default function CartComponent({cart}:CartPage){
    const dispatch:Dispatch<any> = useDispatch()
    const removeProduct = (cart:CartModel) =>{
        dispatch(removeProductFromCart(cart));
    }

    const addQty = (cart:CartModel) => {
        dispatch(addQtyToProduct(cart));
        
        
    }

    const removeQty = (cart:CartModel) => {
        console.log('cart.quantity', cart.quantity);
        if(cart.quantity == 1){
            dispatch(removeProductFromCart(cart));
        }else{
           dispatch(removeQtyToProduct(cart))
        }
    }

    return (
        <div className="shadow-lg rounded-md p-4 my-2 bg-white dark:bg-gray-700 flex flex-col items-center w-full">
            <div className="flex w-full place-content-between">
                <div className="flex w-full">
                    <div>
                        <img className="w-[100px] min-h-[150px]" src={cart.product.image} />
                    </div>
                    <div className="flex flex-col ml-4 place-content-between w-full">
                        <div className="flex place-content-between w-full">
                            <div className="flex flex-col">
                                    <div className="text-black dark:text-white text-xl font-bold">
                                        {cart.product.title}
                                    </div>
                                    <div className="text-gray-400">
                                        {cart.product.category}
                                    </div>
                            </div>
                            <div className="flex text-lg text-black font-bold dark:text-white">
                                <div className="mr-2">$</div>
                                <div>{cart.product.price}</div>
                            </div>
                        </div>
                        <div className="flex place-content-between w-full">
                            <div className="flex items-center gap-2">
                                <button onClick={() => addQty(cart)} className="w-full h-8 px-2 font-semibold rounded-md bg-white dark:bg-slate-900 text-black border dark:border-slate-600 dark:text-white">+</button>
                                <div className="text-gray-400 dark:text-white">
                                    {cart.quantity}
                                </div>
                                <button onClick={() => removeQty(cart)} className="w-full h-8 px-2 font-semibold rounded-md bg-white dark:bg-slate-900 text-black border dark:border-slate-600 dark:text-white">-</button>
                            </div>
                            <div>
                                <Button text={"Remove"} type={'button'} onClick={(e) => removeProduct(cart) }
                                processingStatus={false} color={"red"} 
                                className="bg-red-500 hover:bg-red-700" />
                            </div>
                        </div>
                        
                    </div>
                </div> 
            </div>
        </div>
    );
}