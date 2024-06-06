import { StateSchema } from 'app/StoreProvider';

export const getArticleRecommendationsError = (state : StateSchema) => state.articleDetailsPage?.recommendations?.error
export const getArticleRecommendationsIsLoading = (state : StateSchema) => state.articleDetailsPage?.recommendations?.isLoading
