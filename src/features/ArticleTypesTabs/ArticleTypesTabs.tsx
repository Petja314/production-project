import React, { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'enteties/Article/model/types/articles';
import cls from './ArticleTypesTabs.module.scss'

interface ArticleTypesTabsProps {
    className? : string
    onChangeType : (value : ArticleType) => void
    value : ArticleType
}

export const ArticleTypesTabs = memo(({ className, onChangeType, value }: ArticleTypesTabsProps) => {
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => [
        { value: ArticleType.ALL, content: t('All articles') },
        { value: ArticleType.IT, content: t('IT') },
        { value: ArticleType.NEWS, content: t('NEWS') },
        { value: ArticleType.ECONOMICS, content: t('ECONOMICS') },
        { value: ArticleType.SCIENCE, content: t('SCIENCE') },
    ], [t])

    const onTabClick = useCallback((tab : TabItem) => {
        onChangeType(tab.value as ArticleType)
    }, [onChangeType])

    return (
        <Tabs
            onTabClick={onTabClick}
            tabs={typeTabs}
            value={value}
        />

    );
});
