import { RouteRecordRow } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRow {
  const routes: RouteRecordRaw[] = []

  // 1、先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key)=>{
    const route = require('../router/main'+key.split(','))
  })

  // 2、根据菜单获取需要添加的routes

  return routes
}
