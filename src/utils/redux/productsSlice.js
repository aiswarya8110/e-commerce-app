import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState:{
        currentProducts: null,
        filteredProductsBasedOnPrice: null,
        selectedPrice: 5000
    },
    reducers: {
        addCurrentProducts: (state, action)=>{
            return {...state, currentProducts: action.payload}
        },
        addFiltredProductsBasedOnPrice: (state, action)=>{
            return {...state, filteredProductsBasedOnPrice: action.payload}
        },
        changeSelectedPrice: (state, action)=>{
            return {...state, selectedPrice: action.payload}
        }
    }
});

export const { addCurrentProducts, addFiltredProductsBasedOnPrice, changeSelectedPrice } = productsSlice.actions;

export default productsSlice.reducer;