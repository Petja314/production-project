import type { PayloadAction } from '@reduxjs/toolkit';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider';
import { ArticlesPageSchema } from 'pages/ArticlesPage/ui/ArticlesPage/model/types/ArticlesPageSchema';
import { Article } from 'enteties/Article';
import { ARTICLE_LIST_STYLE_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ArticleSortField, ArticleType, ArticleView } from 'enteties/Article/model/types/articles';
import { SortOrder } from 'shared/types';
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
    initialState: articleAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        view: undefined,
        page: 1,
        limit: 10,
        hasMore: true,
        ids: [],
        entities: {},
        _inited: false,
        order: 'asc',
        sort: ArticleSortField.CREATED,
        search: '',
        type: ArticleType.ALL
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_LIST_STYLE_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload
        },
        initViewState: (state) => {
            const view = localStorage.getItem(ARTICLE_LIST_STYLE_LOCALSTORAGE_KEY) as ArticleView
            state.view = view
            state.limit = view === ArticleView.LIST ? 4 : 10
            state._inited = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleListThunk.pending, (state, action) => {
                state.isLoading = true;
                if(action.meta.arg.replace) {
                    articleAdapter.removeAll(state)
                }
            })
            .addCase(fetchArticleListThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length > state.limit
                if(action.meta.arg.replace) {
                    articleAdapter.setAll(state, action.payload)
                } else{
                    articleAdapter.addMany(state, action.payload)
                }
            })
            .addCase(fetchArticleListThunk.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlePageReducer } = articlesPageSlice;
export const { actions: articlesPageSliceActions } = articlesPageSlice;
