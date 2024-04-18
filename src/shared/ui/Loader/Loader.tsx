import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Loader.module.scss'

interface ILoaderProps {
    className?: string
}

export const Loader = ({ className }: ILoaderProps) => {
    return (
        <div className={classNames(cls.Loader, {}, [className])}/>
    );
};