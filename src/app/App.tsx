import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import { useTheme } from './providers/ThemeProvider';


const App = () => {
    const {theme, toggleTheme} = useTheme()


    return (
            <div className={classNames('app' ,{} , [theme])}>
                    <button onClick={toggleTheme} >mode</button>

                <Link to={'/'}> Main</Link>
                <Link to={'/about'}> About</Link>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/'} element={<MainPage/>}/>
                        <Route path={'/about'} element={<AboutPage/>}/>
                    </Routes>
                </Suspense>


            </div>
    )
}
export default App;
