import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { Article } from 'enteties/Article';
import {
    getArticlePageLimit, getArticlePageNum, getArticlePageOrder, getArticlePageSearch, getArticlePageSort, getArticlePageType
} from 'pages/ArticlesPage/ui/ArticlesPage/model/selectors/articlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { ArticleType } from 'enteties/Article/model/types/articles';

interface FetchArticleListThunkProps {
    // page? : number
    replace? : boolean
}

export const fetchArticleListThunk = createAsyncThunk<Article[], FetchArticleListThunkProps, ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleIdThunk',
    async (props, thunkApi) => {
        const {
            dispatch, extra, getState, rejectWithValue
        } = thunkApi;
        const limit = getArticlePageLimit(getState())
        const sort = getArticlePageSort(getState())
        const order = getArticlePageOrder(getState())
        const search = getArticlePageSearch(getState())
        const page = getArticlePageNum(getState())
        const type = getArticlePageType(getState())

        try {
            addQueryParams({
                sort, order, search, type,
            });
            // debugger
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: 10,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
