'use strict'

const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const startBtn = document.querySelector('.start');
const rps = document.querySelector('.gameShow');
const allStartBtn = document.querySelectorAll('.start');
const rpsPlayer = document.querySelector('.playerPick');
const winorLose = document.querySelector('.winorLose');

// console.log(startBtn);

// startBtn.addEventListener('click', () => {
//     startBtn.classList.add('show')
//     player1.classList.add('move')
//     player2.classList.add('move')
//     gameShowTextContent()
//     setTimeout(() => {
//         player1.classList.remove('move')
//         player2.classList.remove('move')
//         startBtn.classList.remove('show')
//     },3200)
// })

allStartBtn.forEach(allStartBtninLoop => {
        allStartBtninLoop.addEventListener('click', (e) => {rpsPlayer.textContent = e.target.textContent
    })
})

function gameShowTextContent () {
    rps.textContent = "Rock"
    rps.style.opacity = "1"
    rpsPlayer.style.opacity = '1'
    let pick = Math.ceil(Math.random() * 3)
    let pickName
    if (pick == 1) pickName = "Rock"
    else if (pick == 2) pickName = "Paper"
    else if (pick == 3) pickName = "Scissors"
    setTimeout(() => {rps.textContent = "Paper"}, 1000)
    setTimeout(() => {rps.textContent = "Scissors"}, 1700)
    setTimeout(() => {rps.textContent = pickName}, 2000)

setTimeout(() => {
    const playerPick = rpsPlayer.textContent.trim().toLowerCase();
    const compPick = rps.textContent.trim().toLowerCase();

    if (playerPick === "rock" && compPick === "rock") {
        winorLose.textContent = "Draw"
    } else if (playerPick === "rock" && compPick === "paper") {
        winorLose.textContent = "You lose"
    } else if (playerPick === "rock" && compPick === "scissors") {
        winorLose.textContent = "You win"
    } else if (playerPick === "paper" && compPick === "rock") {
        winorLose.textContent = "You win"
    } else if (playerPick === "paper" && compPick === "paper") {
        winorLose.textContent = "Draw"
    } else if (playerPick === "paper" && compPick === "scissors") {
        winorLose.textContent = "You lose"
    } else if (playerPick === "scissors" && compPick === "rock") {
        winorLose.textContent = "You lose"
    } else if (playerPick === "scissors" && compPick === "paper") {
        winorLose.textContent = "You win"
    } else if (playerPick === "scissors" && compPick === "scissors") {
        winorLose.textContent = "Draw"
    }

    winorLose.style.opacity = "1"
}, 2500)
}

allStartBtn.forEach(startBtninLoop => {
    startBtninLoop.addEventListener('click', (e) => {
        // rpsPlayer.textContent = e.target.textContent
        // console.log(e.target.textContent);
        winorLose.style.opacity = "0"
        allStartBtn.forEach(button => {button.classList.add('show')})
        player1.classList.add('move')
        player2.classList.add('move')
        gameShowTextContent()
        setTimeout(() => {
            player1.classList.remove('move')
            player2.classList.remove('move')
            allStartBtn.forEach(button => {button.classList.add('show')})
        },3200)
    })
})

