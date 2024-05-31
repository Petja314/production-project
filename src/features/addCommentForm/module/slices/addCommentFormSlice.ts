import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from 'features/addCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
    error: '',
    isLoading: false
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<any>) => {
            state.text = action.payload
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsernameThunk.pending, (state, action: PayloadAction<any>) => {
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsernameThunk.fulfilled, (state, action: PayloadAction<any>) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsernameThunk.rejected, (state, action: PayloadAction<any>) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },

});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
