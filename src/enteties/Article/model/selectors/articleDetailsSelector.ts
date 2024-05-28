import { StateSchema } from 'app/StoreProvider';

export const getArticleDetailsData = (state : StateSchema) => state.article?.data
export const getArticleDetailsIsLoading = (state : StateSchema) => state.article?.isLoading
export const getArticleDetailsError = (state : StateSchema) => state.article?.error
