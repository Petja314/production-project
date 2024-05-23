import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Country } from 'enteties/Country';
import { Select } from 'shared/ui/Select/Select';
import cls from './CountrySelect.module.scss';

interface CountrySelectProps {
    className? : string
    value? : Country
    onChange? : (value : string) => void
    readonly? : boolean
}

const options = [
    { value: Country.Estonia, content: Country.Estonia },
    { value: Country.Latvia, content: Country.Latvia },
    { value: Country.Portugal, content: Country.Portugal },
    { value: Country.UnitedKingdom, content: Country.UnitedKingdom },
];

export const CountrySelect = ({
    className,
    value,
    onChange,
    readonly,
} : CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value : string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames(cls.Currency, {}, [className])}
            onChange={onChangeHandler}
            label="Укажите страну"
            options={options}
            value={value}
            readonly={readonly}
        />
    );
};
