import React, {ReactNode} from 'react';
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";
import i18nForTest from "shared/config/i18n/i18nForTest";
import {render} from "@testing-library/react";

export function  RenderWithTranslation (component : ReactNode)  {
    return render(
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        )
};

