import React, { memo, useEffect, useRef } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './TextArea.module.scss'

interface TextAreaProps {
    className? : string
    placeholder? : string
    onChange? : (value : string | number, index? : number) => void
    'data-testid'? : string
    value? : string | number
    readonly? : boolean
}

export const TextArea = memo((props : TextAreaProps) => {
    const {
        className, placeholder, onChange, 'data-testid': dataTestIdNaming, value, readonly,
    } = props;

    const textareaRef = useRef(null);

    const adjustHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset the height
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set the height to the scrollHeight
        }
    };
    useEffect(() => {
        adjustHeight(); // Adjust height whenever value changes
    }, [value]);

    const textareaEventHandler = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    const mods : Mods = {
        [cls.readonly]: readonly,
    };
    return (
        <div className={classNames(cls.TextArea, mods, [className])}>
            {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
            <textarea
                ref={textareaRef}
                value={value}
                data-testid={dataTestIdNaming}
                className={cls.blankMode}
                onChange={textareaEventHandler}
                readOnly={readonly}
            />
        </div>
    );
});
