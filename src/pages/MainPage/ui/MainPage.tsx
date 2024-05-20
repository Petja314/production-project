import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'enteties/Counter';
import { Input } from 'shared/ui/Input/Input';

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
