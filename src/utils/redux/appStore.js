import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './userSlice';
import productsSliceReducer from './productsSlice';
import cartSliceReducer from './cartSlice';
const store = configureStore({
    reducer:{
        user: userSliceReducer,
        products: productsSliceReducer,
        cart: cartSliceReducer
    }
});

export default store;