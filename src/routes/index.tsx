import React from 'react'
import { Switch } from 'react-router-dom'

import { routes, detailViewRoutes, Route as RouteType } from './routes'
import { Route as RouteComponent } from './Route'

export const Routes: React.FC = () => {
  return (
    <Switch>
      {routes.map(
        (route: RouteType): React.ReactNode => (
          <RouteComponent key={route.path} {...route} />
        )
      )}
      {detailViewRoutes.map(
        (route): React.ReactNode => (
          <RouteComponent key={route.path} {...route} />
        )
      )}
    </Switch>
  )
}
