


import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from 'containers/App';
import Auth from 'utils/routing/auth';
import routes from './routes';
import simpleLazyLoadedRouteProvider from 'utils/routing/SimpleLazyLoadedRoute';
import reducerInjectors from 'utils/reducerInjectors';
import sagaInjectors from 'utils/sagaInjectors';
import NotFoundPage from 'containers/NotFoundPage';
import sessionSagas from 'blocks/session/saga';


export default function (store) {
    const { injectReducer } = reducerInjectors(store);
    const { injectSaga } = sagaInjectors(store);
    
    injectSaga('session', {saga: sessionSagas});

    store.subscribe(() => {
        console.log('store', store.getState());
    });

    
    const simpleLazyLoadedRoute = simpleLazyLoadedRouteProvider(injectReducer, injectSaga);
    const routesProvider = routes(simpleLazyLoadedRoute);

    return (<App pages={routesProvider.filter(_=>_.data && !_.data.route)}>
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