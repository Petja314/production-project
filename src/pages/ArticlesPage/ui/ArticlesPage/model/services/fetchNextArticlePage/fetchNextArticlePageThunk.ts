import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { getArticlePageHasMore, getArticlePageNum, getLoadingArticlePage } from 'pages/ArticlesPage/ui/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageSliceActions } from 'pages/ArticlesPage/ui/ArticlesPage/model/slices/articlesPageSlice';
import { fetchArticleListThunk } from 'pages/ArticlesPage/ui/ArticlesPage/model/services/fetchArticleList/fetchArticleListThunk';

export const fetchNextArticlePageThunk = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articleDetails/fetchNextArticlePageThunk',
    async (props, thunkApi) => {
        const {
            dispatch, extra, getState, rejectWithValue
        } = thunkApi;
        const isLoading = getLoadingArticlePage(getState())
        const page = getArticlePageNum(getState())
        const hasMore = getArticlePageHasMore(getState())

        if (hasMore && !isLoading) {
            dispatch(articlesPageSliceActions.setPage(page + 1))
            dispatch(fetchArticleListThunk({
                // page: page + 1
            }))
        }
    });
