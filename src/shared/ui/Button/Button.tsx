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
    size?: ButtonSize,
    disabled?: boolean
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        square,
        size = ButtonSize.SIZE_M,
        disabled = false,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, { [cls.square]: square, [cls.disabled]: disabled }, [className, cls[theme], cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};