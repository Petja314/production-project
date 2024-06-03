import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'enteties/Article/model/types/articles';

export interface ArticlesPageCommentsSchema extends EntityState<Article>{
    isLoading: boolean,
    error: string,
    view: ArticleView,
    // ids: [],
    // entities: {}
}
