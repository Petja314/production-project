import React, { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import cls from './Tabs.module.scss'

export interface TabItem {
    content : ReactNode
    value : string
}
interface TabsProps {
    className?: string
    tabs : TabItem[]
    value : string
    onTabClick : (tab : TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className, tabs, value, onTabClick
    } = props
    const clickHandle = useCallback((tab : TabItem) => {
        return () => {
            onTabClick(tab)
        }
    }, [onTabClick])

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    className={cls.tab}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
