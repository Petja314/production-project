import { StateSchema } from 'app/StoreProvider';

export const getLoadingArticlePage = (state : StateSchema) => state.articleList?.isLoading
export const getViewStateArticlePage = (state : StateSchema) => state.articleList?.view
export const getArticlePageNum = (state : StateSchema) => state.articleList?.page || 1
export const getArticlePageLimit = (state : StateSchema) => state.articleList?.limit || 10
export const getArticlePageHasMore = (state : StateSchema) => state.articleList?.hasMore
export const getArticlePageInited = (state : StateSchema) => state.articleList?._inited
