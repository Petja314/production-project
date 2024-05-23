import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileDataThunk, getProfileData, getProfileError, getProfileLoading, getProfileReadonly, profileActions, ProfileCard, profileReducer,
} from 'enteties/Profile';
import { Profile } from 'enteties/Profile/ui/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { getProfileForm } from 'enteties/Profile/model/selectors/getProfileForm/getProfileForm';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className? : string
}

const ProfilePage = memo(({ className } : ProfilePageProps) => {
    const { t } = useTranslation();
    const formData = useSelector(getProfileForm);
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileDataThunk());
    }, [dispatch]);

    const onChangeFirstName = useCallback((value? : string) => {
        dispatch(profileActions.updateProfile({ name: value || '' }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value? : string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value? : string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value? : number) => {
        dispatch(profileActions.updateProfile({ age: Number(value) || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value? : string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value? : string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value? : string) => {
        dispatch(profileActions.updateProfile({ currency: value || '' }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value? : string) => {
        dispatch(profileActions.updateProfile({ country: value || '' }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <h1>Profile page</h1>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readonly={readonly}
                />

            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
