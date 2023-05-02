import { useEffect, useState } from "react";
import Button from "../shared/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers/types";

export default function OrderSummary(){
    const { carts } = useSelector((state:RootState) => state.cart)
    const [subTotal, setSubtotal] = useState(0.00);
    const [totalCart, setTotalCart] = useState(0.00);
    const shippingCharge = 100;
    const textCharge = 200;

    useEffect(() => {
        let subTotalNew = 0.00
        carts.map(cart => {
            subTotalNew += cart.quantity * parseFloat(cart.product.price)
            return cart;
        })
        const newSubtotal = parseFloat(subTotalNew.toFixed(2))
        setSubtotal(newSubtotal)
        const total = newSubtotal + shippingCharge + textCharge;
        setTotalCart(parseFloat(total.toFixed(2)))
        
    }, [carts])
    return(
        <>
            <div className="pb-4 ml-2 w-96">
                    <div className="shadow-lg rounded-md p-4 my-2 bg-white dark:bg-gray-700">
                        <div className="flex place-content-between">
                            <div className="text-black font-bold text-lg dark:text-white">
                                Order summary
                            </div>
                        </div>
                        <div className="flex place-content-between pt-3 pb-2">
                            <div className="text-gray-400 text-md">Subtotal</div>
                            <div className="text-black text-md font-bold dark:text-white">$ {subTotal}</div>
                        </div>
                        <hr />
                        <div className="flex place-content-between pt-3 pb-2">
                            <div className="text-gray-400 text-md">Shipping estimate</div>
                            <div className="text-black text-md font-bold dark:text-white">$ {shippingCharge}</div>
                        </div>
                        <hr />
                        <div className="flex place-content-between pt-3 pb-2">
                            <div className="text-gray-400 text-md">Tax estimate</div>
                            <div className="text-black text-md font-bold dark:text-white">$ {textCharge}</div>
                        </div>
                        <hr />
                        <div className="flex place-content-between pt-3 pb-4">
                            <div className="text-gray-400 text-md">Order total</div>
                            <div className="text-black text-md font-bold dark:text-white">$ {totalCart}</div>
                        </div>
                        
                        <Button text={"Checkout"} type={"button"} onClick={() => {}} processingStatus={false} className="bg-indigo-500 hover:bg-indigo-700"></Button>
                    </div>
                </div>
        </>
    )
}   