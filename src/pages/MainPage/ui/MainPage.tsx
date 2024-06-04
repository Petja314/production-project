import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'enteties/Counter';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import axios from 'axios';
import { Page } from 'shared/ui/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>

            {t('Главная страница')}

            <Counter />

        </Page>
    );
});

export default MainPage;
