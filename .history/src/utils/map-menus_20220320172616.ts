import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  console.log('---')
  // 1、先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)

  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2、根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

// pathMapToMenu
export function pathMapToMenu(userMenus: any, currentPath: string) {
  for (const menu of userMenus) {
    // 如果 type === 1 表示二级菜单，所以需要递归
    if (menu.type === 1) {
      menu.children
    } else if (menu.type === 2) {
      //  拿到菜单对应的 url 来判断是否一致
      if (menu.url === currentPath) {
        return menu
      }
    }
  }
}
