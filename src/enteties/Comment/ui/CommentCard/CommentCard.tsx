import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CommentData } from 'enteties/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import { useNavigate } from 'react-router-dom';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './CommentCard.module.scss'

interface CommentCardProps {
    className?: string
    comment? : CommentData
    isLoading? : boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    if(isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton className={cls.avatar} height={30} width={30} border="50%" />
                    <Skeleton className={cls.username} height={16} width={100} />
                </div>
                <Skeleton className={cls.text} height={50} width="100%" />
            </div>
        )
    }

    return (
        <div
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink to={`${RoutePath.profile}${comment.user.id}`}>
                <div className={cls.header}>
                    { comment?.user?.avatar ? <Avatar className={cls.avatar} size={30} src={comment?.user?.avatar} /> : null}
                    <Text
                        className={cls.username}
                        text={comment?.user?.username}
                    />
                </div>
                <Text
                    className={cls.text}
                    text={comment?.text}
                />
            </AppLink>

        </div>
    );
});
