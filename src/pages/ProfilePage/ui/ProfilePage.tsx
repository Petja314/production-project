import React, { memo, useCallback, useEffect, } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileDataThunk, getProfileData, getProfileError, getProfileLoading, getProfileReadonly, getProfileValidateErrors, profileActions, ProfileCard, profileReducer,
} from 'enteties/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { getProfileForm } from 'enteties/Profile/model/selectors/getProfileForm/getProfileForm';
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ValidateProfileError } from 'enteties/Profile/model/types/Profile';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className? : string
}

const ProfilePage = memo(({ className } : ProfilePageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>()
    const formData = useSelector(getProfileForm);
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const validateErrors = useSelector(getProfileValidateErrors)

    const validateErrorTranslates : any = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректная имя и фамилия'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    }

    useEffect(() => {
        if(__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileDataThunk(id));
        }
    }, [dispatch, id]);

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

    // console.log('validateErrors > ', validateErrors)
    // console.log('form data > ', formData)
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ProfilePage, {}, [className])}>
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
                {validateErrors?.length && validateErrors.map(err => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[err]}
                    />
                ))}

            </Page>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
