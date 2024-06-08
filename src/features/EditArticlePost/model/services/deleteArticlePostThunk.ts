import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { Article } from 'enteties/Article';
import { getArticleEditDetailsData } from 'features/EditArticlePost/model/selectors/getEditArticlePosts/getEditArticlePosts';
import { editArticlePostActions } from 'features/EditArticlePost';

export const deleteArticlePostThunk = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>(
    'EditArticlePost/deleteArticlePostThunk',
    async (articleId, thunkApi) => {
        const {
            extra, rejectWithValue, getState, dispatch
        } = thunkApi;
        // debugger
        if(!articleId) {
            return rejectWithValue('error');
        }
        dispatch(editArticlePostActions.setNotification('Article post has been successfully deleted!.'))
        try {
            const response = await extra.api.delete<Article>(`/articles/${articleId}`);
            // debugger
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
