
import { ConfigState } from '@/interfaces';
import { Action } from '../action.interface';
import { SET_MODE } from './config.type';



const initialState: ConfigState = {
    darkMode: false,
};

const ConfigReducer = (state = initialState, action:Action) => {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

export default ConfigReducer;