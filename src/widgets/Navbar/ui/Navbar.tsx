import {useCallback, useState} from "react";
import { useTranslation } from 'react-i18next'
import {LoginModal} from "features/AuthByUsername/ui/LoginModal/LoginModal";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
    const { t } = useTranslation()

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onOpenAuthModal = useCallback(() => {
        setIsAuthModal(true);
    }, [])

    const onCloseAuthModal = useCallback(() => {
        setIsAuthModal(false);
    }, [])

    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <Button theme={ButtonTheme.INVISIBLE_INVERTED} onClick={onOpenAuthModal} className={cls.links}>
              {t('Вход')}
          </Button>
          <LoginModal
              isOpen={isAuthModal}
              onClose={onCloseAuthModal}
          />
      </div>
    )
}
