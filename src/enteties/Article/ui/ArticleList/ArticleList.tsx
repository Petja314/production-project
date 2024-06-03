import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Article } from 'enteties/Article';
import { ArticleView } from 'enteties/Article/model/types/articles';
import { ArticleListItem } from 'enteties/Article/ui/ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string
    article : Article[]
    isLoading? : boolean
    view? : ArticleView
}

export const ArticleList = memo(({
    className, article, isLoading, view
}: ArticleListProps) => {
    const { t } = useTranslation();

    // console.log('ArticleList isLoading > ', isLoading)
    if(isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {new Array(view === ArticleView.GRID ? 9 : 3)
                    .fill(0)
                    .map((item, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <ArticleListItemSkeleton view={view} key={index} />
                    ))}
            </div>
        )
    }

    const renderArticle = (article : Article) => {
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
            />
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {article.length > 0 ? (
                article.map(renderArticle)
            ) : (
                null
            )}
        </div>
    );
});
