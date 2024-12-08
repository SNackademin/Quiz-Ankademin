import {questions} from './array.js';
console.log(questions)

let playerName = document.getElementById('player-name');
const startGameButton = document.getElementById('start-button');
//let playerScore = 0;

let changeColor = document.getElementById('change-color');
changeColor.addEventListener('click', () => {
    //change body color
    const currentBodyBackgroundColor = document.body.style.backgroundColor;
    if (currentBodyBackgroundColor === 'rgb(48, 22, 74)') {
        document.body.style.backgroundColor = '#692A91';
    } else {
        document.body.style.backgroundColor = '#30164A';
    }
    //change container color
    const currentContainerBackground = document.querySelector('.container').style.backgroundColor;
    if (currentContainerBackground === 'rgb(124, 124, 124)') {
        document.querySelector('.container').style.backgroundColor = 'rgb(255, 255, 255)'; 
    } else {
        document.querySelector('.container').style.backgroundColor = 'rgb(124, 124, 124)';
    }
    //change input color
    const currentInputBackground = document.getElementById('player-name').style.backgroundColor;;
    if (currentInputBackground === 'rgb(132, 131, 131)') {
        document.getElementById('player-name').style.backgroundColor = 'rgb(255, 255, 255)'; 
    } else {
        document.getElementById('player-name').style.backgroundColor = 'rgb(132, 131, 131)';
    }
    //change text input color // doesnt work
    // const currentInputTextColor = document.getElementById('player-name');
    // if (currentInputTextColor.style.color === 'rgb(132, 131, 131)') {
    //     currentInputTextColor.style.color = 'rgb(255, 255, 255)' ;
    // } else {
    //     currentInputTextColor.style.color = 'rgb(132, 131, 131)';
    // }
});




startGameButton.addEventListener('click', () => {
    let playerNameDisplay = playerName.value.trim() || 'Anonymous';
    console.log(playerNameDisplay)
    playerName.value = "";

    document.querySelector('.container').innerHTML = '';

    const container = document.querySelector('.container');
    questions.forEach((item, index) => {
        const questionElement = document.createElement('h2'); // Crea un h2
        questionElement.textContent = `${index + 1}. ${item.question}`; // Añade la pregunta al h2
        container.appendChild(questionElement); // Agrega el h2 al container
    });

    
})