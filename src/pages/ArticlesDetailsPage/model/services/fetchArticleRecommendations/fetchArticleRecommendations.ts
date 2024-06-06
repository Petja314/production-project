import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { Article } from 'enteties/Article';
import { getArticlePageLimit } from 'pages/ArticlesPage/ui/ArticlesPage/model/selectors/articlesPageSelectors';

export const fetchArticleRecommendationsThunk = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'ArticlesDetailsPage/fetchArticleRecommendationsThunk',
    async (props, thunkApi) => {
        const {
            dispatch, extra, getState, rejectWithValue
        } = thunkApi;
        const limit = getArticlePageLimit(getState())
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: 4
                },
            });
            // debugger
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
