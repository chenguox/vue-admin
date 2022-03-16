import { RouteRecordRow } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRow {
  const routes: RouteRecordRaw[] = []

  // 1、先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  console.log(routeFiles)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split(',')[1])
    allRoutes.push(route.default)
  })

  // 2、根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if(route)
      }
    }
  }

  return routes
}
