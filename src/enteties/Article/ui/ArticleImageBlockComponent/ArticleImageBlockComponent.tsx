import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleBlock, ArticleImageBlock } from 'enteties/Article/model/types/articles';
import { TextAlign, Text } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
    className?: string
    block : ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt="image" className={cls.img} />
            {block.title
                && (
                    <Text
                        text={block.title}
                        align={TextAlign.CENTER}
                    />
                )}
        </div>
    );
});
