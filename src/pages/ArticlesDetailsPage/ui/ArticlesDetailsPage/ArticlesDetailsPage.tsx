import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesDetailsPage.module.scss'

interface ArticlesDetailsPageProps {
    className?: string

}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            ArticlesDetailsPage
        </div>
    );
};

export default memo(ArticlesDetailsPage)
