import React, {
    memo, Suspense, useCallback, useState
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleEditDetailsData } from 'features/EditArticlePost/model/selectors/getEditArticlePosts/getEditArticlePosts';
import { editArticlePostThunk } from 'features/EditArticlePost/model/services/editArticlePostThunk';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { deleteArticlePostThunk } from 'features/EditArticlePost/model/services/deleteArticlePostThunk';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { fetchEditArticlePostThunk } from 'features/EditArticlePost/model/services/fetchEditArticlePostThunk';
import cls from './EditArticleDetailsPageHeader.module.scss'

interface EditArticleDetailsPageHeaderProps {
    className?: string
    articleId? : string
    notification? : any
    showNotification? : any
}

export const EditArticleDetailsPageHeader = memo(({
    className, articleId, showNotification, notification
}: EditArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const articleData = useSelector(getArticleEditDetailsData)
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onBackToArticleList = useCallback(() => {
        navigate(`${RoutePath.articles}/${articleId}`)
    }, [articleId, navigate])

    const saveArticleHandler = useCallback(() => {
        dispatch(editArticlePostThunk(articleId))
    }, [articleId, dispatch])

    // const deleteArticleHandler = useCallback(() => {
    //     dispatch(deleteArticlePostThunk(articleId))
    // }, [articleId, dispatch])
    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsOpen(true);
    }, []);

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
                    onClick={onShowModal}
                >
                    {t('Удалить статью')}
                </Button>
            </div>
            <DeleteArticlePost
                showNotification={showNotification}
                notification={notification}
                isOpen={isOpen}
                onCloseModal={onCloseModal}
                articleId={articleId}
            />
        </div>
    );
});
const DeleteArticlePost = ({
    articleId, isOpen, onCloseModal, showNotification, notification
} : any) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const deleteArticleHandler = useCallback(() => {
        dispatch(deleteArticlePostThunk(articleId))
        setTimeout(() => {
            // dispatch(fetchEditArticlePostThunk(articleId))
            onCloseModal()
            navigate(RoutePath.articles)
        }, 2000)
    }, [onCloseModal, dispatch, articleId])

    return (
        <Modal
            isOpen={isOpen}
            onClose={onCloseModal}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <div>
                    Are you sure you want to delete this article post?
                </div>

                { showNotification
                    && (
                        <div>
                            {notification}
                        </div>
                    )}

                <Button
                    onClick={deleteArticleHandler}
                    theme={ThemeButton.OUTLINED}
                >
                    Delete post
                </Button>
            </Suspense>
        </Modal>
    )
}
