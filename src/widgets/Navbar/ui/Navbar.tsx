import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import {useCallback, useState} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Modal} from "shared/ui/Modal/Modal";

interface INavbarProps {
  className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
    const { t } = useTranslation()

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleAuthModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, [])

    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <Button theme={ButtonTheme.INVISIBLE_INVERTED} onClick={onToggleAuthModal} className={cls.links}>
              {t('Вход')}
          </Button>
          <Modal
              isOpen={isAuthModal}
              onClose={onToggleAuthModal}
          >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eaque incidunt,
              itaque soluta sunt voluptatum. Accusamus commodi facilis iusto laborum rem! Accusamus
              est officia optio perferendis voluptate? At aut blanditiis consequuntur,
              deserunt distinctio eveniet harum impedit in molestiae omnis perferendis quaerat reiciendis saepe
              sint tempora unde voluptatem voluptatibus. Corporis cupiditate dolore fugiat ipsam laboriosam mollitia
              quibusdam rem veritatis vitae voluptate? Ab accusamus accusantium architecto commodi consectetur delectus
              dolor dolore eaque enim fuga, magni nesciunt odio officiis, pariatur praesentium quisquam quo ullam veniam
              veritatis vitae. Asperiores cum dignissimos, doloribus est, fugit illum iste molestiae, natus perspiciatis
              quaerat repellendus sit tenetur voluptatibus.
          </Modal>
      </div>
    )
}
