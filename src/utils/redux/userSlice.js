import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userToken: null
    },
    reducers: {
        addToken: (state, action)=>{
            return {...state, userToken: action.payload}
        },
        removeToken: (state)=>{
            return {...state, userToken: null}
        }
    }
});

export const { addToken, removeToken } = userSlice.actions;

export default userSlice.reducer;