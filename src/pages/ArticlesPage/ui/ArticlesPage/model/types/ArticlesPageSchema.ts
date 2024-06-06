import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleSortField, ArticleType, ArticleView
} from 'enteties/Article/model/types/articles';
import { User } from 'enteties/User/model/types/userSchema';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading: boolean,
    error: string,
    user? : User,

    // pagination
    page : number,
    limit : number,
    hasMore: boolean,

    // filters
    view: ArticleView,
    order : SortOrder,
    sort : ArticleSortField,
    search : string,
    _inited : boolean,
    type : ArticleType

    // ids: [],
    // entities: {}
}

// 'asc' || 'desc'
