import React, {
    memo, MutableRefObject,
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Portal from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

type TimeoutType = ReturnType<typeof setTimeout> & { __promisify__?: any };

interface ModalProps {
    className?: string
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void
    lazy? : boolean
}

const ANIMATION_DELAY = 300;

export const Modal = memo((props: ModalProps) => {
    const {
        className,
        isOpen,
        onClose,
        children,
        lazy,
    } = props;

    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const { theme } = useTheme();
    const timeRef = useRef() as MutableRefObject<TimeoutType>;
    // console.log('onClose', onClose)
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
        return () => {
            setIsMounted(false);
        };
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        console.log('in')
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.keyCode === 27 || e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
    }, []);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean | undefined> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,

    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
});
