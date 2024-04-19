import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface INavbarProps {
  className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation()

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <div className={cls.links}>
              /
          </div>
      </div>
  )
}
