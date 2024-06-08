import React, {
    memo, useCallback, useEffect, useState
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlock } from 'enteties/Article/model/types/articles';
import { editArticlePostActions } from 'features/EditArticlePost';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { TextArea } from 'shared/ui/TextArea/TextArea';
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

    const changeArticleTitle = useCallback((value : string) => {
        dispatch(editArticlePostActions.setEditArticleTextBlockTitle({ id: block.id, title: value }))
    }, [block.id, dispatch])

    const handleTextChange = useCallback((value: string, index: number) => {
        const newParagraphs = [...localParagraphs];
        newParagraphs[index] = value;
        setLocalParagraphs(newParagraphs);
        dispatch(editArticlePostActions.setEditArticleTextBlockParagraph({ id: block.id, paragraphs: newParagraphs }));
    }, [localParagraphs, block.id, dispatch]);

    return (
        <div className={classNames(cls.editBlockWrapper, {}, [className])}>
            <TextArea value={block.title} onChange={changeArticleTitle} />
            <div>
                {localParagraphs.map((paragraph, index) => (
                    <TextArea
                        value={paragraph}
                        onChange={(value: string) => handleTextChange(value, index)}
                        className={cls.paragraph}
                    />
                ))}
            </div>

        </div>
    );
});
