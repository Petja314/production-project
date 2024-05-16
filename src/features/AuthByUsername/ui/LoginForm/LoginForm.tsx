import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { userActions } from 'enteties/User/model/slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/StoreProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className? : string

}

export const LoginForm = ({ className } : LoginFormProps) => {
    const { t } = useTranslation();
    const { username, password } = useSelector((state : StateSchema) => state.user);
    const dispatch = useDispatch();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>

            <Input
                placeholder={t('Введите username')}
                type="text"
                className={cls.input}
                // onChange={onChange}
            />

            <Input
                placeholder={t('Введите пароль')}
                type="password"
                // onChange={onChange}
            />

            <Button theme={ThemeButton.OUTLINED} className={cls.loginBtn}>{t('Bойти')}</Button>

        </div>
    );
};
