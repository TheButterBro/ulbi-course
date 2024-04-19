import {ReactNode} from "react";
import {render} from '@testing-library/react'
import { I18nextProvider } from "react-i18next";
import i18nForTest from "shared/config/i18next/i18nForTest";
import {MemoryRouter} from "react-router-dom";

interface IRenderComponentOptions {
    route?: string;
}

export function renderComponent(component: ReactNode, options: IRenderComponentOptions = {}) {

    const {
        route = '/'
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}