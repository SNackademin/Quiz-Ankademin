import {questions} from './array.js';

let playerName = document.getElementById('player-name');
const startGameButton = document.getElementById('start-button');
const stopQuizButton = document.getElementById('reset-quiz');
let playerScore = 0;

//I need fix this
let changeColor = document.getElementById('change-color');

let currentBodyBackgroundColor = true;
let currentTextHTMLColor = true;

function updateChekedTextColor() {

    const h1 = document.querySelector('h1');
    const currentTextHTMLColor = h1.style.color;

    let newColorText;

    if (currentTextHTMLColor) {
            newColorText = 'white';
        } else {
            newColorText = 'black'
        };

        h1.style.color = newColorText;

    const currentElementsTextColor = document.querySelectorAll('h2,h4,label,li');
    currentElementsTextColor.forEach(element => {
        element.style.color = newColorText;
    })
}


stopQuizButton.addEventListener('click', () => {
    const container = document.querySelector('.container');
    const title = document.querySelector('h1');

    document.querySelector('.container').innerHTML = '';
    
    title.textContent = `You abandoned the quiz`;

    const playerFinalScore = document.createElement('h2');
    playerFinalScore.textContent = `Your score is: ${playerScore} points!`;
    container.appendChild(playerFinalScore);

    });


changeColor.addEventListener('click', () => {

    updateChekedTextColor();

    //change body color
    if (currentBodyBackgroundColor) {
        document.body.style.background = 'radial-gradient(circle, rgba(31,16,53,1) 17%, rgba(61,26,89,1) 91%, rgba(46,21,71,1) 100%)';
    } else {
        document.body.style.background = 'radial-gradient(circle, rgba(113,45,155,1) 25%, rgba(61,26,89,1) 50%, rgba(31,16,53,1) 90%)';
    }
    currentBodyBackgroundColor = !currentBodyBackgroundColor;


    currentTextHTMLColor = !currentTextHTMLColor;
});

startGameButton.addEventListener('click', () => {
    let playerNameDisplay = playerName.value.trim() || 'anonymous player';
    console.log(`Good luck ${playerNameDisplay} !`)

    renderQuestion()
})

let questionNumber = 0;
let selectedAnswer = null;

function renderQuestion() {
    selectedAnswer = [];
    const container = document.querySelector('.container');
    const title = document.querySelector('h1');

    document.querySelector('.container').innerHTML = '';

    title.textContent = `Question ${questionNumber + 1} of ${questions.length}`;

    if (questionNumber < questions.length) {


        const h2Question = document.createElement('h2');
        h2Question.textContent = questions[questionNumber].question
        container.appendChild(h2Question)

        const showAnswersDiv = document.createElement('div');
        showAnswersDiv.classList.add('show-answers');
        container.appendChild(showAnswersDiv);

        //call functions
        if (questions[questionNumber].type === "boolean") {
            trueFalseType(showAnswersDiv,questions[questionNumber].answers);
        } else if(questions[questionNumber].type === "radio") {
            radioType(showAnswersDiv, questions[questionNumber].answers)
        } else if (questions[questionNumber].type === "checkbox"){
            checkboxType(showAnswersDiv, questions[questionNumber].answers)
        }

        //next button
        const nextQuestionButton = document.createElement('button');
        nextQuestionButton.textContent = 'Next question';
        nextQuestionButton.id = 'next-question-button';
        nextQuestionButton.addEventListener('click',() => {

            validatedCheckedAnswer(selectedAnswer,questions[questionNumber].correctAnswer);
            selectedAnswer = null;


            questionNumber++;
            renderQuestion();

            updateChekedTextColor();
        })
        container.appendChild(nextQuestionButton)

        
    } else {
        title.textContent = `Congratulations ${playerName.value.trim() || "anonymous player"} you have completed the quiz!`

        const playerFinalScore =document.createElement('h2');
        playerFinalScore.textContent = `Your final score is: ${playerScore} points!`

        container.appendChild(playerFinalScore);

        //calculate procent 
        let totalNumberQuestions =  questions.length;
        let totalPercent = (playerScore/totalNumberQuestions) * 100;

        const showMessage = document.createElement('h3');
        let resultShowMessage = '';

        if (totalPercent > 75){
            resultShowMessage = 'You did very well!';
            showMessage.style.color = 'green'
        }else if (totalPercent >= 50) {
            resultShowMessage = 'At least you tried!';
            showMessage.style.color = 'yellow'
        } else if (totalPercent <= 50){
            resultShowMessage = "If I had been you I wouldn't have even tried :)";
            showMessage.style.color = 'red'
        }

        showMessage.textContent = resultShowMessage;
        container.append(showMessage)

        //check if there is something in the array
        if(incorrectSelectedAnswers.length> 0){

            const incorrectTittle = document.createElement('h4');
            incorrectTittle.textContent = 'You answered the following questions wrong:'
            container.appendChild(incorrectTittle);

            const incorrectAnswersList = document.createElement('ul');

            //Create a li for every incorrect anwser
            incorrectSelectedAnswers.forEach(item => {
                const incorrectAnswersAddToList =document.createElement('li');
                incorrectAnswersAddToList.textContent =  `${item.number}: ${item.question}`;

                incorrectAnswersList.appendChild(incorrectAnswersAddToList);
            })
            
            container.appendChild(incorrectAnswersList);
        }
    }

    
    //Run true false answers
    function trueFalseType(container,answers) {

        selectedAnswer = null;

        answers.forEach(posibleAnswer => {
            
            const trueFalseButton = document.createElement('button');
            trueFalseButton.id = posibleAnswer;
            trueFalseButton.textContent = posibleAnswer;

            trueFalseButton.addEventListener('click', () =>{
                selectedAnswer = (posibleAnswer === "True");
            })

            container.appendChild(trueFalseButton);
        });
    }

    //Run radio answers
    function radioType(container, answers) {

        selectedAnswer = null;

        answers.forEach((posibleAnswer, index)   => {

            const labelRadioType = document.createElement('label');
            labelRadioType.innerHTML = posibleAnswer;
            container.appendChild(labelRadioType);
        
            const inputRadioType = document.createElement('input');
            inputRadioType.type = 'radio';
            inputRadioType.name = 'radio-select'
            inputRadioType.value = index;

            container.appendChild(inputRadioType);
            labelRadioType.appendChild(inputRadioType);

            inputRadioType.addEventListener('change',() => {
                selectedAnswer = index;
            });
        });
    }

    //Run checkbox answers
    function checkboxType(container, answers) {

        selectedAnswer =[];

        answers.forEach((posibleAnswer, index) => {
            const labelCheckboxType = document.createElement('label');
            const InputCheckboxType = document.createElement('input');
            InputCheckboxType.type = "checkbox";
            InputCheckboxType.name = 'checkbox-select'
            InputCheckboxType.value = posibleAnswer;
    
            labelCheckboxType.textContent = posibleAnswer;
            labelCheckboxType.appendChild(InputCheckboxType);
            container.appendChild(labelCheckboxType);

            InputCheckboxType.addEventListener('change' , ()=>{
                if (InputCheckboxType.checked){
                    if (!selectedAnswer.includes(index)) {
                        selectedAnswer.push(index);
                    }
                } else { // If no selected delete from array
                    const toRemoveIndex = selectedAnswer.indexOf(index);
                    if (toRemoveIndex !== -1) {
                        selectedAnswer.splice(toRemoveIndex, 1);
                    }
                }
            })
        });      
    }

}

let incorrectSelectedAnswers = [];

//function validateCheckedAnswer()
function validatedCheckedAnswer(selectedAnswer, correctAnswer) {
  
    if (Array.isArray(correctAnswer)) { // Checkbox (array)

        const checkSelectedCorrect = selectedAnswer.length === correctAnswer.length && correctAnswer.every(answer => selectedAnswer.includes(answer));

        if (checkSelectedCorrect) {
            playerScore++;
        } else {// push number and incorrect question
            incorrectSelectedAnswers.push({
                number: questionNumber + 1,
                question: questions[questionNumber].question
            });
        }
    } else if (selectedAnswer === correctAnswer) { // Boolean - radio
        playerScore++;
    } else {  //push number and incorrect question
        incorrectSelectedAnswers.push({
            number: questionNumber + 1,
            question: questions[questionNumber].question
        });
    }
}