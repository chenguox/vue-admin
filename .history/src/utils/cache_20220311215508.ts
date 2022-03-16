class LocalCache {
  getCache(key: string) {
    window.localStorage.getItem(key)
  }
  setCache(可以：) {}
  deleteCache() {}
  clearCache() {
    window.localStorage.clear()
  }
}
