import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'enteties/Profile';
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
