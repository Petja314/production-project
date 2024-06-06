import { StateSchema } from 'app/StoreProvider';

export const getArticleCommentsError = (state : StateSchema) => state.articleDetailsPage?.comments?.error
export const getArticleCommentsIsLoading = (state : StateSchema) => state.articleDetailsPage?.comments?.isLoading
