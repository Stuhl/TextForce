class Storage {
  constructor(config) {
    this.name = config.name
    this.saveGames = {}
  }

  save(name, data) {
    const parsedData = this._parseData(name, data)

    this.saveGames[name] = parsedData
  }

  load(name) {
    return this.saveGames[name]
  }

  delete(name) {
    delete this.saveGames[name]
  }

  reset() {
    this.saveGames = {}
  }

  saveToLocalStorage() {
    localStorage.setItem(this.name, JSON.stringify(this.saveGames))
  }

  loadFromLocalStorage() {
    const saveFile = localStorage.getItem(this.name)
    const object   = JSON.parse(saveFile)
    this.saveGames = object
  }

  _parseData(name, data) {
    const saveFile = this.load(name)
    let parsedData = data

    if (saveFile) {
      const copy = Object.assign({}, saveFile, parsedData)
      parsedData = copy
    }

    return parsedData
  }
}


export default Storage
