import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface INavbarProps {
  className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation()

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <div className={cls.links}>
              <AppLink theme={AppLinkTheme.INVERTED} className={cls.primaryLink} to={'/'}>{t('Главная')}</AppLink>
              <AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>{t('О нас')}</AppLink>
          </div>
      </div>
  )
}
