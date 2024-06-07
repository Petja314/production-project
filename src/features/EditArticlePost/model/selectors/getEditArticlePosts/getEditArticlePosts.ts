import { StateSchema } from 'app/StoreProvider';

export const getEditArticleErrorState = (state : StateSchema) => state?.articleEditPage?.error || ''
export const getEditArticleIsLoadingState = (state : StateSchema) => state?.articleEditPage?.isLoading
export const getEditArticleTitle = (state : StateSchema) => state?.articleEditPage?.data?.title ?? ''
export const getEditArticleSubTitle = (state : StateSchema) => state?.articleEditPage?.data?.subtitle ?? ''
export const getArticleEditDetailsData = (state : StateSchema) => state.articleEditPage?.data
