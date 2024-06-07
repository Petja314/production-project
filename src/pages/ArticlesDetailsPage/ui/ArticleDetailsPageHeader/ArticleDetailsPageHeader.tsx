import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User';
import { getArticleDetailsData } from 'enteties/Article';
import { getCanEditArticle } from 'pages/ArticlesDetailsPage/model/selectors/article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticleDetailsPageHeader.module.scss'

interface ArticleDetailsPageHeaderProps {
    className?: string

}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const userData = useSelector(getUserAuthData)
    const article = useSelector(getArticleDetailsData)

    const canEdit = useSelector(getCanEditArticle)
    // const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch()

    const onBackToList = useCallback(() => {
        // debugger
        navigate(RoutePath.articles)
        // dispatch(initArticlesPageThunk(searchParams))
        // dispatch(fetchArticleListThunk({}))
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate])

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button
                theme={ThemeButton.OUTLINED}
                onClick={onBackToList}
            >
                {t('Назад к списку')}
            </Button>

            {canEdit && (
                <Button
                    className={cls.editBtn}
                    theme={ThemeButton.OUTLINED}
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            )}

        </div>
    );
});
