import { AuthState, ProductState, UserModel } from '@/interfaces';
import { Action } from '../action.interface'
import { GET_ONE_PRODUCT, GET_PRODUCT_ERROR, SET_PRODUCT } from './product.type';

const initialState:ProductState = {
    products: [],
    productError: null,
}

export default function(state = initialState, action:Action): ProductState{

    switch(action.type){
        case SET_PRODUCT:
            return {
                ...state,
                products:action.payload,
            }
        case GET_PRODUCT_ERROR:
            return {
                ...state,
                productError:action.payload,
            }
        case GET_ONE_PRODUCT:
            return{
                ...state,
                product: action.payload
            }
        
        default: return state
    }

}