import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

interface IAppLinkProps extends LinkProps{
    className?: string
    theme?: AppLinkTheme
}

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

export const AppLink: FC<IAppLinkProps> = ({ className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps  }) => {
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
