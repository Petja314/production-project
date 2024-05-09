import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

export const PageError = ({ className }: any) => {
  const { t } = useTranslation();
  const handleFakeError = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>

      <div className={cls.PageErrorBox}>
        <p>
          {t('Page error occurred')}
        </p>

        <Button onClick={handleFakeError}>
          Refresh the page
        </Button>
      </div>

    </div>
  );
};
