import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action)=>{
            const newCart = [...state];
            newCart.push(action.payload);
            return newCart;
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;