import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}
export interface TextProps {
    className?: string
    title?: string
    text?: string
    theme? : TextTheme
    'data-testid'? : string
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        'data-testid': testTextIdNaming,
    } = props;
    const { t } = useTranslation();

    return (
        <div

            className={classNames(cls.Text, { [cls[theme]]: true }, [className])}
        >
            {title && <div className={cls.title}>{title}</div>}
            {text && <div data-testid={testTextIdNaming} className={cls.text}>{text}</div>}
        </div>
    );
});
