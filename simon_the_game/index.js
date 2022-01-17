let sequence = []
let humanSequence = []
let level = 0

const startButton = document.querySelector('.js_start')
const info = document.querySelector('.js_info')
const heading = document.querySelector('.js_head')
const tileContainer = document.querySelector('.simon')
const finalMessage = document.querySelector('.reset_game')

function startGame() {
    startButton.classList.add('hide')
    info.classList.remove('hide')
    nexRound()
}

function nexRound() {
    level +=1

    tileContainer.classList.add('unclickable')
    info.textContent = 'Wait for the computer'
    heading.textContent = `Level ${level}`

    const nextSequence = [...sequence]
    nextSequence.push(nextStep())
    playRound(nextSequence)

    sequence = [...nextSequence]
    setTimeout(() => {
        humanTurn(level)
    }, level * 600 + 1000)
}

function nextStep() {
    const tiles = ['red', 'blue', 'yellow', 'green']
    const random = tiles[Math.floor(Math.random() * tiles.length)]

    return random
}

function activateTile(color) {
    const tile = document.querySelector(`[data-tile='${color}']`)
    const sound = document.querySelector(`[data-sound='${color}']`);

    tile.classList.add('active')
    sound.play()

    setTimeout(() => {
        tile.classList.remove('active')
    }, 300)
}

function playRound(nextSequence) {
    nextSequence.forEach((color, index) => {
        setTimeout(() => {
            activateTile(color)
        }, (index + 1) * 600)
    });
}
//human turn
function humanTurn(level) {
    tileContainer.classList.remove('unclickable');
    info.textContent = `Your turn: ${level} Tap${level > 1 ? 's' : ''}`;
}

function handleClick(tile) {
    const index = humanSequence.push(tile) - 1
    activateTile(tile)
    
    const remainingTaps = sequence.length - humanSequence.length

    if (humanSequence[index] != sequence[index]) {
        resetGame('Oops! Game over')
        return
    }

    if (humanSequence.length == sequence.length) {
        humanSequence = []
        info.textContent = 'Success! Keep going!'
        setTimeout(() => {
            nexRound()
        }, 1000)
        return
    }
    info.textContent = `Your turn: ${remainingTaps} Tap${
        remainingTaps > 1 ? 's' : ''
    }`
}

//reset game
function resetGame(text) {
    sequence = []
    humanSequence = []
    level = 0
    finalMessage.classList.remove('hide')
    startButton.classList.remove('hide')
    heading.textContent = 'Game Over'
    info.classList.add('hide')
    tileContainer.classList.add('unclickable')
}

startButton.addEventListener('click', startGame)
tileContainer.addEventListener('click', event => {
    const {tile} = event.target.dataset

    if(tile) handleClick(tile)
})