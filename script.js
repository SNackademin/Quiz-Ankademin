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
    let playerNameDisplay = playerName.value.trim() || 'anonymous player';
    console.log(playerNameDisplay)
    //playerName.value = "";

    //document.querySelector('.container').innerHTML = '';
    renderQuestion()
})

let questionNumber = 0;

function renderQuestion() {

    const container = document.querySelector('.container');
    const title = document.querySelector('h1');

    document.querySelector('.container').innerHTML = '';

    if (questionNumber < questions.length) {

        console.log("This is the question number: " + questionNumber)

        const h2Question = document.createElement('h2');
        h2Question.textContent = questions[questionNumber].question
        container.appendChild(h2Question)


        if (questions[questionNumber].type === "boolean") {
            trueFalseType(container,questions[questionNumber].answers);
        } else if(questions[questionNumber].type === "radio") {
            radioType(container, questions[questionNumber].answers)
        }







        const nextQuestionButton = document.createElement('button');
        nextQuestionButton.textContent = 'Next question';
        nextQuestionButton.id = 'next-question-button';
        nextQuestionButton.addEventListener('click',() => {
            questionNumber++;
            renderQuestion();
        })
        container.appendChild(nextQuestionButton)

    } else {
        title.textContent = `Congratulations ${playerName.value.trim() || "anonymous player"} you have completed the quiz!`
    }


    //Run true false answers
    function trueFalseType(container,answers) {

        answers.forEach(posibleAnswer => {
            
            const trueFalseButton = document.createElement('button');
            trueFalseButton.id = 'true-false-button'
            trueFalseButton.textContent = posibleAnswer;
            container.appendChild(trueFalseButton);
            
        });
      
    }

    //Run radio answers
    function radioType(container, answers) {
        answers.forEach(posibleAnswer => {
            const labelRadioType = document.createElement('label');
            labelRadioType.innerHTML = posibleAnswer;
            container.appendChild(labelRadioType);
        
        });
    }
    







}