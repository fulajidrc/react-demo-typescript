import { combineReducers } from 'redux';
import ConfigReducer from '../config/config.reducer';
import authReducer from '../auth/auth.reducer';

const rootReducer = combineReducers({
  config: ConfigReducer,
  auth: authReducer
});

export default rootReducer;