import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonTheme {
    INVISIBLE = 'invisible',
    INVISIBLE_INVERTED = 'invertedInvisible',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSize {
    SIZE_M = 'size-m',
    SIZE_L = 'size-l',
    SIZE_XL = 'size-xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        square,
        size = ButtonSize.SIZE_M,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, { [cls.square]: square }, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};