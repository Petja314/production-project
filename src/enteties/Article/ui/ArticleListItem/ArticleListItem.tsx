import React, { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Article } from 'enteties/Article';
import { ArticleBlockType, ArticleTextBlock, ArticleView } from 'enteties/Article/model/types/articles';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ArticleTextBlockComponent } from 'enteties/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './ArticleListItem.module.scss'
import Eye from '../../../../shared/assets/icons/eye.svg'

interface ArticleListItemProps {
    className?: string
    article : Article
    view : ArticleView
    target? : HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo(({
    className, article, view, target
}: ArticleListItemProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    // console.log('article?.type?.', article?.type)
    const types = <Text text={article.type.join(', ')} className={cls.types} />
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={Eye} />
        </>
    )
    if(view === ArticleView.LIST) {
        const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock
        return (
            <div className={classNames(cls.LIST, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar src={article?.user.avatar} size={50} />
                        <Text text={article?.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text text={article.title} size={TextSize.L} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink to={RoutePath.article_details + article.id}>
                            <Button
                                theme={ThemeButton.OUTLINED}
                            >
                                {t('Читать далее')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }
    // console.log('articles', articles)
    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames(cls.GRID, {}, [className, cls[view]])}
        >
            <Card
                className={cls.card}
            >
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>

                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text className={cls.title} text={article.title} />
            </Card>
        </AppLink>
    );
});
