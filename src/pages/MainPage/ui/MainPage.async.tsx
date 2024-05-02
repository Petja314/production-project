import {lazy} from "react";

// export const MainPageAsync = lazy(() => import('./MainPage'));
export const MainPageAsync = lazy(() => new Promise (resolve => {
    // @ts-ignore
    // DOING IT JUST FOR OUR TEST PROJECT TO SEE THE DELAY OF 1.5s 
    setTimeout(() => resolve(import('./MainPage')),1500)
}));
