import 'app/styles/index.scss';
import React from 'react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { StateSchema, StoreProvider } from 'app/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'enteties/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { DeepPartial } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from 'pages/ArticlesDetailsPage/model/slices/articleDetailsCommentsSlice';
import { addCommentFormReducer } from 'features/addCommentForm/module/slices/addCommentFormSlice';
import { articleReducer } from 'enteties/Article/model/slice/articleDetailsSlice';

const defaultAsyncReducers : ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    addCommentForm: addCommentFormReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    theme?: Theme,
    asyncReducers? : ReducersList,
) => (StoryComponent: any) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <ThemeProvider initialTheme={theme}>
            <StoryComponent />
        </ThemeProvider>
    </StoreProvider>
);
