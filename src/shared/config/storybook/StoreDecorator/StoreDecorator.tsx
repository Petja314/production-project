import 'app/styles/index.scss';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, ThemeProvider, useTheme } from 'app/providers/ThemeProvider';
import { StateSchema, StoreProvider } from 'app/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';

const defaultAsyncReducers : DeepPartial<ReducersMapObject<StateSchema>> = {
    login: loginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    theme?: Theme,
    asyncReducers? : DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: any) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <ThemeProvider initialTheme={theme}>
            <StoryComponent />
        </ThemeProvider>
    </StoreProvider>
);
