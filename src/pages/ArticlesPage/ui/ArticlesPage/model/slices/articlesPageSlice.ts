import type { PayloadAction } from '@reduxjs/toolkit';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider';
import { ArticlesPageCommentsSchema } from 'pages/ArticlesPage/ui/ArticlesPage/model/types/ArticlesPageCommentsSchema';
import { Article } from 'enteties/Article';
import { ARTICLE_LIST_STYLE_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ArticleView } from 'enteties/Article/model/types/articles';
import { fetchArticleListThunk } from '../services/fetchArticleListThunk';

// ADAPTER
const commentsAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

// SELECTORS
export const getArticlesPageSlice = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleList || commentsAdapter.getInitialState()
);
export const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: commentsAdapter.getInitialState<ArticlesPageCommentsSchema>({
        isLoading: false,
        error: undefined,
        view: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_LIST_STYLE_LOCALSTORAGE_KEY, action.payload)
        },
        initViewState: (state) => {
            state.view = localStorage.getItem(ARTICLE_LIST_STYLE_LOCALSTORAGE_KEY) as ArticleView
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleListThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchArticleListThunk.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleListThunk.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlePageReducer } = articlesPageSlice;
export const { actions: articlesPageSliceActions } = articlesPageSlice;
