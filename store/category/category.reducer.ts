import { AuthState, CategoryState, ProductState, UserModel } from '@/interfaces';
import { Action } from '../action.interface'
import { GET_CATEGORY_ERROR, SET_CATEGORY, SET_CATEGORY_PRODUCT } from './category.type';

const initialState:CategoryState = {
    categories: [],
    categoryError: null,
    categoryProducts:[]
}

export default function(state = initialState, action:Action): CategoryState{
    switch(action.type){
        case SET_CATEGORY:
            return {
                ...state,
                categories:action.payload,
            }
        case GET_CATEGORY_ERROR:
            return {
                ...state,
                categoryError:action.payload,
            }
        case SET_CATEGORY_PRODUCT: 
            return{
                ...state,
                categoryProducts: action.payload
            }
        default: return state
    }

}