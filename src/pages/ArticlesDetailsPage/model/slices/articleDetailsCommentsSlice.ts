import { createEntityAdapter, createSlice, PayloadAction, } from '@reduxjs/toolkit'
import { StateSchema } from 'app/StoreProvider';
import { fetchCommentsByArticleIdThunk } from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { CommentData } from 'enteties/Comment';
import { ArticleDetailsCommentsSchema } from 'pages/ArticlesDetailsPage';

// ADAPTER
const commentsAdapter = createEntityAdapter<CommentData>({
    selectId: (comment) => comment.id,
});

// SELECTORS
export const getArticlesComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: ['1', '2'],
        entities: {
            // 1: {
            //     id: '1',
            //     text: 'comment 1',
            //     user: { id: '1', username: 'petya' }
            // },
            // 2: {
            //     id: '2',
            //     text: 'comment 2',
            //     user: { id: '2', username: 'petya2' }
            // },

        }
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleIdThunk.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleIdThunk.fulfilled, (state, action: PayloadAction<CommentData[]>) => {
                // debugger
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleIdThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;

// Selectors for isLoading and error
export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
