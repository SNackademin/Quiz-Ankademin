import {questions} from './array.js';
console.log(questions)

let playerName = document.getElementById('player-name');
const startGameButton = document.getElementById('start-button');
//let playerScore = 0;

let changeBackgroundColor = document.getElementById('change-color');
changeBackgroundColor.addEventListener('click', () => {
    
    const currentBodyBackgroundColor = document.body.style.backgroundColor;
    if (currentBodyBackgroundColor === 'rgb(48, 22, 74)') {
        document.body.style.backgroundColor = '#692A91';
    } else {
        document.body.style.backgroundColor = '#30164A';
    }

    const currentContainerBackground = document.querySelector('.container').style.backgroundColor;
    if (currentContainerBackground === 'rgb(124, 124, 124)') {
        document.querySelector('.container').style.backgroundColor = 'rgb(255, 255, 255)'; 
    } else {
        document.querySelector('.container').style.backgroundColor = 'rgb(124, 124, 124)';
    }
    

});
































startGameButton.addEventListener('click', () => {
    let playerNameDisplay = playerName.value.trim() || 'Anonymous';
    console.log(playerNameDisplay)
    playerName.value = "";




















})