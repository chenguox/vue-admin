class LocalCache {
  getCache(key: string) {
    window.localStorage.getItem(key)
  }
  setCache() {}
  deleteCache() {}
  clearCache() {
    window.localStorage.clear()
  }
}
