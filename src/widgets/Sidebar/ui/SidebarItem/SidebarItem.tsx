import * as cls from './SidebarItem.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {t} from "i18next";
import {SidebarItemType} from "../../model/items";
import {classNames} from "shared/lib/classNames/classNames";
import {memo} from "react";

interface ISidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean,
}

export const SidebarItem = memo((props: ISidebarItemProps) => {
    const {
        item,
        collapsed
    } = props;

    return (
        <AppLink
            className={classNames(cls.link, {[cls.collapsed]: collapsed})}
            theme={AppLinkTheme.INVERTED}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.text}>{t(item.text)}</span>
        </AppLink>
    );
});