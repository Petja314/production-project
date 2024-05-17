import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {LoginSchema} from 'features/AuthByUsername';
import {loginByUsernameThunk} from 'features/AuthByUsername/model/services/loginByUsername';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
    id: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            // state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsernameThunk.pending, (state, action: PayloadAction<any>) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByUsernameThunk.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false
            })
            .addCase(loginByUsernameThunk.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = action.payload
            })
    },

});

export const {actions: loginActions} = loginSlice;
export const {reducer: loginReducer} = loginSlice;
