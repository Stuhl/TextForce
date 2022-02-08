class SceneEvents {
  constructor(scene) {
    this.scene = scene
  }

  getEvents() {
    const self = this

    return {
      on(event, handler) {
        if (event === "input") {
          self.scene.input.on("input", handler)
        }
      },
      addEventListener(gameObject, event, handler) {
        self.scene.eventManager.addEventListener(gameObject, event, handler)
      }
    }
  }
}

export default SceneEvents
