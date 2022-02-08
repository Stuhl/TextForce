class GameObjectsFacade {
  constructor(scene, Text) {
    this.scene = scene
    this.Text  = Text
  }

  getAdd() {
    const self = this

    return {
      text(config) {
        const textObject = new Text(config.name, config.text)
        textObject.setX(config.x)
        textObject.setY(config.y)
        self.scene.objectManager.append(textObject)
        document.body.appendChild(textObject.element)
      },
      textObject(textObject) {
        self.scene.objectManager.append(textObject)
        document.body.appendChild(textObject.element)
      }
    }
  }

  getRemove() {
    const self = this

    return {
      text(name) {
        const textObject = self.scene.objectManager.get(name)
        self.scene.objectManager.delete(textObject)
        document.body.removeChild(textObject.element)
      }
    }
  }
}

export default GameObjectsFacade
