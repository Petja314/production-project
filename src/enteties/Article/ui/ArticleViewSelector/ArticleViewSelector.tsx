import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlesPageSliceActions } from 'pages/ArticlesPage/ui/ArticlesPage/model/slices/articlesPageSlice';
import { ArticleView } from 'enteties/Article/model/types/articles';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ArticleViewSelector.module.scss'
import GridIcon from '../../../../shared/assets/icons/grid.svg'
import ListIcon from '../../../../shared/assets/icons/list.svg'

interface ArticleViewSelectorProps {
    className?: string
    onViewClick? : (value : ArticleView) => void
    view? : ArticleView
}
const viewTypes = [
    { view: ArticleView.LIST, icon: ListIcon },
    { view: ArticleView.GRID, icon: GridIcon },
]

export const ArticleViewSelector = memo(({ className, onViewClick, view }: ArticleViewSelectorProps) => {
    // const dispatch = useAppDispatch()

    // const setListArticleStyle = useCallback(() => {
    //     dispatch(articlesPageSliceActions.setView(ArticleView.LIST))
    // }, [dispatch])
    //
    // const setGridArticleStyle = useCallback(() => {
    //     dispatch(articlesPageSliceActions.setView(ArticleView.GRID))
    // }, [dispatch])

    const onClick = (newView : ArticleView) => {
        return () => {
            onViewClick?.(newView)
        }
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {/* <GridIcon onClick={setGridArticleStyle} /> */}
            {/* <ListIcon onClick={setListArticleStyle} /> */}
            {viewTypes.map((item, index) => (
                <Button
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(item.view)}
                >
                    <Icon
                        className={classNames('', { [cls.notSelected]: item.view !== view }, [className])}
                        Svg={item.icon}
                    />
                </Button>
            ))}
        </div>
    );
});
