import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import RequireAuth from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route : AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.athOnly ? (
                    <RequireAuth>
                        {element}
                    </RequireAuth>
                ) : element}
                // element={route.athOnly ? <RequireAuth /> : element}
            />
        )
    }, [])

    // const isAuth = useSelector(getUserAuthData);
    // const routes = useMemo(() => {
    //     return Object.values(routeConfig).filter(route => {
    //         if(route.athOnly && !isAuth) {
    //             return false
    //         }
    //         return true
    //     }
    //     )
    // }, [isAuth])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}

            {/* {routes.map(({ element, path }) => ( */}
            {/*    <Route */}
            {/*        key={path} */}
            {/*        path={path} */}
            {/*        element={( */}
            {/*            <Suspense fallback={<PageLoader />}> */}
            {/*                <div className="page-wrapper"> */}
            {/*                    {element} */}
            {/*                </div> */}
            {/*            </Suspense> */}
            {/*        )} */}
            {/*    /> */}
            {/* ))} */}
        </Routes>
    );
};

export default memo(AppRouter);
