export enum Route {
    DASHBOARD = 'DASHBOARD',
    PROFILE = 'PROFILE',
    MESSAGES = 'MESSAGES',
    BOOKMARKS = 'BOOKMARKS',
    NOTIFICATIONS = 'NOTIFICATIONS',
    SETTINGS = 'SETTINGS',
    ERROR_PAGE = 'ERROR_PAGE',
  }
  
  const Routes = {
    [Route.DASHBOARD]: () => '/' as const,
    [Route.PROFILE]: ({ profileName }: { profileName: string }) => `/${profileName}` as const,
    [Route.MESSAGES]: () => `/messages` as const,
    [Route.BOOKMARKS]: () => `/bookmarks` as const,
    [Route.NOTIFICATIONS]: () => `/notifications` as const,
    [Route.SETTINGS]: () => `/settings` as const,
    [Route.ERROR_PAGE]: () => `/error` as const,
  }
  
  const RouterRoutes = {
    [Route.DASHBOARD]: '/' as const,
    [Route.PROFILE]: `/:profileName` as const,
    [Route.MESSAGES]: `/messages` as const,
    [Route.BOOKMARKS]: `/bookmarks` as const,
    [Route.NOTIFICATIONS]: `/notifications` as const,
    [Route.SETTINGS]: `/settings` as const,
    [Route.ERROR_PAGE]: `/error` as const,
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