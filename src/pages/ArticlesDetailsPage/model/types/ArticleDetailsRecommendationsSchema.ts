import { CommentData } from 'enteties/Comment';
import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'enteties/Article';

// extends EntityState<CommentData> === entities : Record<any, any> && ids : string[]"
export interface ArticleDetailsRecommendationsSchema extends EntityState<Article>{
    isLoading : boolean
    error? : string
    // ids : string[]
    // entities : Record<any, any>
}
