import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Button} from "shared/ui/Button/Button";
import {LangSwitcher} from "widgets/LangSwitcher";

interface ISidebarProps {
    className?: string
}

export const Sidebar = ({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed(prev => !prev);

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};