import { CartIcon } from "../icons/CartIcon";

export default function EmptyCart(){
    return(
        <div className="h-[300px] shadow-lg flex place-content-center items-center w-full bg-white dark:bg-gray-700 dark:text-white rounded-md">
            <div className="flex flex-col place-content-center items-center">
                <div className="text-indigo-500 dark:text-white mb-3">
                    <CartIcon></CartIcon>
                </div>
                <div className="text-indigo-500 dark:text-white text-xl font-extrabold">Your cart is empty! (:</div>
            </div>
        </div>
    )
}