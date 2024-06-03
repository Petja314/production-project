import { StateSchema } from 'app/StoreProvider';

export const getLoadingArticlePage = (state : StateSchema) => state.articleList?.isLoading
export const getViewStateArticlePage = (state : StateSchema) => state.articleList?.view
