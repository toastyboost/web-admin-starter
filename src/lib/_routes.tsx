import * as React from 'react'
import { RouteComponentProps } from 'react-router'

export type SimpleRoute<Context> = {
  name?: string
  path?: string
  exact?: boolean
  component: React.ComponentType<RouteComponentProps>
  guards?: Guard<Context>[]
}

type NestedRoute<Context> = {
  name?: string
  routes: Route<Context>[]
  component: React.ComponentType<RouteComponentProps>
  guards?: Guard<Context>[]
}

export type Route<Context> = SimpleRoute<Context> | NestedRoute<Context>

export type RoutesConfig<Context> = {
  [key: string]: Route<Context>
}

export function compileRoutes<C>(routes: RoutesConfig<C>): Route<C>[] {
  const arrayConfig = toArray(routes)
  const plainConfig = toPlain(arrayConfig)

  return plainConfig
}

function toArray<C>(config: RoutesConfig<C>): Route<C>[] {
  return Object.keys(config).reduce<Route<C>[]>((routesList, name) => {
    routesList.push({ ...config[name], name })
    return routesList
  }, [])
}

function toPlain<C>(config: Route<C>[]): Route<C>[] {
  const plainConfig: SimpleRoute<C>[] = []

  for (const route of config) {
    if ('routes' in route) {
      const subRoutes = toPlain(route.routes)

      for (const subRoute of subRoutes) {
        plainConfig.push({
          ...subRoute,
          component: (properties) => (
            <route.component {...properties}>
              <subRoute.component {...properties} />
            </route.component>
          )
        })
      }
    } else {
      plainConfig.push(route)
    }
  }

  return plainConfig
}

export type Guard<Context> = (
  route: Route<Context> | null,
  context: Context
) => Route<Context> | null | undefined

export function protectRoutes<C>(config: Route<C>[], context: C): Route<C>[] {
  return config.map((route) => applyGuards(route, context)).filter(notNull)
}

function applyGuards<C>(route: Route<C>, context: C): Route<C> | null {
  const { guards } = route

  if (guards) {
    let currentRoute: Route<C> | null | undefined = route

    for (const guard of guards) {
      if (currentRoute === undefined) return null

      currentRoute = guard(currentRoute, context)
    }

    return currentRoute || null
  }
  return null
}

function notNull<C>(t: Route<C> | null): t is Route<C> {
  return Boolean(t)
}
