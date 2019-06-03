import { createStore,combineReducers } from 'redux';
import category from './category';
import products from './products';
import cart from './cart';
import Mess from './Mess';

const appReducer =combineReducers({
    category,
    products,
    cart,
    Mess
    
});

export default appReducer;