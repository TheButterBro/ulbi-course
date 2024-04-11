import './styles/index.scss'
import {Suspense} from "react";
import {Routes, Route, Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames"
import {useTheme} from "app/providers/ThemeProvider/";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

function App() {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme} >TOGGLE THEME</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;