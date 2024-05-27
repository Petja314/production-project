import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/Navbar';
import { SideBar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'enteties/User/model/slice/userSlice';
import { getUserMounted } from 'enteties/User';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const mounted = useSelector(getUserMounted)

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    {mounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
