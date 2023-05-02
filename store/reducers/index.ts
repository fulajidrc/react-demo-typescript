import { combineReducers } from 'redux';
import ConfigReducer from '../config/config.reducer';
import authReducer from '../auth/auth.reducer';
import productReducer from '../product/product.reducer';
import categoryReducer from '../category/category.reducer';
import cartReducer from '../cart/cart.reducer';

const rootReducer = combineReducers({
  config: ConfigReducer,
  auth: authReducer,
  product: productReducer,
  category:categoryReducer,
  cart: cartReducer
});

export default rootReducer;