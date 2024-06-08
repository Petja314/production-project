import React, {
    memo, useEffect, useRef, useState
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TextArea } from 'shared/ui/TextArea/TextArea';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}
export interface TextProps {
    className?: string
    title?: string
    text?: string
    theme? : TextTheme
    'data-testid'? : string
    align? : TextAlign
    size? : TextSize
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        'data-testid': testTextIdNaming,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;
    const { t } = useTranslation();
    const mods : Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            { title && (<div className={cls.title}>{title}</div>)}
            { text && <div data-testid={testTextIdNaming} className={cls.text}>{text}</div>}

        </div>
    );
});
