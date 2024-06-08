import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleEditDetailsData } from 'features/EditArticlePost/model/selectors/getEditArticlePosts/getEditArticlePosts';
import { editArticlePostThunk } from 'features/EditArticlePost/model/services/editArticlePostThunk';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './EditArticleDetailsPageHeader.module.scss'

interface EditArticleDetailsPageHeaderProps {
    className?: string
    articleId? : string
}

export const EditArticleDetailsPageHeader = memo(({ className, articleId }: EditArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const articleData = useSelector(getArticleEditDetailsData)
    const dispatch = useAppDispatch()

    const onBackToArticleList = useCallback(() => {
        navigate(`${RoutePath.articles}/${articleId}`)
    }, [articleId, navigate])

    const saveArticleHandler = useCallback(() => {
        dispatch(editArticlePostThunk(articleId))
    }, [articleId, dispatch])

    const deleteArticleHandler = useCallback(() => {
    }, [])

    // console.log('EditArticleDetailsPageHeader articleData > ', articleData)
    return (
        <div className={classNames(cls.EditArticleDetailsPageHeader, {}, [className])}>

            <div className={cls.backToArticleList}>
                <Button
                    theme={ThemeButton.OUTLINED}
                    onClick={onBackToArticleList}
                >
                    {t('Назад к списку')}
                </Button>
            </div>

            <div className={cls.articleHandlerWrapper}>
                <Button
                    theme={ThemeButton.OUTLINED}
                    onClick={saveArticleHandler}
                >
                    {t('Cохранить статью')}
                </Button>

                <Button
                    theme={ThemeButton.OUTLINED}
                    onClick={deleteArticleHandler}
                >
                    {t('Удалить статью')}
                </Button>
            </div>

        </div>
    );
});
