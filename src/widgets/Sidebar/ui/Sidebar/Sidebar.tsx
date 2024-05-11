import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string

}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleHandler = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
        className={classNames(cls.Sidebar, { [cls.SidebarCollapsed]: collapsed }, [className])}
        data-testid="sidebar"
    >
      <button
          data-testid="sidebar-collapsed"
          onClick={toggleHandler}>toggle</button>

      <div className={cls.switcher}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang} />

      </div>
    </div>
  );
};
