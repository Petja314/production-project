import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { getArticlePageInited } from 'pages/ArticlesPage/ui/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageSliceActions } from 'pages/ArticlesPage/ui/ArticlesPage/model/slices/articlesPageSlice';
import { fetchArticleListThunk } from 'pages/ArticlesPage/ui/ArticlesPage/model/services/fetchArticleList/fetchArticleListThunk';

export const initArticlesPageThunk = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articleDetails/initArticlesPageThunk',
    async (props, thunkApi) => {
        const {
            dispatch, extra, getState, rejectWithValue
        } = thunkApi;
        const init = getArticlePageInited(getState())
        if(!init) {
            dispatch(articlesPageSliceActions.initViewState())
            dispatch(fetchArticleListThunk({
                page: 1
            }))
        }
    });
