import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { createWrapper } from 'next-redux-wrapper';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['config', 'auth', 'cart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store)

export default store;

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);


