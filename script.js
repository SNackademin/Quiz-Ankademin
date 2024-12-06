import {questions} from './array.js';
console.log(questions)

let playerName = document.getElementById('player-name');
const startGameButton = document.getElementById('start-button');
//let playerScore = 0;

startGameButton.addEventListener('click', () => {
    let playerNameDisplay = playerName.value.trim() || 'Anonymous';
    console.log(playerNameDisplay)
    playerName.value = "";

})