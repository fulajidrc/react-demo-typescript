
import { Action } from '../action.interface';
import { SET_MODE } from './config.type';

export interface ConfigState {
    darkMode: boolean;
}

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