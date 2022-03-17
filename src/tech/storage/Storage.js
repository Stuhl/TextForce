/**
 * The Storage class. Use this to store local data like savefiles and the like
 */
class Storage {
  /**
   * @param  {string}  name The name of the storage. Will be used to retrieve data from local storage
   * @return {Storage}
   */
  constructor(name) {
    /**
     * Holds the name of the Storage
     * @private
     * @type {string} name
     */
    this.name      = name

    /**
     * Holds the data for the save files
     * @private
     * @type {Object} saveGames
     */
    this.saveGames = {}

    /**
     * Holds the data for global use
     * @private
     * @type {Object} global
     */
    this.global    = {}
  }

  /**
   * Saves the data to the private member {@link global}
   * @param  {Object} data The data you want to save
   * @return {void}
   */
  saveDataToGlobal(data) {
    this.global = data
  }

  /**
   * Saves the data to the private member {@link saveGames}
   * @param  {string} name The name of the save file
   * @param  {Object} data The data you want to save
   * @return {void}
   */
  save(name, data) {
    const parsedData = this._parseData(name, data)

    this.saveGames[name] = parsedData
  }

  /**
   * Returns the save file from member {@link saveGames}
   * @param  {string}             name The name of the save file
   * @return {(Object|undefined)}      The Object holding the save file data
   */
  load(name) {
    return this.saveGames[name]
  }

  /**
   * Deletes the save file from member {@link saveGames}
   * @param  {string} name The name of the save file
   * @return {void}
   */
  delete(name) {
    delete this.saveGames[name]
  }

  /**
   * Resets member {@link saveGames} e.g. deletes every save file
   * @return {void}
   */
  reset() {
    this.saveGames = {}
  }

  /**
   * Writes member {@link saveGames} to local storage with member {@link name} being the key
   * @return {void}
   */
  saveToLocalStorage() {
    localStorage.setItem(this.name, JSON.stringify(this.saveGames))
  }

  /**
   * Reads from local Storage using member {@link name} as key and writes the data to member {@link saveGames}
   * @return {void}  description
   */
  loadFromLocalStorage() {
    const saveFile = localStorage.getItem(this.name)
    const object   = JSON.parse(saveFile)
    this.saveGames = object
  }

  /**
   * @ignore
   */
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
