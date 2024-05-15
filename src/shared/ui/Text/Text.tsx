import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Text.module.scss'
import {memo} from "react";

export enum TextTheme {
    RED = 'red',
}

interface ITextProps {
    className?: string;
    theme?: TextTheme;
    title?: string;
    text?: string;
    titleTag?: string;
}

export const Text = memo((props: ITextProps) => {
    const {
        className,
        theme,
        title,
        text,
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});