import { ProductModel } from "@/interfaces/product.interface";
import { Dispatch } from "react";
import { ADD_PRODUCT_ERROR, ADD_PRODUCT_INTO_CART, ADD_QTY_TO_PRODUCT, REMOVE_PRODUCT_FROM_CART, REMOVE_QTY_TO_PRODUCT } from "./cart.type";
import { CartModel } from "@/interfaces";
import store from "..";

export const addProductToCart = (product:ProductModel) => async (dispatch:Dispatch<any>)=> {
    const {carts} = store.getState().cart
    const checkCarts = carts.filter(cart => cart.product.id == product.id)
    if(checkCarts.length > 0){
        dispatch({
            type: ADD_PRODUCT_ERROR,
            payload: `${product.title} already exits in cart!`,
        });
        setTimeout(() => {
            dispatch({
                type: ADD_PRODUCT_ERROR,
                payload: null,
            });
        });
    }else{
        dispatch({
            type: ADD_PRODUCT_INTO_CART,
            payload: {product: product, quantity: 1},
        });
    }
}

export const removeProductFromCart = (cart:CartModel) => async (dispatch:Dispatch<any>)=> {
    dispatch({
        type: REMOVE_PRODUCT_FROM_CART,
        payload: cart.product.id,
    });
}

export const addQtyToProduct = (cart:CartModel) => async (dispatch:Dispatch<any>)=> {
    dispatch({
        type: ADD_QTY_TO_PRODUCT,
        payload: cart.product.id,
    });
}

export const removeQtyToProduct = (cart:CartModel) => async (dispatch:Dispatch<any>)=> {
    dispatch({
        type: REMOVE_QTY_TO_PRODUCT,
        payload: cart.product.id,
    });
}