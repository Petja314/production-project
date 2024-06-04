import type { PayloadAction } from '@reduxjs/toolkit';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider';
import { ArticlesPageCommentsSchema } from 'pages/ArticlesPage/ui/ArticlesPage/model/types/ArticlesPageCommentsSchema';
import { Article } from 'enteties/Article';
import { ARTICLE_LIST_STYLE_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ArticleView } from 'enteties/Article/model/types/articles';
import { fetchArticleListThunk } from '../services/fetchArticleList/fetchArticleListThunk';

// ADAPTER
const articleAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

// SELECTORS
export const getArticlesPageSlice = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articleList || articleAdapter.getInitialState()
);
export const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articleAdapter.getInitialState<ArticlesPageCommentsSchema>({
        isLoading: false,
        error: undefined,
        view: undefined,
        page: 1,
        limit: 10,
        hasMore: true,
        ids: [],
        entities: {}
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_LIST_STYLE_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        initViewState: (state) => {
            const view = localStorage.getItem(ARTICLE_LIST_STYLE_LOCALSTORAGE_KEY) as ArticleView
            state.view = view
            state.limit = view === ArticleView.LIST ? 4 : 10
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleListThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchArticleListThunk.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articleAdapter.addMany(state, action.payload)
                state.hasMore = action.payload.length > 0
            })
            .addCase(fetchArticleListThunk.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlePageReducer } = articlesPageSlice;
export const { actions: articlesPageSliceActions } = articlesPageSlice;
