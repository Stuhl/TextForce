import TextForce from "./TextForce"

const hpDescription = new TextForce.Text("hp description", "HP:")
const hpValue       = new TextForce.Text("hp value", "100 / 100")

const hpGroup       = new TextForce.Group([hpDescription, hpValue])


hpDescription.setX(100)
hpDescription.setY(50)
hpDescription.setColor("hsla(0, 0%, 0%, 1)")

hpValue.setX(130)
hpValue.setY(50)
// hpValue.rotate(100)
hpValue.setColor("hsla(0, 0%, 0%, 1)")


hpDescription.show()
hpValue.show()

document.body.appendChild(hpGroup.getContainer())


hpGroup.scale(1.5)
hpGroup.translateX(100)
// hpGroup.translateX(200)
hpGroup.translateY(100)

console.log(hpGroup)
