import TextForce from "../TextForce"

const hpDescription = new TextForce.Text("hp description", "HP:")
const hpValue       = new TextForce.Text("hp value", "100 / 100")

const hpGroup       = new TextForce.Group([hpDescription, hpValue])


hpDescription.setX(20)
hpDescription.setY(20)
hpDescription.setColor("hsla(0, 0%, 0%, 1)")

hpValue.setX(50)
hpValue.setY(20)
// hpValue.rotate(100)
hpValue.setColor("hsla(0, 0%, 0%, 1)")


// hpDescription.show()
// hpValue.show()
//

// hpDescription.hide()

document.body.appendChild(hpDescription.element)
document.body.appendChild(hpValue.element)

// console.log(hpDescription.getCoord())

// hpGroup.scale(2)
hpGroup.translateX(100)
hpGroup.translateY(200)
hpGroup.scale(2)

hpGroup._calculateAndSetAnchor()
hpGroup._drawAnchor()

// console.log(hpGroup.anchor)


// console.log(hpDescription.getCoord())
// console.log(hpGroup.anchor)
