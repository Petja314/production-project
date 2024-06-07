import React, { memo, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
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
    editMode? : boolean
    handleTextChange? : (value : any) => void
    handleTitleChange? : (value : any) => void
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
        editMode = false,
        handleTextChange,
        handleTitleChange
    } = props;
    const { t } = useTranslation();
    // const [editText, setEditText] = useState<string>(text)
    const mods : Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (handleTitleChange) {
            handleTitleChange(e.target.value);
        }
    };

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (handleTextChange) {
            handleTextChange(e.target.value);
        }
    };

    return (
        <div
            className={classNames(cls.Text, mods, [className])}
        >
            {/* {title && <div className={cls.title}>{title}</div>} */}
            {/* {text && <div data-testid={testTextIdNaming} className={cls.text}>{text}</div>}          */}
            {/* {title && <div className={cls.title}>{title}</div>} */}

            {editMode ? (
                <input
                    type="text"
                    value={title}
                    className={cls.title}
                    style={{ all: 'unset', width: '100%' }}
                    onChange={handleChangeTitle}
                />
            ) : (
                <div className={cls.title}>{title}</div>
            )}

            {editMode ? (
                <input
                    type="text"
                    value={text}
                    className={cls.text}
                    style={{ all: 'unset', width: '100%' }}
                    onChange={handleChangeText}
                />
            ) : (
                <div data-testid={testTextIdNaming} className={cls.text}>{text}</div>
            )}
        </div>
    );
});
