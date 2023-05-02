import { Dispatch } from "redux";
import store from "..";
import axios from "axios";
import { GET_CATEGORY_ERROR, SET_CATEGORY, SET_CATEGORY_PRODUCT } from "./category.type";


export const getCategories = () => async (dispatch:Dispatch<any>)=> {
    try{
        const { categories } = store.getState().category
        if(categories.length  === 0){
            const res = await axios.get(`https://fakestoreapi.com/products/categories`)
            if(res.status == 200){
                dispatch({
                    type: SET_CATEGORY,
                    payload: res.data,
                });
            }
        }
    } catch(error:any){
        dispatch({
            type: GET_CATEGORY_ERROR,
            payload: error.message,
        });
        
    }

}

export const getCategoryProducts = (category:string) => async (dispatch:Dispatch<any>) => {
 try{
    const { products } = store.getState().product
    if(products.length > 0){
        const selectedProducts = products.filter(item => item.category == category)
        dispatch({
            type: SET_CATEGORY_PRODUCT,
            payload: selectedProducts,
        });
    }else{
        const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        if(res.status == 200){
            dispatch({
                type: SET_CATEGORY_PRODUCT,
                payload: res.data,
            });
        }
    }
 }catch(error:any){
    dispatch({
        type: GET_CATEGORY_ERROR,
        payload: error.message,
    });
 } 
}