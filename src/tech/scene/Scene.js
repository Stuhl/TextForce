class Scene {
  constructor(config) {
    const {name, create, destroy, render} = config
    this.checkMethods(config)
    this.name = name
    this.create = create
    this.destroy = destroy
    this.render = render
  }

  checkMethods(config) {
    const keys = ["name", "create", "render"]

    for (let key of keys) {
      if (!config.hasOwnProperty(key)) {
        if (key === "name") {
          throw new Error(`Scene Error: Missing property ${key}`)
        } else {
          throw new Error(`Scene Error: Missing function ${key}()`)
        }
      }
    }
  }
}


// const scene = new Scene({
//   name: "Ich liebe Johannes",
//   create() {
//
//   },
//   render() {
//
//   },
//   destroy() {
//
//   }
// })

export default Scene
