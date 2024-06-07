import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from 'enteties/Article/model/types/articles';
import { editArticlePostActions } from 'features/EditArticlePost';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './EditArticleTextBlockComponent.module.scss'

interface EditArticleTextBlockComponentProps {
    className?: string
    block : ArticleTextBlock
    editMode : boolean
}

export const EditArticleTextBlockComponent = memo(({ className, block, editMode }: EditArticleTextBlockComponentProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch()

    const changeArticleTitle = useCallback((e : any) => {
        dispatch(editArticlePostActions.setEditArticleTextBlockTitle({ id: block.id, title: e.target.value }))
    }, [block.id, dispatch])

    const handleTextChange = useCallback((index : number, value: any) => {
        // debugger
        const newParagraphs = [...block.paragraphs];
        newParagraphs[index] = value;

        dispatch(editArticlePostActions.setEditArticleTextBlockParagraph({ id: block.id, paragraphs: newParagraphs }))
    }, [block.id, dispatch]);

    console.log('block?.paragraphs > ', block)
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])} style={{ border: '1px solid black' }}>
            EditArticleTextBlockComponent
            {block.title
                && (
                    <input
                        type="text"
                        value={block.title}
                        style={{ all: 'unset', width: '100%' }}
                        onChange={changeArticleTitle}
                    />
                )}

            {block?.paragraphs.map((paragraph, index) => (
                <Text
                    key={paragraph}
                    editMode={editMode}
                    handleTextChange={(value: any) => handleTextChange(index, value)}
                    text={paragraph}
                    className={cls.paragraph}
                />
            ))}

        </div>
    );
});
