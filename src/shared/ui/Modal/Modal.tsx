import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Modal.module.scss'
import {ReactNode, MouseEvent, useRef, useState, useEffect, useCallback} from "react";
import {Portal} from "shared/ui/Portal/Portal";
import {useTheme} from "app/providers/ThemeProvider";

interface IModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean,
}

const ANIMATION_DELAY = 300;

export const Modal = (props: IModalProps) => {
    const {
        className,
        children,
        isOpen = false,
        onClose,
        lazy
    } = props;

    const {theme} = useTheme();

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
        
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyClose = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler])

    const onClickContent = (e: MouseEvent) => {
        e.stopPropagation()
    }

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    }

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyClose)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyClose)
        }
    }, [isOpen, onKeyClose]);

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <div onClick={closeHandler} className={cls.overlay}>
                    <div onClick={onClickContent} className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};