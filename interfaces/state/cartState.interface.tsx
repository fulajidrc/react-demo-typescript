import { CartModel } from "../cart.interface";
import { ProductModel } from "../product.interface";

export interface CartState {
    carts: CartModel[];
    cartProducts: ProductModel[],
    addProductError: string | null
}