import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './LoaderPage.module.scss'
import {Loader} from "shared/ui/Loader/Loader";

interface ILoaderPageProps {
    className?: string
}

export const LoaderPage = ({ className }: ILoaderPageProps) => {
    return (
        <div className={classNames(cls.LoaderPage, {}, [className])}>
            <Loader />
        </div>
    );
};