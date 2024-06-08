import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { Article } from 'enteties/Article';
import { getArticleEditDetailsData } from 'features/EditArticlePost/model/selectors/getEditArticlePosts/getEditArticlePosts';
import { editArticlePostActions } from 'features/EditArticlePost';

export const editArticlePostThunk = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>(
    'EditArticlePost/editArticlePostThunk',
    async (articleId, thunkApi) => {
        const {
            extra, rejectWithValue, getState, dispatch
        } = thunkApi;
        // debugger
        const articlePost = getArticleEditDetailsData(getState())
        if(!articleId && articlePost) {
            return rejectWithValue('error');
        }
        dispatch(editArticlePostActions.setNotification('Article post has been successfully updated.'))
        try {
            const response = await extra.api.put<Article>(`/articles/${articleId}`, articlePost);
            // debugger
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
