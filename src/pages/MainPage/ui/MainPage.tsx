import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'enteties/Counter';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <div>

            {t('Главная страница')}

            <Counter />

        </div>
    );
});

export default MainPage;
