import TextForce from "./TextForce"

const hpDescription = new TextForce.Text("hp description", "HP:")
const hpValue       = new TextForce.Text("hp value", "100 / 100")

const hpGroup       = new TextForce.Group([hpDescription, hpValue])


hpDescription.setX(0)
hpDescription.setY(20)
hpDescription.setColor("hsla(0, 0%, 0%, 1)")

hpValue.setX(30)
hpValue.setY(20)
// hpValue.rotate(100)
hpValue.setColor("hsla(0, 0%, 0%, 1)")


hpDescription.show()
hpValue.show()

document.body.appendChild(hpDescription.element)
document.body.appendChild(hpValue.element)

hpGroup._calculateAndSetAnchor()

hpGroup.scale(1)
hpGroup.translateX(100)
hpGroup.translateY(100)
hpGroup._drawAnchor()
