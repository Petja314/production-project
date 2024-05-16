import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState : any = {
    login: '',
    password: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        username: (state, action: PayloadAction<number>) => {
            state.username = action.payload;
        },
        password: (state, action: PayloadAction<number>) => {
            state.password = action.payload;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
