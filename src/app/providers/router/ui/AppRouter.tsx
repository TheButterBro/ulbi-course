import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {classNames} from "shared/lib/classNames/classNames";




const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className={classNames('page-wrapper')}>
                                {element}
                            </div>
                        )}/>
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;