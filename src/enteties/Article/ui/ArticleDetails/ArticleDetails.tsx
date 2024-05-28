import React, { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchArticleByIdThunk } from 'enteties/Article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from 'enteties/Article';
import { TextAlign, Text } from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import { articleReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
    className?: string
    id : string
}

const reducers: ReducersList = {
    article: articleReducer
}
export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch()
    // const isLoading = useSelector(getArticleDetailsIsLoading)
    const isLoading = true
    const data = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    useEffect(() => {
        dispatch(fetchArticleByIdThunk(id))
    }, [dispatch, id])

    let content;
    if(isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} height={200} width={200} border="50%" />
                <Skeleton className={cls.title} height={30} width={670} />
                <Skeleton className={cls.skeleton} height={30} width={340} />
                <Skeleton className={cls.skeleton} height={230} width={1090} />
                <Skeleton className={cls.skeleton} height={230} width={1090} />
            </div>

        )
    }else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title="Произошла ошибка при загрузке статьи "
                // text={}
            />
        )
    } else {
        content = (
            <div>ArticleDetails</div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>

    );
});
