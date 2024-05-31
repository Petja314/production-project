import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { getUserAuthData } from 'enteties/User';
import { getArticleDetailsData } from 'enteties/Article';
import { fetchCommentsByArticleIdThunk } from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticleThunk = createAsyncThunk<Comment, string, ThunkConfig<string> >(
    'ArticlesDetailsPage/addCommentForArticle',
    async (text, thunkAPI) => {
        const { dispatch, extra, getState } = thunkAPI;
        const userData = getUserAuthData(getState())
        // const text = getAddCommentFormText(getState())
        const article = getArticleDetailsData(getState())

        if(!userData || !text || !article) {
            return thunkAPI.rejectWithValue('no data');
        }
        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text
            });
            if (!response.data) {
                throw new Error();
            }
            // dispatch(addCommentFormActions.setText(''))
            dispatch(fetchCommentsByArticleIdThunk(article.id))
            return response.data;
        } catch (err) {
            // return thunkAPI.rejectWithValue(err.message);
            return thunkAPI.rejectWithValue('login error');
        }
    },
);

// "comments": [
//     {
//         "id": "1",
//         "text": "some comment",
//         "articleId": "1",
//         "userId": "1"
//     },
