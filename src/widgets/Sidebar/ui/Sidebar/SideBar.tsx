import React, { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { useSelector } from 'react-redux';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const SideBar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation('about');
    const sidebarItemList = useSelector(getSidebarItems)
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => sidebarItemList.map((item) => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
            authOnly={item.authOnly}
        />
    )), [sidebarItemList, collapsed]);

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

            {itemsList}

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
});
