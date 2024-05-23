import React from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Profile } from 'enteties/Profile';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'enteties/Currency/model/types/currency';
import { CurrencySelect } from 'enteties/Currency';
import { current } from '@reduxjs/toolkit';
import { CountrySelect } from 'enteties/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    onChangeFirstName?: (value?: string) => void
    onChangeLastName?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeAge?: (value?: number) => void
    onChangeAvatar?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeCurrency? : (value? : string) => void
    onChangeCountry? : (value? : string) => void
    readonly?: boolean
}

export const ProfileCard = ({
    className, data, isLoading, error, onChangeFirstName, onChangeLastName, readonly, onChangeCity, onChangeAge, onChangeAvatar, onChangeUsername, onChangeCurrency, onChangeCountry,
}: ProfileCardProps) => {
    const { t } = useTranslation();

    const onChangeSelectValue = (value : string) => {
        console.log('select value > ', value);
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Произошла непредвиденная ошибка при загрузке')}
                    text={t('Попробуйте перезагрузить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods : Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>

            <div className={cls.data}>

                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar
                            size={100}
                            src={data?.avatar}
                            alt="avatar"
                        />
                    </div>
                )}

                <Input
                    placeholder="Ваше имя"
                    value={data?.name}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />

                <Input
                    placeholder="Ваше фамилия"
                    value={data?.lastname}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />

                <Input
                    placeholder="Город"
                    value={data?.city}
                    onChange={onChangeCity}
                    readonly={readonly}
                />

                <Input
                    placeholder="Возраст"
                    value={data?.age}
                    onChange={onChangeAge}
                    readonly={readonly}
                />

                <Input
                    placeholder="Введите ссылку на Аватар"
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />

                <Input
                    placeholder="Имя пользователя"
                    value={data?.username}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />

                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />

                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />

            </div>
        </div>
    );
};
