import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'enteties/User';
import MenuIcon from 'shared/assets/icons/home.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import Article from 'shared/assets/icons/article.svg';
import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList : SidebarItemType[] = [
            {
                icon: MenuIcon,
                text: 'О сайте',
                path: RoutePath.main,
            },
            {
                icon: AboutIcon,
                text: 'Главная',
                path: RoutePath.about,
            },
        ]
        // 2 LINKS ONLY FOR AUTHORIZED USER
        if(userData) {
            sidebarItemsList.push({
                icon: ProfileIcon,
                text: 'Профиль',
                path: RoutePath.profile + userData.id,
                authOnly: true
            },
            {
                icon: Article,
                text: 'Статья',
                path: RoutePath.articles,
                authOnly: true
            }

            )
        }
        return sidebarItemsList
    }
)
