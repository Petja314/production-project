import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'enteties/Counter';
import { Page } from 'widgets/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            <Counter />
        </Page>
    );
});

export default MainPage;
