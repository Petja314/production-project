import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    Profile, ProfileSchema, updateProfileDataThunk, fetchProfileDataThunk,
} from 'enteties/Profile';

const initialState : ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
    form: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            // state.form = {
            //     ...state.data,
            //     ...action.payload,
            // };
            state.form = { ...state.form, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileDataThunk.pending, (state, action: PayloadAction<any>) => {
                state.isLoading = true;
            })
            .addCase(fetchProfileDataThunk.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileDataThunk.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = true;
                state.error = action.payload;
            })
            .addCase(updateProfileDataThunk.pending, (state, action: PayloadAction<any>) => {
                state.isLoading = true;
            })
            .addCase(updateProfileDataThunk.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
            })
            .addCase(updateProfileDataThunk.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = true;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
