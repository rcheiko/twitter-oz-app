export enum Route {
    DASHBOARD = 'DASHBOARD',
    NOTIFICATIONS = 'NOTIFICATIONS',
    MESSAGES = 'MESSAGES',
    BOOKMARKS = 'BOOKMARKS',
    PROFILE = 'PROFILE',
    SETTINGS = 'SETTINGS',
    ERROR_PAGE = 'ERROR_PAGE',
  }
  
  const Routes = {
    [Route.DASHBOARD]: () => '/' as const,
    [Route.NOTIFICATIONS]: () => `/notifications` as const,
    [Route.MESSAGES]: () => `/messages` as const,
    [Route.BOOKMARKS]: () => `/bookmarks` as const,
    [Route.PROFILE]: ({ profileName }: { profileName: string }) => `/${profileName}` as const,
    [Route.SETTINGS]: () => `/settings` as const,
    [Route.ERROR_PAGE]: () => `/*` as const,
  }
  
  const RouterRoutes = {
    [Route.DASHBOARD]: '/' as const,
    [Route.NOTIFICATIONS]: `/notifications` as const,
    [Route.MESSAGES]: `/messages` as const,
    [Route.BOOKMARKS]: `/bookmarks` as const,
    [Route.PROFILE]: `/:profileName` as const,
    [Route.SETTINGS]: `/settings` as const,
    [Route.ERROR_PAGE]: `/*` as const,
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