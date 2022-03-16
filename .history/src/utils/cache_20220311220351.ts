class LocalCache {
  getCache(key: string) {
    window.localStorage.getItem(key)
    if(value){
      return JSON.parse
    }
  }
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
