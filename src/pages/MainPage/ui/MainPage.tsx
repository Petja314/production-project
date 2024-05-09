import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/Error Boundaries';

const MainPage = () => {
  const { t, i18n } = useTranslation('main');

  return (
    <div>
      <BugButton />
      {t('Main page')}
    </div>
  );
};

export default MainPage;
