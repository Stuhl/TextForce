import TextForce from "../TextForce"

const {Text} = TextForce

const testConstructor = () => {
  const characterName = new Text("character", "Character: Warrior")
  document.body.appendChild(characterName.element)
  characterName.setColor("hsla(0, 0%, 5%, 1)")
  console.log(characterName)
}

const testGetXGetY = () => {
  const characterName = new Text("character", "Character: Warrior")
  document.body.appendChild(characterName.element)
  characterName.setColor("hsla(0, 0%, 5%, 1)")

  const x = characterName.getX()
  const y = characterName.getY()

  console.log(x, y)
}

const testSetXSetY = () => {
  const characterName = new Text("character", "Character: Warrior")
  document.body.appendChild(characterName.element)
  characterName.setColor("hsla(0, 0%, 5%, 1)")

  characterName.setX(100)
  characterName.setY(100)

  const x = characterName.getX()
  const y = characterName.getY()

  console.log(x, y)
}

const testSetText = () => {
  const characterName = new Text("character", "Character: Warrior")
  document.body.appendChild(characterName.element)
  characterName.setColor("hsla(0, 0%, 5%, 1)")

  characterName.setText("Character: Archer")
}

const testSetColor = () => {
  const characterName = new Text("character", "Character: Warrior")
  document.body.appendChild(characterName.element)
  characterName.setColor("hsla(0, 0%, 5%, 1)")

  characterName.setColor("hsla(340, 100%, 50%, 1)")
}

const testGetCoord = () => {
  const characterName = new Text("character", "Character: Warrior")
  document.body.appendChild(characterName.element)
  characterName.setColor("hsla(0, 0%, 5%, 1)")

  const coordinates = characterName.getCoord()
  console.log(coordinates)
}

const testRotateScale = () => {
  const characterName = new Text("character", "Character: Warrior")
  document.body.appendChild(characterName.element)
  characterName.setColor("hsla(0, 0%, 5%, 1)")

  characterName.scale(2)
  characterName.rotate(50)
}

const testHide = () => {
  const characterName = new Text("character", "Character: Warrior")
  document.body.appendChild(characterName.element)
  characterName.setColor("hsla(0, 0%, 5%, 1)")

  characterName.hide()
}

const testShow = () => {
  const characterName = new Text("character", "Character: Warrior")
  document.body.appendChild(characterName.element)
  characterName.setColor("hsla(0, 0%, 5%, 1)")

  characterName.hide()
  characterName.show()
}

testSetAnchor()
