import { ProductModel } from "../product.interface";


export interface ProductState {
    products: ProductModel[];
    productError: string | null;
    product?:ProductModel
}