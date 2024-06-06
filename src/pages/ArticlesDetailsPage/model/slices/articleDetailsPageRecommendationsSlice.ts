import { createEntityAdapter, createSlice, PayloadAction, } from '@reduxjs/toolkit'
import { StateSchema } from 'app/StoreProvider';
import { fetchCommentsByArticleIdThunk } from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { CommentData } from 'enteties/Comment';
import { ArticleDetailsCommentsSchema } from 'pages/ArticlesDetailsPage';
import { ArticleDetailsRecommendationsSchema } from 'pages/ArticlesDetailsPage/model/types/ArticleDetailsRecommendationsSchema';
import { Article } from 'enteties/Article';
import { fetchArticleRecommendationsThunk } from 'pages/ArticlesDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';

// ADAPTER
const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

// SELECTORS
export const getArticlesRecommendation = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
);

const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendationsThunk.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendationsThunk.fulfilled, (state, action: PayloadAction<Article[]>) => {
                // debugger
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendationsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
