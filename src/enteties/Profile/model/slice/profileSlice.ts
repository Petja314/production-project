import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchProfileDataThunk, Profile, ProfileSchema, updateProfileDataThunk,
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
            state.validateError = undefined
            state.form = state.data;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = { ...state.form, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileDataThunk.pending, (state, action: PayloadAction<any>) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileDataThunk.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileDataThunk.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileDataThunk.pending, (state, action: PayloadAction<any>) => {
                state.validateError = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileDataThunk.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.validateError = undefined;
            })
            .addCase(updateProfileDataThunk.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.validateError = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
