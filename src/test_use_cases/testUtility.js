import TextForce from "../TextForce"

const {wait} = TextForce.Utility

const testWait = async () => {
  console.log("Hallo")
  await wait(1000)
  console.log("DU EUMEL")
}
