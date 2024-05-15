import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MenuIcon from 'shared/assets/icons/home.svg';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const SideBar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation('about');

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const sidebarMenu = [
        { icon: MenuIcon, title: 'О сайте', routeDirection: RoutePath.main },
        { icon: AboutIcon, title: 'Главная', routeDirection: RoutePath.about },
    ];

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >

            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>

                {
                    sidebarMenu.map((item) => (
                        <AppLink
                            key={item.title}
                            theme={AppLinkTheme.SECONDARY}
                            to={item.routeDirection}
                            className={cls.item}
                        >
                            <item.icon className={cls.icon} />
                            <span className={cls.link}>
                                {t(item.title)}
                            </span>
                        </AppLink>
                    ))
                }

                {/* <AppLink */}
                {/*    theme={AppLinkTheme.SECONDARY} */}
                {/*    to={RoutePath.main} */}
                {/*    className={cls.item} */}
                {/* > */}
                {/*    <MenuIcon className={cls.icon} /> */}

                {/*    <span className={cls.link}> */}
                {/*        {t('Главная')} */}
                {/*    </span> */}

                {/* </AppLink> */}

                {/* <AppLink */}
                {/*    theme={AppLinkTheme.SECONDARY} */}
                {/*    to={RoutePath.about} */}
                {/*    className={cls.item} */}
                {/* > */}
                {/*    <AboutIcon className={cls.icon} /> */}
                {/*    <span className={cls.link}> */}
                {/*        {t(' О сайте')} */}
                {/*    </span> */}
                {/* </AppLink> */}

            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};
