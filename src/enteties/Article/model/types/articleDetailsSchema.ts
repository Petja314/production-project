import { Article } from 'enteties/Article';

export interface ArticleDetailsSchema {
    isLoading? : boolean
    error? : string
    data : Article
}
