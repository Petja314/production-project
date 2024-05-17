import 'app/styles/index.scss';
import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Theme, ThemeProvider, useTheme} from 'app/providers/ThemeProvider';
import {StateSchema, StoreProvider} from "app/StoreProvider";
import {DeepPartial} from "@reduxjs/toolkit";

export const StoreDecorator = (state: DeepPartial<StateSchema> , theme?: Theme) => (StoryComponent: any) => (
    <StoreProvider initialState={state}>
        <ThemeProvider initialTheme={theme}>
            <StoryComponent/>
        </ThemeProvider>
    </StoreProvider>
);
