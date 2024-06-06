import React, { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import {
    getArticlePageOrder, getArticlePageSearch, getArticlePageSort, getArticlePageType, getViewStateArticlePage
} from 'pages/ArticlesPage/ui/ArticlesPage/model/selectors/articlesPageSelectors';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleType, ArticleView } from 'enteties/Article/model/types/articles';
import { articlesPageSliceActions } from 'pages/ArticlesPage/ui/ArticlesPage/model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleViewSelector } from 'enteties/Article';
import { Select } from 'shared/ui/Select/Select';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'features/ArticleSortSelector/ArticleSortSelector';
import { SortOrder } from 'shared/types';
import { fetchArticleListThunk } from 'pages/ArticlesPage/ui/ArticlesPage/model/services/fetchArticleList/fetchArticleListThunk';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleTypesTabs } from 'features/ArticleTypesTabs/ArticleTypesTabs';
import cls from './ArticlePageFilter.module.scss'

interface ArticlePageFilterProps {
    className?: string

}

export const ArticlePageFilter = memo(({ className }: ArticlePageFilterProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch()
    const view = useSelector(getViewStateArticlePage)
    const sort = useSelector(getArticlePageSort)
    const order = useSelector(getArticlePageOrder)
    const search = useSelector(getArticlePageSearch)
    const type = useSelector(getArticlePageType)

    const fetchData = useCallback(() => {
        dispatch(fetchArticleListThunk({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback((value : ArticleView) => {
        dispatch(articlesPageSliceActions.setView(value))
        dispatch(articlesPageSliceActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeOrder = useCallback((newOrder : SortOrder) => {
        dispatch(articlesPageSliceActions.setOrder(newOrder))
        dispatch(articlesPageSliceActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSort = useCallback((newSort : ArticleSortField) => {
        dispatch(articlesPageSliceActions.setSort(newSort))
        dispatch(articlesPageSliceActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSearch = useCallback((search : string) => {
        dispatch(articlesPageSliceActions.setSearch(search))
        dispatch(articlesPageSliceActions.setPage(1))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])

    const onChangeType = useCallback((value : ArticleType) => {
        dispatch(articlesPageSliceActions.setType(value))
        dispatch(articlesPageSliceActions.setPage(1))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])

    return (
        <div className={classNames(cls.ArticlePageFilter, {}, [className])}>

            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector
                    className={cls.view}
                    onViewClick={onChangeView}
                    view={view}
                />
            </div>

            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                    className={cls.seachInput}
                />
            </Card>

            <ArticleTypesTabs
                onChangeType={onChangeType}
                value={type}
                className={cls.tabs}
            />

        </div>
    );
});
