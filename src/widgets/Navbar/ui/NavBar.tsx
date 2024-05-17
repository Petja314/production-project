import React, {useCallback, useEffect, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUsername';
import {useDispatch, useSelector} from 'react-redux';
import cls from './Navbar.module.scss';
import {getUserAuthData} from "enteties/User";
import {userActions} from "enteties/User/model/slice/userSlice";

interface NavbarProps {
    className?: string;
}

export const NavBar = ({className}: NavbarProps) => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const authData = useSelector(getUserAuthData)
    const {t} = useTranslation();

    useEffect(() => {
        if(authData) {
            setIsOpen(false);
        }
    },[authData])

    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsOpen(true);
    }, []);



    const signOut = () => {
        dispatch(userActions.signOut())
    }
    console.log('authData'  , authData)
    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={signOut}
                >
                    {t('Выйти')}
                </Button>

                <LoginModal
                    isOpen={isOpen}
                    onClose={onCloseModal}
                />

            </div>
        )
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>

            <LoginModal
                isOpen={isOpen}
                onClose={onCloseModal}
            />

        </div>
    );
};
