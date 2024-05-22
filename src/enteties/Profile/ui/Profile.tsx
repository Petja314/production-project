import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfileDataThunk } from 'enteties/Profile/model/services/fetchProfileData/fetchProfileData';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'enteties/Profile';
import { getProfileData } from 'enteties/Profile/model/selectors/getProfileData/getProfileData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './Profile.module.scss';

interface ProfileProps {
    className? : string

}

const initialReducers : ReducersList = {
    profile: profileReducer,
};

export const Profile = ({ className } : ProfileProps) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.Profile, {}, [className])} />
        </DynamicModuleLoader>

    );
};
