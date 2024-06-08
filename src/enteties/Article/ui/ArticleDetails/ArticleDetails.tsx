import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchArticleByIdThunk } from 'enteties/Article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from 'enteties/Article';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleCodeBlockComponent } from 'enteties/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from 'enteties/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from 'enteties/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { getArticleEditDetailsData, getEditArticleEditMode } from 'features/EditArticlePost/model/selectors/getEditArticlePosts/getEditArticlePosts';
import { EditArticleAvatar } from 'features/EditArticlePost/ui/EditArticlePost/EditArticleAvatar/EditArticleAvatar';
import { EditArticleTitle } from 'features/EditArticlePost/ui/EditArticlePost/EditArticleTitle/EditArticleTitle';
import { EditArticleCodeBlockComponent } from 'features/EditArticlePost/ui/EditArticlePost/EditArticleCodeBlockComponent/EditArticleCodeBlockComponent';
import { EditArticleImageBlockComponent } from 'features/EditArticlePost/ui/EditArticlePost/EditArticleImageBlockComponent/EditArticleImageBlockComponent';
import { EditArticleTextBlockComponent } from 'features/EditArticlePost/ui/EditArticlePost/EditArticleTextBlockComponent/EditArticleTextBlockComponent';
import { ArticleBlock, ArticleBlockType } from '../../model/types/articles';
import { articleReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
    className?: string
    id : string
}

const reducers: ReducersList = {
    articleDetails: articleReducer
}
export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const articleEditMode = useSelector(getArticleEditDetailsData)
    const error = useSelector(getArticleDetailsError);
    const editMode = useSelector(getEditArticleEditMode)

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (editMode ? (
                <EditArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                    editMode
                />
            ) : (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            )
            );
        case ArticleBlockType.IMAGE:
            return (editMode ? (
                <EditArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                    editMode
                />
            ) : (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            )
            );
        case ArticleBlockType.TEXT:
            return (editMode ? (
                <EditArticleTextBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                    editMode
                />
            ) : (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            )
            );
        default:
            return null;
        }
    }, [editMode]);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleByIdThunk(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи.')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    { editMode ? (
                        <EditArticleAvatar article={articleEditMode} />
                    ) : (
                        <Avatar
                            size={200}
                            src={article?.img}
                            className={cls.avatar}
                        />
                    )}
                </div>
                { editMode ? (
                    <EditArticleTitle editMode />
                ) : (
                    <Text
                        className={cls.title}
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                )}
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
                { editMode ? (
                    articleEditMode?.blocks.map(renderBlock)
                ) : (
                    article?.blocks.map(renderBlock)
                ) }
            </>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div style={{ border: '1px solid red' }} className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
