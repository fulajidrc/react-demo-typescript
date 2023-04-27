import { combineReducers } from 'redux';
import ConfigReducer from '../config/config.reducer';

const rootReducer = combineReducers({
  config: ConfigReducer,
});

export default rootReducer;