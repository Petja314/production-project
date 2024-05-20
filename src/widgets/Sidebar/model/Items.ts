import React from 'react';
import MenuIcon from 'shared/assets/icons/home.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path : string
    text : string
    icon : React.VFC<React.SVGProps<SVGSVGElement>>

}

export const SidebarItemsList : SidebarItemType[] = [
    { icon: MenuIcon, text: 'О сайте', path: RoutePath.main },
    { icon: AboutIcon, text: 'Главная', path: RoutePath.about },
    { icon: ProfileIcon, text: 'Профиль', path: RoutePath.profile },
];
