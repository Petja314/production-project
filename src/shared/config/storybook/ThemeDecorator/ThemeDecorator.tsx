import 'app/styles/index.scss'
import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {Theme, useTheme} from "app/providers/ThemeProvider";


export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);


