import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleImageBlock } from 'enteties/Article/model/types/articles';
import { editArticlePostActions } from 'features/EditArticlePost';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import UploadPhoto from 'features/uploadPhoto/UploadPhoto';
import { TextArea } from 'shared/ui/TextArea/TextArea';
import cls from './EditArticleImageBlockComponent.module.scss'

interface EditArticleImageBlockComponentProps {
    className?: string
    block : ArticleImageBlock
    editMode? : boolean
}

export const EditArticleImageBlockComponent = memo(({ className, block, editMode }: EditArticleImageBlockComponentProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch()

    const handleChangeTitleTest = useCallback((value : any) => {
        dispatch(editArticlePostActions.setEditArticleImageTitle({ id: block.id, title: value as string }))
    }, [block.id, dispatch])

    const onChangeAvatar = useCallback((value? : string) => {
        dispatch(editArticlePostActions.setEditArticleImageBlock({ id: block.id, img: value || '' }));
    }, [block.id, dispatch]);

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>

            <div className={cls.editImageWrapper}>
                <img src={block.src} alt="image" className={cls.img} />
                <UploadPhoto
                    data={block.src}
                    onChangeAvatar={onChangeAvatar}
                />
            </div>

            {block.title
                && (
                    <TextArea
                        className={cls.editImageTitle}
                        value={block?.title}
                        onChange={handleChangeTitleTest}
                    />
                )}
        </div>
    );
});
