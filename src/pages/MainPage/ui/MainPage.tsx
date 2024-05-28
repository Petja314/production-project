import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'enteties/Counter';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import axios from 'axios';

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
