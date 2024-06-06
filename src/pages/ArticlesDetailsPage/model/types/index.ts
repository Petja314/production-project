import { ArticleDetailsCommentsSchema } from 'pages/ArticlesDetailsPage';
import { ArticleDetailsRecommendationsSchema } from 'pages/ArticlesDetailsPage/model/types/ArticleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments : ArticleDetailsCommentsSchema,
    recommendations : ArticleDetailsRecommendationsSchema
}
