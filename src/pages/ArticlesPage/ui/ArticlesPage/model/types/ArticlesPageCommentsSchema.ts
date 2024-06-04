import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'enteties/Article/model/types/articles';
import { User } from 'enteties/User/model/types/userSchema';

export interface ArticlesPageCommentsSchema extends EntityState<Article>{
    isLoading: boolean,
    error: string,
    view: ArticleView,
    user? : User,
    // pagination
    page : number,
    limit : number,
    hasMore: boolean
    // ids: [],
    // entities: {}
}
