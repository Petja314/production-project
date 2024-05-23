import React, { memo, useCallback, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'enteties/Currency';
import cls from './CurrencySelect.module.scss';

interface CurrencyProps {
    className? : string
    value? : Currency
    onChange? : (value : string) => void
    readonly? : boolean
}

const options = [
    { value: Currency.EURO, content: Currency.EURO },
    { value: Currency.GBP, content: Currency.GBP },
    { value: Currency.USD, content: Currency.USD },
];
export const CurrencySelect = memo(({
    className,
    value,
    onChange,
    readonly,
} : CurrencyProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value : string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames(cls.Currency, {}, [className])}
            onChange={onChangeHandler}
            label="Укажите валюту"
            options={options}
            value={value}
            readonly={readonly}
        />
    );
});
