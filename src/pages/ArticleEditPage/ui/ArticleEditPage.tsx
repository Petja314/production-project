import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchArticleByIdThunk } from 'enteties/Article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Article, getArticleDetailsData } from 'enteties/Article';
import { EditArticleCodeBlockComponent } from 'features/EditArticlePost/ui/EditArticlePost/EditArticleCodeBlockComponent/EditArticleCodeBlockComponent';
import { EditArticleImageBlockComponent } from 'features/EditArticlePost/ui/EditArticlePost/EditArticleImageBlockComponent/EditArticleImageBlockComponent';
import { EditArticleTextBlockComponent } from 'features/EditArticlePost/ui/EditArticlePost/EditArticleTextBlockComponent/EditArticleTextBlockComponent';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleReducer } from 'enteties/Article/model/slice/articleDetailsSlice';
import { ArticleBlock, ArticleBlockType, ArticleImageBlock } from 'enteties/Article/model/types/articles';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { EditArticleTitle } from 'features/EditArticlePost/ui/EditArticlePost/EditArticleTitle/EditArticleTitle';
import { EditArticleDetailsPageHeader } from 'features/EditArticlePost/ui/EditArticlePost/EditArticleDetailsPageHeader/EditArticleDetailsPageHeader';
import { editArticlePostActions, editArticlePostReducer } from 'features/EditArticlePost';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { getArticleEditDetailsData } from 'features/EditArticlePost/model/selectors/getEditArticlePosts/getEditArticlePosts';
import UploadPhoto from 'features/uploadPhoto/UploadPhoto';
import { EditArticleAvatar } from 'features/EditArticlePost/ui/EditArticlePost/EditArticleAvatar/EditArticleAvatar';
import cls from './ArticleEditPage.module.scss'

interface ArticleEditPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetails: articleReducer,
    articleEditPage: editArticlePostReducer
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{id : string}>()
    const article = useSelector(getArticleEditDetailsData)
    const isEdit = Boolean(id)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticleByIdThunk(id));
    }, [dispatch, id]);

    // console.log('ArticleEditPage article > ', article?.blocks)
    console.log('article >', article)
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>
                    Редактирование статьи с ID:
                    {id}
                </h2>

                <EditArticleDetailsPageHeader articleId={id} />
                <EditArticleAvatar article={article} />
                <EditArticleTitle editMode />

                {article?.blocks && article?.blocks.map((block: ArticleBlock) => {
                    switch (block.type) {
                    case ArticleBlockType.TEXT:
                        return (
                            <EditArticleTextBlockComponent
                                key={block.id}
                                block={block}
                                className={cls.block}
                                editMode
                            />
                        );
                    case ArticleBlockType.CODE:
                        return (
                            <EditArticleCodeBlockComponent
                                key={block.id}
                                block={block}
                                className={cls.block}
                                editMode
                            />
                        );
                    case ArticleBlockType.IMAGE:
                        return (
                            <EditArticleImageBlockComponent
                                key={block.id}
                                block={block}
                                className={cls.block}
                                editMode
                            />
                        );
                    default:
                        return null;
                    }
                })}
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleEditPage
