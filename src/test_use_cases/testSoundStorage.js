import SoundStorage from "../tech/systems/SoundStorage"
import Sound        from "../tech/sound/sound"

const testConstructor = () => {
  const soundStorage = new SoundStorage()
  console.log(soundStorage)
}

const testAppend = () => {
  const soundStorage = new SoundStorage()
  const notificationWav = new URL("../test_assets/notification.wav", import.meta.url)
  const notificationSound = new Sound("notification", notificationWav.href)

  soundStorage.append(notificationSound)

  console.log(soundStorage)
}

const testGetWhenSoundIsThere = () => {
  const soundStorage = new SoundStorage()
  const notificationWav = new URL("../test_assets/notification.wav", import.meta.url)
  const notificationSound = new Sound("notification", notificationWav.href)
  soundStorage.append(notificationSound)

  const getSound = soundStorage.get("notification")
  console.log(getSound)
}

const testGetWhenSoundIsNotThere = () => {
  const soundStorage = new SoundStorage()
  const notificationWav = new URL("../test_assets/notification.wav", import.meta.url)
  const notificationSound = new Sound("notification", notificationWav.href)

  const getSound = soundStorage.get("notification")
  console.log(getSound)
}

const testGetAll = () => {
  const soundStorage = new SoundStorage()
  const notificationWav = new URL("../test_assets/notification.wav", import.meta.url)
  const notificationSound = new Sound("notification", notificationWav.href)
  const notificationSound2 = new Sound("notification", notificationWav.href)
  const notificationSound3 = new Sound("notification", notificationWav.href)
  soundStorage.append(notificationSound)
  soundStorage.append(notificationSound2)
  soundStorage.append(notificationSound3)

  const allSounds = soundStorage.getAll()

  console.log(allSounds)
}

const testRemoveAll = () => {
  const soundStorage = new SoundStorage()
  const notificationWav = new URL("../test_assets/notification.wav", import.meta.url)
  const notificationSound = new Sound("notification", notificationWav.href)
  const notificationSound2 = new Sound("notification", notificationWav.href)
  const notificationSound3 = new Sound("notification", notificationWav.href)
  soundStorage.append(notificationSound)
  soundStorage.append(notificationSound2)
  soundStorage.append(notificationSound3)

  soundStorage.removeAll()

  console.log(soundStorage.getAll())
}

const testSetVolumeAll = () => {
  const soundStorage = new SoundStorage()
  const notificationWav = new URL("../test_assets/notification.wav", import.meta.url)
  const notificationSound = new Sound("notification", notificationWav.href)
  soundStorage.append(notificationSound)

  console.log("Before setVolumeAll():", soundStorage.volume)
  soundStorage.setVolumeAll(0.2)

  console.log("After setVolumeAll() :", soundStorage.volume)
}

const testSoundsAreReady = () => {
  const soundStorage = new SoundStorage()
  const notificationWav = new URL("../test_assets/notification.wav", import.meta.url)
  const notificationSound = new Sound("notification", notificationWav.href)
  const notificationSound2 = new Sound("notification", notificationWav.href)
  const notificationSound3 = new Sound("notification", notificationWav.href)
  soundStorage.append(notificationSound)
  soundStorage.append(notificationSound2)
  soundStorage.append(notificationSound3)

  soundStorage.soundsAreReady().then(() => console.log("sounds ready"))
}
