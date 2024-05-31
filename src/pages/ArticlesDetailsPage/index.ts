import ArticlesDetailsPage from './ui/ArticlesDetailsPage/ArticlesDetailsPage';

export { ArticlesDetailsPage }

// Schema

export { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema'

// Selectors
export { getArticleCommentsIsLoading, getArticleCommentsError } from './model/selectors/comments'
// export { addCommentForArticleThunk } from './model/services/addCommentForArticle/addCommentForArticle'
