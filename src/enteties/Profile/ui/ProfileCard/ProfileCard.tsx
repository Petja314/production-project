import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileError, getProfileLoading } from 'enteties/Profile';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className? : string

}

export const ProfileCard = ({ className } : ProfileCardProps) => {
    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);

    const onChangeName = (name : string) => {
        // console.log('name > ', name);
    };
    const onChangeSurname = (surname : string) => {
        // console.log('surname > ', surname);
    };

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text
                    text="Профиль"
                />
                <Button theme={ThemeButton.OUTLINED}>
                    {t('Редактировать')}
                </Button>
            </div>

            <div className={cls.data}>

                <Input
                    placeholder="Ваше имя"
                    value={data?.name}
                    onChange={onChangeName}
                />

                <Input
                    placeholder="Ваше фамилия"
                    value={data?.lastname}
                    onChange={onChangeSurname}
                />

            </div>

        </div>
    );
};
