import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleBlock, ArticleImageBlock } from 'enteties/Article/model/types/articles';
import { TextAlign, Text } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
    className?: string
    block : ArticleImageBlock
    editMode? : boolean
    handleChangeTitle? : (value : any) => void
}

export const ArticleImageBlockComponent = memo(({
    className, block, editMode, handleChangeTitle
}: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();
    // console.log('editMode > ', editMode)
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt="image" className={cls.img} />

            {block.title && (
                <Text
                    text={block.title}
                    align={TextAlign.CENTER}
                />
            )}
        </div>
    );
});
