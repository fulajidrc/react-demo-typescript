import { ProductModel } from "../product.interface";

export interface CategoryState {
    categories: string[];
    categoryError: string | null;
    categoryProducts:ProductModel[]
}