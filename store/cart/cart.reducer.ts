import { CartState } from '@/interfaces';
import { Action } from '../action.interface'
import { ADD_PRODUCT_ERROR, ADD_PRODUCT_INTO_CART, ADD_QTY_TO_PRODUCT, REMOVE_PRODUCT_FROM_CART, REMOVE_QTY_TO_PRODUCT } from './cart.type';

const initialState:CartState = {
    carts: [],
    cartProducts: [],
    addProductError: null
}

export default function(state = initialState, action:Action): CartState{
    switch(action.type){
        case ADD_PRODUCT_INTO_CART: 
            return{
                ...state,
                carts: [...state.carts, action.payload]
            }
        case REMOVE_PRODUCT_FROM_CART: 
            return {
                ...state,
                carts: state.carts.filter(item => item.product.id != action.payload)
            }
        case ADD_QTY_TO_PRODUCT: 
            return{
                ...state,
                carts: state.carts.map(cart => {
                    if(cart.product.id == action.payload){
                        return {...cart, quantity: cart.quantity + 1 }
                    }else{
                        return cart;
                    }   
                })
            }
        case REMOVE_QTY_TO_PRODUCT: 
            return{
                ...state,
                carts: state.carts.map(cart => {
                    if(cart.product.id == action.payload){
                        return {...cart, quantity: cart.quantity - 1 }
                    }else{
                        return cart;
                    }   
                })
            }
        case ADD_PRODUCT_ERROR: 
            return{
                ...state,
                addProductError: action.payload
            }
        default: return state
    }

}