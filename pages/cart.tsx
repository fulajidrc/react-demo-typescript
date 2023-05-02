import CartComponent from "@/components/general/CartComponent"
import EmptyCart from "@/components/general/EmptyCart"
import OrderSummary from "@/components/general/OrderSummary"
import { RootState } from "@/store/reducers/types"
import { useSelector } from "react-redux"


export default function Cart() {
    const { carts } = useSelector((state:RootState) => state.cart)
    return(
        <div className="flex">
            <div className="pb-4 flex-grow">
                {carts.length > 0 ? 
                    <>
                        {carts.map((cart) =>(
                            <CartComponent cart={cart} />
                        ))}
                    </>
                : <EmptyCart />
                }
            </div>
            {carts.length > 0 ? 
                <OrderSummary />    
                :<></>
            }
        </div>
    )
}