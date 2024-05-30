import { StateSchema } from 'app/StoreProvider';

export const getArticleCommentsError = (state : StateSchema) => state.articleDetailsComments?.error

export const getArticleCommentsIsLoading = (state : StateSchema) => state.articleDetailsComments?.isLoading
