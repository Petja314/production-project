import { Article } from 'enteties/Article';
import { EditArticle } from 'enteties/Article/model/types/articles';

export interface EditedArticlePageSchema {
    isLoading?: boolean,
    error?: string,
    // data : EditArticle
    data : EditArticle,
    editMode? : boolean,
    notification? : string
}
