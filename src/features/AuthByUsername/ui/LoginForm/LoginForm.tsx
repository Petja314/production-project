import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsernameState } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPasswordState } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoadingState } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginErrorState } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsernameThunk } from '../../model/services/loginByUsername';
import { getLoginState } from '../../model/selectors/selectLoginState/selectLoginState';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string
    onSuccess? : () => void
}

const initialReducers : ReducersList = {
    login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsernameState);
    const password = useSelector(getLoginPasswordState);
    const isLoading = useSelector(getLoginLoadingState);
    const error = useSelector(getLoginErrorState);
    const login = useSelector(getLoginState);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsernameThunk({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, username, password]);

    const onChangeUsername = useCallback((username: string) => {
        dispatch(loginActions.setUsername(username));
    }, [dispatch]);

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password));
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >

            <div className={classNames(cls.LoginForm, {}, [className])}>

                <Text
                    title={t('Форма авторизации')}
                />

                <Input
                    data-testid="login-id"
                    placeholder={t('Введите username')}
                    type="text"
                    className={cls.input}
                    onChange={onChangeUsername}
                />

                <Input
                    data-testid="password-id"
                    placeholder={t('Введите пароль')}
                    type="password"
                    onChange={onChangePassword}
                />

                <div className={cls.errorTitle}>
                    <Text
                        data-testid="error-id"
                        text={error}
                        theme={TextTheme.ERROR}
                    />
                </div>

                <Button
                    data-testid="button-id"
                    onClick={onLoginClick}
                    theme={ThemeButton.OUTLINED}
                    className={cls.loginBtn}
                    disabled={isLoading}
                >
                    {t('Bойти')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
});

export default LoginForm;
