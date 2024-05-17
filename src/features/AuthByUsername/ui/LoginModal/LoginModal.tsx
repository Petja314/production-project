import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/StoreProvider';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className? : string
    isOpen?: boolean,
    onClose?: () => void
}

export const LoginModal = (props : LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            className={classNames(cls.LoginModal, {}, [className])}
        >
            <LoginForm />
        </Modal>
    );
};
