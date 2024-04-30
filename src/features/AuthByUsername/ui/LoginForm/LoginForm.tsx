import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './LoginForm.module.scss'
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "../..//model/services/loginByUsername/loginByUsername";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface ILoginFormProps {
    className?: string
}

export const LoginForm = memo((props: ILoginFormProps) => {
    const {
        className,
    } = props;

    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {
        username,
        password,
        isLoading,
        error
    } = useSelector(getLoginState);


    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}))
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text
                title={t('Форма авторизации')}
            />
            {error &&
                <Text
                    className={cls.error}
                    theme={TextTheme.RED}
                    text={t('Неверные имя пользователя или пароль')}
                />
            }
            <Input
                autoFocus
                placeholder={t('Введите имя')}
                value={username}
                onChange={onChangeUsername}
                type="text"
            />
            <Input
                placeholder={t('Введите пароль')}
                value={password}
                onChange={onChangePassword}
                type="password"
            />
            <Button
                disabled={isLoading}
                onClick={onLoginClick}
                className={cls.btn}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Вход')}
            </Button>
        </div>
    );
});