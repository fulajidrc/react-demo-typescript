import { AuthState, CartState, CategoryState, ConfigState, ProductState } from "@/interfaces";

export interface RootState {
    config: ConfigState;
    auth:AuthState,
    product:ProductState,
    category:CategoryState,
    cart:CartState
}