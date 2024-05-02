import {lazy} from "react";

// export const AboutPageAsync = lazy(() => import('./AboutPage'));
export const AboutPageAsync = lazy(() => new Promise(resolve=> {
    // @ts-ignore
    // DOING IT JUST FOR OUR TEST PROJECT TO SEE THE DELAY OF 1.5s
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}))

