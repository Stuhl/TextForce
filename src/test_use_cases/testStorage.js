import TextForce from "./TextForce"

const saver = new TextForce.Storage({
  name: "test storage"
})

const setup = () => {
  saver.save("test", {
    name  : "Johannes",
    lvl   : 69,
    money : 9999999
  })
}

const testParsing = () => {
  setup()
  console.log("saver before: ", saver)
  saver.save("test", {
    lvl: 70
  })
  console.log("saver after: ", saver)
}

// testParsing()


const testLoad = () => {
  setup()
  const saveFile = saver.load("test")
  console.log(saveFile)
}

// testLoad()


const testDelete = () => {
  setup()
  saver.delete("test")
}

// testDelete()


const testSaveToLocalStorage = () => {
  setup()
  localStorage.clear()
  console.log(localStorage)
  saver.saveToLocalStorage()
  console.log(localStorage)
}

// testSaveToLocalStorage()

const testLoadFromLocalStorage = () => {
  setup()
  localStorage.clear()
  saver.saveToLocalStorage()
  saver.loadFromLocalStorage()
  console.log(saver)
}

// testLoadFromLocalStorage()
