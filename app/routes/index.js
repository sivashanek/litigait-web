

import React from 'react';
import anonymousRoutesProvider from './anonymous';
import administratorRoutesProvider from './administrator';
import RouteWithSubRoutes from 'utils/RouteWithSubRoutes';
import RouteWithoutSubRoutes from 'utils/RouteWithoutSubRoutes';
import LazyLoadedRouteProvider from 'utils/LazyLoadedRoute';

export default function routes(store) {

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

  return <RouteWithoutSubRoutes pages={anonymousRoutesProvider(LazyLoadedRoute)} />;

}