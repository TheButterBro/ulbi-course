import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './LangSwitcher.module.scss'
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface ILangSwitcherProps {
    className?: string
    isShort?: boolean
}

export const LangSwitcher = ({ className, isShort = false }: ILangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const langToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button onClick={langToggle} theme={ButtonTheme.INVISIBLE_INVERTED} className={classNames(cls.LangSwitcher, {}, [className])}>
            {t(isShort ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};