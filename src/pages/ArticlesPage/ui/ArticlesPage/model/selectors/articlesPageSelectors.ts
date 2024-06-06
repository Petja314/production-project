import { StateSchema } from 'app/StoreProvider';
import { ArticleSortField, ArticleType } from 'enteties/Article/model/types/articles';

export const getLoadingArticlePage = (state : StateSchema) => state.articleList?.isLoading
export const getViewStateArticlePage = (state : StateSchema) => state.articleList?.view
export const getArticlePageNum = (state : StateSchema) => state.articleList?.page || 1
export const getArticlePageLimit = (state : StateSchema) => state.articleList?.limit || 10
export const getArticlePageHasMore = (state : StateSchema) => state.articleList?.hasMore
export const getArticlePageInited = (state : StateSchema) => state.articleList?._inited

export const getArticlePageOrder = (state : StateSchema) => state.articleList?.order ?? 'asc'
export const getArticlePageSort = (state : StateSchema) => state.articleList?.sort ?? ArticleSortField.CREATED
export const getArticlePageSearch = (state : StateSchema) => state.articleList?.search ?? ''
export const getArticlePageType = (state : StateSchema) => state.articleList?.type ?? ArticleType.ALL
