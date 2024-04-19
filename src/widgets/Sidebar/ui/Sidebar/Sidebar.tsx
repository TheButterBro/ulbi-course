import {classNames} from "shared/lib/classNames/classNames";
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {LangSwitcher} from "widgets/LangSwitcher";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import {RoutePaths} from "shared/config/routeConfig/routeConfig";
import * as cls from './Sidebar.module.scss'
import MainIcon from 'shared/assets/icons/nav-main-icon.svg'
import AboutIcon from 'shared/assets/icons/nav-about-icon.svg'


interface ISidebarProps {
    className?: string
}

export const Sidebar = ({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed(prev => !prev);

    const {t} = useTranslation();

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                data-testid="sidebar-toggle"
                className={cls.btn}
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square={true}
                size={ButtonSize.SIZE_L}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.links}>
                <AppLink
                    className={cls.link}
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePaths.main}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.text}>{t('Главная')}</span>
                </AppLink>
                <AppLink
                    className={cls.link}
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePaths.about}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.text}>{t('О нас')}</span>
                </AppLink>
            </div>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher/>
                <LangSwitcher isShort={collapsed} className={cls.lang}/>
            </div>
        </div>
    );
};