

import React from 'react';
import anonymousRoutesProvider from './anonymous';
import administratorRoutesProvider from './administrator';
import RouteWithSubRoutes from 'utils/RouteWithSubRoutes';
import RouteWithoutSubRoutes from 'utils/RouteWithoutSubRoutes';
import LazyLoadedRouteProvider from 'utils/LazyLoadedRoute';
import { Map as iMap } from "immutable";

export default function routes(store) {
  console.log('store', store);
  store.subscribe(()=> {
    console.log('sks', store.getState());
  })
  const LazyLoadedRoute = LazyLoadedRouteProvider(store);

  const routeSwitcher = (user, loggedIn) => {
    if (!loggedIn) {
      return <RouteWithoutSubRoutes pages={anonymousRoutesProvider(LazyLoadedRoute)} />;
    }
    switch (user.role) {
      case 'admin':
        return <RouteWithSubRoutes pages={administratorRoutesProvider(LazyLoadedRoute)} />;
      default:
        return <RouteWithoutSubRoutes pages={anonymousRoutesProvider(LazyLoadedRoute)} />;
    }
  };

  return <RouteWithSubRoutes pages={anonymousRoutesProvider(LazyLoadedRoute)} />;

}