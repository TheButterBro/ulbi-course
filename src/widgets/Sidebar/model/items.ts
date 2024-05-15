import React from "react";
import {RoutePaths} from "shared/config/routeConfig/routeConfig";
import MainIcon from 'shared/assets/icons/nav-main-icon.svg'
import AboutIcon from 'shared/assets/icons/nav-about-icon.svg'
import ProfileIcon from 'shared/assets/icons/nav-profile-icon.svg'

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePaths.main,
        text: 'Главная',
        Icon: MainIcon,
    },
    {
        path: RoutePaths.about,
        text: 'О нас',
        Icon: AboutIcon,
    },
    {
        path: RoutePaths.profile,
        text: 'Страница пользователя',
        Icon: ProfileIcon,
    },
]