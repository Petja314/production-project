import 'app/styles/index.scss';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, ThemeProvider, useTheme } from 'app/providers/ThemeProvider';
import { StateSchema, StoreProvider } from 'app/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'enteties/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { DeepPartial } from '@reduxjs/toolkit';

const defaultAsyncReducers : ReducersList = {
    login: loginReducer,
    profile: profileReducer,
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
