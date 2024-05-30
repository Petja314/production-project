import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard, CommentData } from 'enteties/Comment';
import cls from './CommentList.module.scss'

interface CommentListProps {
    className?: string
    comments? : CommentData[]
    isLoading? : boolean
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();
    // console.log('CommentList comments > ', comments)

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? (
                comments.map((comment, index) => (
                    <CommentCard
                        key={index}
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
            ) : (
                <Text text={t('Коментарии отсутствуют')} />
            )}
        </div>
    );
});
