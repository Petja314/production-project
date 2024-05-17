import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {UserSchema} from "enteties/User";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localStorage";

const initialState: any = {
    // authData : null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<UserSchema>) => {
            state.authData = action.payload
        },
        initAuthData: (state, action: PayloadAction<UserSchema>) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (user) {
                state.authData = JSON.parse(user)
            }
        },
        signOut: (state, action: PayloadAction<UserSchema>) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        },
    },
});

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;
