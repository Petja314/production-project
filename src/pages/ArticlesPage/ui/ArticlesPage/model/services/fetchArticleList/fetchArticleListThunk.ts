import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { Article } from 'enteties/Article';
import { getArticlePageLimit } from 'pages/ArticlesPage/ui/ArticlesPage/model/selectors/articlesPageSelectors';

interface FetchArticleListThunkProps {
    page? : number
}

export const fetchArticleListThunk = createAsyncThunk<Article[], FetchArticleListThunkProps, ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleIdThunk',
    async (props, thunkApi) => {
        const {
            dispatch, extra, getState, rejectWithValue
        } = thunkApi;
        const { page = 1 } = props;
        const limit = getArticlePageLimit(getState())
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page
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
