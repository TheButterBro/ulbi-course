import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {classNames} from "shared/lib/classNames/classNames";
import {LoaderPage} from "widgets/LoaderPage";




const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({path, element}) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className={classNames('page-wrapper')}>
                            <Suspense fallback={<LoaderPage />}>
                                {element}
                            </Suspense>
                        </div>
                    )}/>
            ))}
        </Routes>
    );
};

export default AppRouter;