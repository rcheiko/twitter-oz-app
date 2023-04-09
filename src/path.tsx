export enum Route {
    DASHBOARD = 'DASHBOARD',
    PROFILE = 'PROFILE',
    SETTINGS = 'SETTINGS',
    ERROR_PAGE = 'ERROR_PAGE',
  }
  
  const Routes = {
    [Route.DASHBOARD]: () => '/' as const,
    [Route.ERROR_PAGE]: () => `/error` as const,
    [Route.PROFILE]: ({ profileName }: { profileName: string }) => `/${profileName}` as const,
    [Route.SETTINGS]: () => `/settings` as const,
  }
  
  const RouterRoutes = {
    [Route.DASHBOARD]: '/' as const,
    [Route.ERROR_PAGE]: `/error` as const,
    [Route.PROFILE]: `/:profileName` as const,
    [Route.SETTINGS]: `/settings` as const,
  }
  
  export const getRouterRoutePath =
    (route: Route) =>
      RouterRoutes[route]
  
  export const getRoutePath = <
    T extends Route
  > (
      route: T,
      args?: Parameters<(typeof Routes)[T]>[0]
    ) =>
      Routes[route](args as any)