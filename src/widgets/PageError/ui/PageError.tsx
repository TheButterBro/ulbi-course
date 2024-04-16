import * as cls from './PageError.module.scss'
import {useTranslation} from "react-i18next";

export const PageError = () => {
    const {t} = useTranslation();

    const onReload = () => {
        location.reload();
    }

    return (
        <div className={cls.PageError}>
            <h1>{t('Что-то пошло не так')}</h1>
            <button onClick={onReload}>
                Обновить страницу
            </button>
        </div>
    );
};