import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const NavBar = ({ className }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                children="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolores eaque ipsa natus numquam qui unde! Consectetur dolorem eveniet id libero perferendis placeat, tempora voluptatibus. Ea enim in nesciunt tenetur."
            />
        </div>
    );
};
