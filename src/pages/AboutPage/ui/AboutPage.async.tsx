import {lazy} from "react";

// export const AboutPageAsync  = lazy(() => import('./AboutPage'));
//@ts-ignore
export const AboutPageAsync  = lazy(() => new Promise(resolve => setTimeout(()=> resolve(import('./AboutPage')), 3000)));
