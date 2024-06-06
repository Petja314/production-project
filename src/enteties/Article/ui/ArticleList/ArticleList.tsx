import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Article } from 'enteties/Article';
import { ArticleView } from 'enteties/Article/model/types/articles';
import { ArticleListItem } from 'enteties/Article/ui/ArticleListItem/ArticleListItem';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import cls from './ArticleList.module.scss'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string
    article : Article[]
    isLoading? : boolean
    view? : ArticleView
    target? : HTMLAttributeAnchorTarget
}
const getSkeleton = (view: ArticleView) => new Array(view === ArticleView.LIST ? 4 : 10)
    .fill(0)
    .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo(({
    className, article, isLoading, view, target
}: ArticleListProps) => {
    const { t } = useTranslation();
    const renderArticle = (article : Article) => {
        return (
            <ArticleListItem
                target={target}
                key={article.id}
                article={article}
                view={view}
            />
        )
    }

    if(!isLoading && !article.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text
                    size={TextSize.L}
                    theme={TextTheme.ERROR}
                    text={t('Article not found')}
                />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {article.length > 0 ? (
                article.map(renderArticle)
            ) : (
                null
            )}
            {isLoading && getSkeleton(view)}
        </div>
    );
});
