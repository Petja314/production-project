import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Article, ArticleDetailsSchema } from 'enteties/Article';
import { fetchArticleByIdThunk } from 'enteties/Article/model/services/fetchArticleById/fetchArticleById';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleByIdThunk.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleByIdThunk.fulfilled, (
                state,
                action: PayloadAction<Article>,
            ) => {
                // debugger
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleByIdThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleActions } = articleDetailsSlice;
export const { reducer: articleReducer } = articleDetailsSlice;
