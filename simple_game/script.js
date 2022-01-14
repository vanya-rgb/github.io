var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var $time = document.querySelector('#time')
var $result = document.querySelector('#result')
var $timeHeader = document.querySelector('#time_header')
var $resultHeader = document.querySelector('#result-header')
var $gameTime = document.querySelector('#game-time')

var score = 0
var isGameStarted = false
var colors = ['#fc466b', '#fdbb2d', '#22c1c3', '#eeaeca', '#94bbe9', '#fd1d1d']


$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)

function show($el){
    $el.classList.remove('hide')
}

function hide($el){
    $el.classList.add('hide')
}

function startGame(){
    score = 0
    setGameTime()
    $gameTime.setAttribute('disabled', 'true')
    
    $game.style.backgroundColor = '#fff'
    hide($start)
    isGameStarted = true


    var interval = setInterval(function(){
        var time = parseFloat($time.textContent)

        if (time <= 0){
            clearInterval(interval)
            endGame()
        }
        else{
            $time.textContent = (time - 0.1).toFixed(1)
        }
        
    }, 100)

    renderBox()
}

function setGameScore(){
    $result.textContent = score.toString()
}

function setGameTime(){
    var time = +$gameTime.value
    $time.textContent = time.toFixed(1)
    show($timeHeader)
    hide($resultHeader)
}

function endGame(){
    isGameStarted = false
    setGameScore()
    show($start)
    $game.innerHTML = ''
    $game.style.backgroundColor = '#ccc'
    hide($timeHeader)
    show($resultHeader)
    $gameTime.removeAttribute('disabled', 'false')
}

function handleBoxClick(event){
    if (!isGameStarted){
        return 
    }
    if (event.target.dataset){
        score++
        renderBox()
    }
}


function renderBox(){
    
    $game.innerHTML = ''
    var box = document.createElement('div')
    var boxSize = getRandom(30, 100)
    var gameSize = $game.getBoundingClientRect()
    var maxTop = gameSize.height - boxSize
    var maxLeft = gameSize.width - boxSize
    var randomColorIndex = getRandom(0, colors.length-1)

    console.log(gameSize)

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = colors[randomColorIndex]
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer' 
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max){
    return Math.floor(Math.random() * (max-min) + min)
}