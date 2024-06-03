import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'enteties/Article/model/types/articles';
import { Card } from 'shared/ui/Card/Card';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
    className?: string
    view : ArticleView
}

export const ArticleListItemSkeleton = memo(({ className, view }: ArticleListItemSkeletonProps) => {
    if(view === ArticleView.LIST) {
        return (
            <div className={classNames(cls.LIST, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton width={50} border="50%" className={cls.img} />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={100} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={500} height={24} className={cls.title} />
                    <Skeleton width={50} height={24} className={cls.types} />
                    <Skeleton height={250} className={cls.img} />
                    <Skeleton height={60} className={cls.textBlock} />
                    <Skeleton height={60} className={cls.textBlock} />
                    <Skeleton height={30} className={cls.textBlock} />
                    <Skeleton height={40} width={100} />
                </Card>
            </div>
        )
    }
    // console.log('articles', articles)
    return (
        <div className={classNames(cls.GRID, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} className={cls.img} />
                </div>

                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} className={cls.types} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
});
