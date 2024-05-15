import {classNames} from "shared/lib/classNames/classNames";
import {memo, useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {LangSwitcher} from "widgets/LangSwitcher";
import * as cls from './Sidebar.module.scss'
import {SidebarItemsList} from "../../model/items";
import {SidebarItem} from "../SidebarItem/SidebarItem";

interface ISidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed(prev => !prev);

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
                {SidebarItemsList.map((item)=>(
                    <SidebarItem item={item} collapsed={collapsed} />
                ))}
            </div>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher/>
                <LangSwitcher isShort={collapsed} className={cls.lang}/>
            </div>
        </div>
    );
});