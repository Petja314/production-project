import React, {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {loginByUsernameThunk} from '../../model/services/loginByUsername';
import {getLoginState} from '../../model/selectors/selectLoginState/selectLoginState';
import cls from './LoginForm.module.scss';
import {loginActions} from "features/AuthByUsername/model/slice/loginSlice";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string

}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation();
    const {username, password, error, isLoading,} = useSelector(getLoginState);
    const dispatch = useDispatch();

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsernameThunk({username, password}));
    }, [dispatch , username, password]);

    const onChangeUsername = useCallback((username: string) => {
        dispatch(loginActions.setUsername(username));
    }, [dispatch]);

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password));
    }, [dispatch]);

    // console.log('isLoading' , isLoading)
    console.log('error' , error)
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>

            <Text
                title={t('Форма авторизации')}
            />

            <Input
                placeholder={t('Введите username')}
                type="text"
                className={cls.input}
                onChange={onChangeUsername}
            />

            <Input
                placeholder={t('Введите пароль')}
                type="password"
                onChange={onChangePassword}
            />

            <div  className={cls.errorTitle}>
                <Text
                    text={error}
                    theme={TextTheme.ERROR}
                />
            </div>

            <Button
                onClick={onLoginClick}
                theme={ThemeButton.OUTLINED}
                className={cls.loginBtn}
                disabled={isLoading}
            >
                {t('Bойти')}
            </Button>

        </div>
    );
});
