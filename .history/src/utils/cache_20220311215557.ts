class LocalCache {
  getCache(key: string) {
    window.localStorage.getItem(key)
  }
  setCache(kdy:string,value:any) {
    window.localStorage.setItem(key,JSON.to)
  }
  deleteCache() {}
  clearCache() {
    window.localStorage.clear()
  }
}
