class Storage {
  constructor() {
    this.current = null
    this.key = null
  }

  getLoadedFile() {
    return this.current
  }

  createSavefile(name) {
    const file = JSON.stringify({
      name,
      data: {}
    })
    localStorage.setItem(name, file)
  }

  save(data) {
    const json = JSON.stringify(data)
    localStorage.setItem(this.key, json)
  }

  load(key) {
    this.current = JSON.parse(localStorage.getItem(key))
    this.key = key
    return this.current
  }

  delete(key) {
    localStorage.removeItem(key)
  }

  deleteAll() {
    localStorage.clear()
  }
}

export default Storage
