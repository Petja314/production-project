import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss"
import {useTranslation} from "react-i18next";


export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}
export interface TextProps {
    className?: string
    title?: string
    text?: string
    theme? : TextTheme
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text
        ,theme= TextTheme.PRIMARY
    } = props;
    const {t} = useTranslation();


    return (
        <div className={classNames(cls.Text,{[cls[theme]] : true} , [className])}>
            {title && <div className={cls.title}>{title}</div>}
            {text && <div className={cls.text}>{text}</div>}
        </div>
    );
};

