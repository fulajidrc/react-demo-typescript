import { AuthState, UserModel } from '@/interfaces';
import { Action } from '../action.interface'
import {LOGIN_STATUS, SET_AUTH_USER, SET_AUTH_TOKEN, SET_AUTH_ERROR, UPDATE_LOADER_STATUS} from './auth.type'

const initialState:AuthState = {
    isLogin: false,
    authUser:null,
    loginToken:null,
    authError:'',
    submitStatus: false
}

export default function(state = initialState, action:Action){

    switch(action.type){
        case LOGIN_STATUS:
            return {
                ...state,
                isLogin:action.payload,
            }
        case SET_AUTH_USER:
            return {
                ...state,
                authUser:action.payload,
            }
        case SET_AUTH_TOKEN:
            return {
                ...state,
                loginToken: action.payload
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                authError: action.payload
            }
        case UPDATE_LOADER_STATUS:
            return {
                ...state,
                submitStatus: action.payload
            }
        default: return state
    }

}