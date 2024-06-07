import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from 'enteties/Article/model/types/articles';
import { editArticlePostActions } from 'features/EditArticlePost';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './EditArticleCodeBlockComponent.module.scss'

interface EditArticleCodeBlockComponentProps {
    className?: string
    block : ArticleCodeBlock
    // block : any
    editMode? : boolean
}

export const EditArticleCodeBlockComponent = memo(({ className, block, editMode }: EditArticleCodeBlockComponentProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch()

    const handleCodeChange = useCallback((value : string) => {
        dispatch(editArticlePostActions.setEditCodeBlock({ id: block.id, code: value }))
    }, [block.id, dispatch])

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code
                text={block.code}
                editMode={editMode}
                handleCodeChange={handleCodeChange}
            />
        </div>
    );
});
