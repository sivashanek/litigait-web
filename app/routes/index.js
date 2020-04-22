


import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from 'containers/App';
import Auth from 'utils/routing/auth';
import routes from './routes';
import simpleLazyLoadedRouteProvider from 'utils/routing/SimpleLazyLoadedRoute';
import { useInjectSaga } from 'utils/injectSaga';
import getInjectors from 'utils/reducerInjectors';
import NotFoundPage from 'containers/NotFoundPage';
import sessionSagas from 'blocks/session/saga';


export default function (store) {
    store.subscribe(() => {
        console.log('store', store.getState());
    });
    useInjectSaga({key: 'session', saga: sessionSagas});

    const { injectReducer } = getInjectors(store);
    const simpleLazyLoadedRoute = simpleLazyLoadedRouteProvider(injectReducer, useInjectSaga);
    const routesProvider = routes(simpleLazyLoadedRoute);

    return (<App>
        <Switch>
            {routesProvider.map((route, i) => {
                const { path, childRoutes = [] } = route;
                return <Auth key={i} {...route} {...store} path={`${process.env.PUBLIC_PATH || ''}/${path}`} >
                    <div>
                        <Switch>
                            {childRoutes.map((child, c) => {
                                return <Auth key={c} {...child} {...store} path={`${process.env.PUBLIC_PATH || ''}/${path}/${child.path}`} />
                            })}
                        </Switch>
                    </div>
                </Auth>
            })}
            <Route path="*" component={NotFoundPage} />
        </Switch>
    </App>)

}