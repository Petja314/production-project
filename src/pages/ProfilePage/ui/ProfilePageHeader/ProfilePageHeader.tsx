import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    getProfileReadonly, getProfileValidateErrors, profileActions, updateProfileDataThunk
} from 'enteties/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className? : string

}

export const ProfilePageHeader = ({ className } : ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors)
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileDataThunk());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <div className={cls.header}>
                <Text
                    text="Профиль"
                />

                <div className={cls.buttonBox}>
                    { readonly ? (
                        <Button
                            theme={ThemeButton.OUTLINED}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                theme={ThemeButton.OUTLINED_RED}
                                onClick={onCancelEdit}
                            >
                                {t('Отменить')}
                            </Button>

                            <Button
                                theme={ThemeButton.OUTLINED}
                                onClick={onSave}
                                className={cls.saveBtn}
                            >
                                {t('Сохранить')}
                            </Button>

                        </>

                    )}
                </div>

            </div>
        </div>
    );
};
