class LocalCache {
  getCache(key: string) {
    window.localStorage.getItem(key)
  }
  setCache(kdy:string,value:string) {
    window.localStorage.setItem(key)
  }
  deleteCache() {}
  clearCache() {
    window.localStorage.clear()
  }
}
