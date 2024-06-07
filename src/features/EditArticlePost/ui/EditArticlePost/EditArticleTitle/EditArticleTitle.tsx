import React, {
    memo, useCallback, useEffect, useState
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Article } from 'enteties/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { editArticlePostActions } from 'features/EditArticlePost';
import { useSelector } from 'react-redux';
import { getEditArticleSubTitle, getEditArticleTitle } from 'features/EditArticlePost/model/selectors/getEditArticlePosts/getEditArticlePosts';
import cls from './EditArticleTitle.module.scss'

interface EditArticleTitleProps {
    className?: string
    editMode? : boolean,
}

export const EditArticleTitle = memo(({
    className, editMode
}: EditArticleTitleProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch()
    const editTitle = useSelector(getEditArticleTitle)
    const editSubTitle = useSelector(getEditArticleSubTitle)

    const onChangeTitle = useCallback((value : string) => {
        // setEditTitle(value)
        dispatch(editArticlePostActions.setEditArticleTitle(value))
    }, [dispatch])

    const onChangeSubTitle = useCallback((value : string) => {
        // setEditSubTitle(value)
        dispatch(editArticlePostActions.setEditArticleSubTitle(value))
    }, [dispatch])

    // console.log('editTitleSelector >', editTitleSelector)
    return (
        <div className={classNames(cls.EditArticleTitle, {}, [className])}>
            <Text
                handleTitleChange={onChangeTitle}
                handleTextChange={onChangeSubTitle}
                editMode={editMode}
                className={cls.title}
                title={editTitle}
                text={editSubTitle}
                size={TextSize.L}
            />
        </div>
    );
});
