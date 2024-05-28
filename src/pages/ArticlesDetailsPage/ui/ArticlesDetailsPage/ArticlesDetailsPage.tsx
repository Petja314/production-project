import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'enteties/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticlesDetailsPage.module.scss'

interface ArticlesDetailsPageProps {
    className?: string

}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>()

    if(!id) {
        return (
            <div className={classNames(cls.ArticleDetailsId, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticlesDetailsPage)
