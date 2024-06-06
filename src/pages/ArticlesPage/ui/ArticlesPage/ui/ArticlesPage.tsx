import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'enteties/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageReducer, getArticlesPageSlice } from 'pages/ArticlesPage/ui/ArticlesPage/model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoadingArticlePage, getViewStateArticlePage } from 'pages/ArticlesPage/ui/ArticlesPage/model/selectors/articlesPageSelectors';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlePageThunk } from 'pages/ArticlesPage/ui/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePageThunk';
import { initArticlesPageThunk } from 'pages/ArticlesPage/ui/ArticlesPage/model/services/initArticlesPage/initArticlesPageThunk';
import { ArticlePageFilter } from 'pages/ArticlesPage/ui/ArticlePageFilter/ArticlePageFilter';
import { useSearchParams } from 'react-router-dom';
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const reducer : ReducersList = {
    articleList: articlePageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation();
    const article = useSelector(getArticlesPageSlice.selectAll)
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getLoadingArticlePage)
    const view = useSelector(getViewStateArticlePage)
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log('searchParams', searchParams)

    const onLoadNextPagePart = useCallback(() => {
        dispatch(fetchNextArticlePageThunk())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPageThunk(searchParams))
    })

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPagePart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >

                <ArticlePageFilter />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    article={article}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage)
