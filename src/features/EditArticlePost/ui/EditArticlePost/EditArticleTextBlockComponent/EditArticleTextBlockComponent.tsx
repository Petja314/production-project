import React, {
    memo, useCallback, useEffect, useState
} from 'react';
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
    const [localParagraphs, setLocalParagraphs] = useState<string[]>(block.paragraphs);

    useEffect(() => {
        setLocalParagraphs(block.paragraphs);
    }, [block.paragraphs]);

    const changeArticleTitle = useCallback((e : any) => {
        dispatch(editArticlePostActions.setEditArticleTextBlockTitle({ id: block.id, title: e.target.value }))
    }, [block.id, dispatch])

    const handleTextChange = useCallback((value: string, index: number) => {
        const newParagraphs = [...localParagraphs];
        newParagraphs[index] = value;
        setLocalParagraphs(newParagraphs);
        dispatch(editArticlePostActions.setEditArticleTextBlockParagraph({ id: block.id, paragraphs: newParagraphs }));
    }, [localParagraphs, block.id, dispatch]);

    return (
        <div className={classNames(cls.editBlockWrapper, {}, [className])}>
            {block.title
                && (
                    <input
                        type="text"
                        value={block.title}
                        style={{ }}
                        onChange={changeArticleTitle}
                    />
                )}

            <div>
                {Array.isArray(localParagraphs) && localParagraphs.map((paragraph, index) => (
                    <Text
                        key={index}
                        editMode={editMode}
                        handleTextChange={(value: string) => handleTextChange(value, index)}
                        text={paragraph}
                        className={cls.paragraph}
                    />
                ))}
            </div>

        </div>
    );
});
