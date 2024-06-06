import React, { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Select.module.scss';

export interface SelectOptions<T> {
    value : string
    content : string
}
interface SelectProps<T extends string> {
    className?: string
    label?: string
    options? : SelectOptions<T>[]
    value? : T
    onChange? : (value : T) => void
    readonly? : boolean
}

export const Select = <T extends string>({
    className, label, options, value, onChange, readonly,
}: SelectProps<T>) => {
    const { t } = useTranslation();

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            key={opt.value}
            value={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e : ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const mods : Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {label}
                </span>
            )}

            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>

        </div>
    );
};
