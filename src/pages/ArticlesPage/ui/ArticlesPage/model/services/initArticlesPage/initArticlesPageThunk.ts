import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { getArticlePageInited } from 'pages/ArticlesPage/ui/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageSliceActions } from 'pages/ArticlesPage/ui/ArticlesPage/model/slices/articlesPageSlice';
import { fetchArticleListThunk } from 'pages/ArticlesPage/ui/ArticlesPage/model/services/fetchArticleList/fetchArticleListThunk';
import { ArticleSortField, ArticleType } from 'enteties/Article/model/types/articles';
import { SortOrder } from 'shared/types';

export const initArticlesPageThunk = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articleDetails/initArticlesPageThunk',
    async (searchParams, thunkApi) => {
        const {
            dispatch, extra, getState, rejectWithValue
        } = thunkApi;
        const init = getArticlePageInited(getState())
        if(!init) {
            const orderFromUrl = searchParams.get('order') as SortOrder
            const sortFromUrl = searchParams.get('sort') as ArticleSortField
            const searchFromUrl = searchParams.get('search')
            const typeFromUrl = searchParams.get('type') as ArticleType

            if(orderFromUrl) {
                dispatch(articlesPageSliceActions.setOrder(orderFromUrl))
            }
            if(sortFromUrl) {
                dispatch(articlesPageSliceActions.setSort(sortFromUrl))
            }
            if(searchFromUrl) {
                dispatch(articlesPageSliceActions.setSearch(searchFromUrl))
            }
            if(typeFromUrl) {
                dispatch(articlesPageSliceActions.setType(typeFromUrl))
            }

            dispatch(articlesPageSliceActions.initViewState())
            dispatch(fetchArticleListThunk({
                // page: 1
            }))
        }
    });
