import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames"
import {useTheme} from "app/providers/ThemeProvider/";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";

function App() {
    const {theme, toggleTheme} = useTheme()

    return (
        <Suspense fallback=''>
            <div className={classNames('app', {}, [theme])}>
                <Navbar/>
                <div className={classNames('content-page')}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </div>
        </Suspense>

    );
}

export default App;