import React, { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/Items';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item? : SidebarItemType
    collapsed? : boolean
    className? : string
}

export const SidebarItem = memo(({ item, collapsed, className } : SidebarItemProps) => {
    const { t } = useTranslation();
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
