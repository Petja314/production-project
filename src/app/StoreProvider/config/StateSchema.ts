import { CounterSchema } from 'enteties/Counter';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { ProfileSchema } from 'enteties/Profile';
import { AxiosInstance } from 'axios';
import { To } from 'react-router-dom';
import { NavigateOptions } from 'react-router';
import { ArticleDetailsSchema } from 'enteties/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticlesDetailsPage';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageCommentsSchema } from 'pages/ArticlesPage';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    // Async reducers
    login? : LoginSchema
    profile? : ProfileSchema,
    articleDetails? : ArticleDetailsSchema,
    articleDetailsComments? : ArticleDetailsCommentsSchema,
    addCommentForm? : AddCommentFormSchema
    articleList? : ArticlesPageCommentsSchema

}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state : StateSchema, action : AnyAction) => CombinedState<StateSchema>,
    add: (key : StateSchemaKey, reducer : Reducer) => void
    remove: (key : StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager : ReducerManager
}

export interface ThunkExtraArg {
    api : AxiosInstance
    navigate : (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue : T;
    extra : ThunkExtraArg
    state : StateSchema
}
