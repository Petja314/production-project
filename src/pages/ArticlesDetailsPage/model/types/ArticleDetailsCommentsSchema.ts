import { CommentData } from 'enteties/Comment';
import { EntityState } from '@reduxjs/toolkit';

// extends EntityState<CommentData> === entities : Record<any, any> && ids : string[]"
export interface ArticleDetailsCommentsSchema extends EntityState<CommentData>{
    isLoading : boolean
    error? : string
    data? : CommentData[]
    // ids : string[]
    // entities : Record<any, any>
}

// export interface ArticleDetailsCommentsSchema {
//     isLoading : boolean
//     error? : string
//     data? : CommentData[]
//
// }
