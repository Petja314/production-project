import React, { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Skeleton.module.scss'

interface SkeletonProps {
    className?: string
    height? : string | number
    width? : string | number
    border? : string
}

const Skeleton = memo((props : SkeletonProps) => {
    const {
        className, height, width, border
    } = props

    const styles:CSSProperties = {
        width,
        height,
        borderRadius: border
    }

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});

export default Skeleton
