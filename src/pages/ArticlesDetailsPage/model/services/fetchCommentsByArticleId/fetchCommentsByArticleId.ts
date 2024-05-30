import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { CommentData } from 'enteties/Comment';

export const fetchCommentsByArticleIdThunk = createAsyncThunk<
    CommentData[],
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetails/fetchCommentsByArticleIdThunk',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        if(!articleId) {
            return rejectWithValue('error');
        }
        try {
            const response = await extra.api.get<CommentData[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
