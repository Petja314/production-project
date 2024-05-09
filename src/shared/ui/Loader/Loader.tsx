import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string

}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames('cls.Loader', {}, [className])}>
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
