import React, { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/Items';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item? : SidebarItemType
    collapsed? : boolean
    className? : string
    authOnly? : boolean
}

export const SidebarItem = memo(({
    item, collapsed, className, authOnly
} : SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData)

    if(item.authOnly && !isAuth) {
        return null;
    }
    return (
        <div className={classNames(cls.items, { [cls.collapsed]: collapsed }, [className])}>
            <AppLink
                key={item.text}
                theme={AppLinkTheme.SECONDARY}
                to={item.path}
                className={cls.item}
            >
                <item.icon className={cls.icon} />
                <span className={cls.link}>
                    {t(item.text)}
                </span>
            </AppLink>
        </div>
    );
});
