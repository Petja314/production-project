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
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ScrollSaverSchema } from 'features/ScrollSaver';
import { ArticleDetailsPageSchema } from 'pages/ArticlesDetailsPage';
import { EditedArticlePageSchema } from 'features/EditArticlePost';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    scrollSaver : ScrollSaverSchema,

    // Async reducers
    login? : LoginSchema
    profile? : ProfileSchema,
    articleDetails : ArticleDetailsSchema,
    // articleDetailsComments? : ArticleDetailsCommentsSchema,
    // articleDetailsRecommendations? : ArticleDetailsRecommendationsSchema
    addCommentForm? : AddCommentFormSchema,
    articleList? : ArticlesPageSchema,
    articleDetailsPage? : ArticleDetailsPageSchema
    articleEditPage? : EditedArticlePageSchema
}

export type StateSchemaKey = keyof StateSchema
// eslint-disable-next-line no-undef
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state : StateSchema, action : AnyAction) => CombinedState<StateSchema>,
    add: (key : StateSchemaKey, reducer : Reducer) => void,
    remove: (key : StateSchemaKey) => void,
    // true - mounted, false - unmounted
    getMountedReducers : () => MountedReducers
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
