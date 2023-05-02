import { ProductModel } from "./product.interface";

export interface CartModel{
    product  : ProductModel;
    quantity: number;
}