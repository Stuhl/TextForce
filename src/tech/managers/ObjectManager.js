class ObjectManager {
  constructor() {
    this.objects = []
  }

  add(object) {
    this.objects.push(object)
  }

  get(name) {
    const target = this.objects.find(obj => obj.name === name)
    return target
  }

  delete(object) {
    const index = this.objects.indexOf(object)
    if (index === -1) {
      console.warn("Object not found")
      return
    }
    this.objects.splice(index, 1)
  }

  reset() {
    this.objects = []
  }

  setX(value) {
    for (let obj of this.objects) {
      obj.setX(value)
    }
  }
}

export default ObjectManager
