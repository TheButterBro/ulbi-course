import 'app/styles/index.scss'
import {render} from "react-dom";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import 'shared/config/i18next/i18next'
import {Suspense} from "react";
import {ErrorBoundary} from "app/providers/ErrorBoundary";


render(
    <Suspense fallback=''>
        <ErrorBoundary>
            <ThemeProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ThemeProvider>
        </ErrorBoundary>
    </Suspense>
    ,document.getElementById("root")
)