import 'app/styles/index.scss'
import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {BrowserRouter} from "react-router-dom";


export const RouteDecorator =  (story: () => any) => {
    return (
        <BrowserRouter>
            {story()}
        </BrowserRouter>
    )
}

