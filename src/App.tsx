import React, {createContext, FC, Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Counter from "./components/Counter";
import './styles/index.scss';
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./components/theme/ThemeContext";
import {useTheme} from "./components/theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";





const App = () => {
    const {theme, toggleTheme} = useTheme()


    return (
            <div className={classNames('app' ,{} , [theme])}>
                    <button onClick={toggleTheme} >mode</button>

                <Link to={'/'}> Main</Link>
                <Link to={'/about'}> About</Link>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/'} element={<MainPageAsync/>}/>
                        <Route path={'/about'} element={<AboutPageAsync/>}/>
                    </Routes>
                </Suspense>


                {/*<Counter/>*/}
            </div>
    )
}
export default App;
