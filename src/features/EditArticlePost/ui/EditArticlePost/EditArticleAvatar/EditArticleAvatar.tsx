import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import UploadPhoto from 'features/uploadPhoto/UploadPhoto';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { EditArticle } from 'enteties/Article/model/types/articles';
import { editArticlePostActions } from 'features/EditArticlePost';
import cls from './EditArticleAvatar.module.scss'

interface EditArticleAvatarProps {
    className?: string
    article : EditArticle
}

export const EditArticleAvatar = memo(({ className, article, }: EditArticleAvatarProps) => {
    const dispatch = useAppDispatch()

    const onChangeAvatar = useCallback((value? : string) => {
        dispatch(editArticlePostActions.setEditArticleImage(value || ''));
    }, [dispatch]);
    return (
        <div className={classNames(cls.EditArticleAvatar, {}, [className])}>
            <Avatar
                size={200}
                src={article?.img}
                className={cls.avatar}
            />
            <UploadPhoto
                data={article?.img}
                onChangeAvatar={onChangeAvatar}
            />
        </div>
    );
});
