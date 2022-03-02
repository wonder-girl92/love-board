const board = document.querySelector('#board')
const colors = ['#44090C', '#51070A', '#890C12', '#890C12', '#C11119']
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseleave', removeColor)
  board.append(square)
}

function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.color = 'red'
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#f0dba2'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
