import React, { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'enteties/Article/model/types/articles';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
    className?: string,
    sort : ArticleSortField,
    order : SortOrder,
    onChangeOrder : (newOrder : SortOrder) => void,
    onChangeSort : (newSort : ArticleSortField) => void,

}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangeOrder, onChangeSort
    } = props;
    const { t } = useTranslation();
    const orderOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        }
    ], [t])

    const sortFieldOption = useMemo<SelectOptions<SortOrder>[]>(() => [
        {
            value: ArticleSortField.VIEWS,
            content: t('Просмотры')
        },
        {
            value: ArticleSortField.CREATED,
            content: t('Дате')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('Название')
        },
    ], [t])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                options={sortFieldOption}
                label={t('Сортировать ПО')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select<SortOrder>
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
});
