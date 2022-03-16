class LocalCache {
  getCache(key: string) {
    window.localStorage.getItem(key)
  }
  setCache(kdy:string,) {}
  deleteCache() {}
  clearCache() {
    window.localStorage.clear()
  }
}
