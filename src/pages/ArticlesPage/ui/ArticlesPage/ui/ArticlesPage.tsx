import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Article, ArticleList } from 'enteties/Article';
import { ArticleView } from 'enteties/Article/model/types/articles';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageReducer, articlesPageSliceActions, getArticlesPageSlice } from 'pages/ArticlesPage/ui/ArticlesPage/model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticleListThunk } from 'pages/ArticlesPage/ui/ArticlesPage/model/services/fetchArticleList/fetchArticleListThunk';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getArticlePageHasMore,
    getArticlePageLimit, getArticlePageNum, getLoadingArticlePage, getViewStateArticlePage
} from 'pages/ArticlesPage/ui/ArticlesPage/model/selectors/articlesPageSelectors';
import { ArticleViewSelector } from 'enteties/Article/ui/ArticleViewSelector/ArticleViewSelector';
import { ARTICLE_LIST_STYLE_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlePageThunk } from 'pages/ArticlesPage/ui/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePageThunk';
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
    const page = useSelector(getArticlePageNum)
    const hasMore = useSelector(getArticlePageHasMore)

    const onLoadNextPagePart = useCallback(() => {
        dispatch(fetchNextArticlePageThunk())
        // if (hasMore && !isLoading) {
        //     dispatch(articlesPageSliceActions.setPage(page + 1))
        //     dispatch(fetchArticleListThunk({ page: page + 1 }))
        // }
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(articlesPageSliceActions.initViewState())
        dispatch(fetchArticleListThunk({
            page: 1
        }))
    })

    const onChangeView = useCallback((value : ArticleView) => {
        dispatch(articlesPageSliceActions.setView(value))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducer}>
            <Page
                onScrollEnd={onLoadNextPagePart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticleViewSelector
                    className={cls.view}
                    onViewClick={onChangeView}
                    view={view}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    article={article}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage)
