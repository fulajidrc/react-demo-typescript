import axios from "axios";
import { Dispatch } from "redux";
import { GET_ONE_PRODUCT, GET_PRODUCT_ERROR, SET_PRODUCT } from "./product.type";
import store from "..";

export const get_products = () => async (dispatch:Dispatch<any>)=> {
    try{
        const { products } = store.getState().product
        if(products.length  === 0){
            const res = await axios.get(`https://fakestoreapi.com/products`)
            if(res.status == 200){
                dispatch({
                    type: SET_PRODUCT,
                    payload: res.data,
                });
            }
        }
    } catch(error:any){
        dispatch({
            type: GET_PRODUCT_ERROR,
            payload: error.message,
        });
        
    }

}

export const getOneProduct = (id:string | undefined) => async (dispatch:Dispatch<any>) => {
    
    try{
        if(id){
            const {products} = store.getState().product
            if(products.length == 0){
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
                dispatch( {
                    type: GET_ONE_PRODUCT,
                    payload: res.data
                })
            }else{
                const getProducts = products.filter(product => product.id == parseInt(id));
                dispatch( {
                    type: GET_ONE_PRODUCT,
                    payload: getProducts[0]
                })
            }
        }
    }catch(error){
        dispatch( {
            type: GET_PRODUCT_ERROR,
            payload: error,
        })
    }

}