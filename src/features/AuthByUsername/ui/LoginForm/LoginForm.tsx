import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './LoginForm.module.scss'
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {Input} from "shared/ui/Input/Input";

interface ILoginFormProps {
    className?: string
}

export const LoginForm = (props: ILoginFormProps) => {
    const {
        className,
    } = props;

    const {t} = useTranslation()

    const [usernameValue, setUsernameValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');

    const onChangeUsername = (value: string) => {
        setUsernameValue(value);
    }

    const onChangePassword = (value: string) => {
        setPasswordValue(value);
    }

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autoFocus={true} placeholder={t('Введите имя')} value={usernameValue} onChange={onChangeUsername} type="text"/>
            <Input placeholder={t('Введите пароль')} value={passwordValue} onChange={onChangePassword} type="password"/>
            <Button className={cls.btn} theme={ButtonTheme.OUTLINE}>
                {t('Вход')}
            </Button>
        </div>
    );
};