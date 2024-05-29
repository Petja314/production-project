import React, { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './Code.module.scss'
import CopyIcon from '../../assets/icons/copy.svg'

interface CodeProps {
    className?: string
    text : string
}

export const Code = memo((props : CodeProps) => {
    const { className, text } = props;
    const { t } = useTranslation();

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={classNames(cls.Code, {}, [className])}>

            <Button className={cls.copyBtn} theme={ThemeButton.CLEAR} onClick={onCopy}>
                <Icon Svg={CopyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>

    );
});
