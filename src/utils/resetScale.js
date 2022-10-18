export function resetScale() {
  const width = 1920
  const height = 1080

  const userWidth = document.documentElement.clientWidth || document.body.clientWidth
  const userHeight = document.documentElement.clientHeight || document.body.clientWidth

  const timesX = userWidth / width
  const timesY = userHeight / height

  // console.log(userWidth, userHeight)

  if (timesX > timesY) {
    document.body.style = `transform: scale(${timesY}) translateX(-50%); left: 50%;`
  } else {
    document.body.style = `transform: scale(${timesX}) translateX(-50%); left: 50%;`
  }
}
