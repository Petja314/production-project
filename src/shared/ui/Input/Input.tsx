import React, { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps {
    className? : string
    type? : string
    placeholder? : string
    onChange? : (value : string | number) => void
    'data-testid'? : string
    value? : string | number
    readonly? : boolean
}

export const Input = memo((props : InputProps) => {
    const {
        type = 'text', className, placeholder, onChange, 'data-testid': dataTestIdNaming, value, readonly,
    } = props;
    const inputEventHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods : Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.Input, mods, [className])}>
            {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
            <input
                value={value}
                data-testid={dataTestIdNaming}
                className={cls.InputField}
                type={type}
                onChange={inputEventHandler}
                readOnly={readonly}
            />
        </div>
    );
});
