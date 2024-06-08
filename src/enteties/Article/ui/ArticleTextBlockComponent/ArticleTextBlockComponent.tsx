import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlock } from 'enteties/Article/model/types/articles';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
    className?: string
    block : ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && <Text title={block.title} className={cls.title} /> }
            {block.paragraphs.map((paragraph) => (
                <Text
                    key={paragraph}
                    text={paragraph}
                    className={cls.paragraph}
                />
            ))}

        </div>
    );
});
