import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'enteties/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleCommentsIsLoading, getArticlesComments } from 'pages/ArticlesDetailsPage/model/slices/articleDetailsCommentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsByArticleIdThunk } from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { CommentList } from 'enteties/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticleThunk } from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from './ArticlesDetailsPage.module.scss'

interface ArticlesDetailsPageProps {
    className?: string

}
const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const comments = useSelector(getArticlesComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleIdThunk(id));
    });

    const onSendComment = useCallback((text) => {
        dispatch(addCommentForArticleThunk(text))
    }, [dispatch])

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />

                <AddCommentForm
                    onSendComment={onSendComment}
                />

                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />

            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
