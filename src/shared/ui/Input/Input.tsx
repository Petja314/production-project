import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps {
    className? : string
    type? : string
    placeholder? : string
    onChange? : (value : string) => void
}

export const Input = memo((props : InputProps) => {
    const {
        type = 'text', className, placeholder, onChange,
    } = props;
    const inputEventHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
            <input
                className={cls.InputField}
                type={type}
                onChange={inputEventHandler}
            />
        </div>
    );
});
