import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleCodeBlock } from 'enteties/Article/model/types/articles';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
    className?: string
    block : ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({ className, block }: ArticleCodeBlockComponentProps) => {
    const { t } = useTranslation();
    console.log('ArticleCodeBlockComponent RENDER')
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
