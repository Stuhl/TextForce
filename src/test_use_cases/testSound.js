import TextForce from "../TextForce"

const {Sound} = TextForce
const notificationWav = new URL("../test_assets/notification.wav", import.meta.url)

const testConstructor = () => {
  const sound = new Sound("notification", notificationWav.href)
  console.log(sound)
}

// testConstructor()

const testPlay = () => {
  const sound = new Sound("notification", notificationWav.href)
  const playButton = document.createElement("BUTTON")
  playButton.innerHTML = "Play the sound"
  document.body.appendChild(playButton)

  playButton.addEventListener("click", () => {
    sound.play()
  })
}

// testPlay()

const testPause = () => {
  const sound = new Sound("notification", notificationWav.href)
  const playButton = document.createElement("BUTTON")
  const pauseButton = document.createElement("BUTTON")
  pauseButton.innerHTML = "Pause the sound"
  playButton.innerHTML = "Play the sound"
  document.body.appendChild(playButton)
  document.body.appendChild(pauseButton)
  playButton.addEventListener("click", () => {
    sound.play()
  })

  pauseButton.addEventListener("click", () => {
    sound.pause()
  })
}

// testPause()

const testLoop = () => {
  const sound = new Sound("notification", notificationWav.href)
  const playButton = document.createElement("BUTTON")
  playButton.innerHTML = "Play the sound"
  document.body.appendChild(playButton)
  playButton.addEventListener("click", () => {
    sound.play()
  })

  sound.loop()
}

// testLoop()

const testNoLoop = () => {
  const sound = new Sound("notification", notificationWav.href)
  const playButton = document.createElement("BUTTON")
  playButton.innerHTML = "Play the sound"
  document.body.appendChild(playButton)
  playButton.addEventListener("click", () => {
    sound.play()
  })

  sound.noLoop()
}

// testNoLoop()

const testSetVolume = () => {
  const sound = new Sound("notification", notificationWav.href)
  const playButton = document.createElement("BUTTON")
  playButton.innerHTML = "Play the sound"
  document.body.appendChild(playButton)
  playButton.addEventListener("click", () => {
    sound.play()
  })

  sound.setVolume(0.2)
}

// testSetVolume()

const testStop = () => {
  const sound = new Sound("notification", notificationWav.href)
  const playButton = document.createElement("BUTTON")
  const stopButton = document.createElement("BUTTON")
  stopButton.innerHTML = "Stop the sound"
  playButton.innerHTML = "Play the sound"
  document.body.appendChild(playButton)
  document.body.appendChild(stopButton)
  playButton.addEventListener("click", () => {
    sound.play()
  })

  stopButton.addEventListener("click", () => {
    sound.stop()
  })
}

// testStop()
