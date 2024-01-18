'use strict';

const ALEast = ['blue-jays',  'orioles', 'rays', 'red-sox', 'yankees'];
const ALCentral = ['guardians', 'royals', 'tigers', 'twins', 'white-sox'];
const ALWest = ['angels', 'astros', 'athletics', 'mariners', 'rangers'];
const NLEast = ['braves', 'marlins', 'mets', 'nationals', 'phillies'];
const NLCentral = ['brewers', 'cardinals', 'cubs', 'pirates', 'reds'];
const NLWest = ['diamondbacks', 'dodgers', 'giants', 'padres', 'rockies'];

// Elements
const btnStartEl = document.getElementById('start');
const informationEl = document.getElementById('information');
const teamsArray = document.querySelectorAll('.team-option');
const btnNewQuizEl = document.getElementById('new-quiz');

// Variables
let randomNumber;
let currentArray;
let score = 0;
const prompt = 'Can you pick the teams from the: ';

// Start Quiz
btnStartEl.addEventListener('click', startQuiz);
btnStartEl.addEventListener('click', addChoice);
btnNewQuizEl.addEventListener('click', newQuiz);

function startQuiz() {
    randomNumber = Math.floor(Math.random() *6) +1;
    
    if (randomNumber === 1) {
        currentArray = ALEast;
        informationEl.textContent = `${prompt}AL East`;
    } else if (randomNumber === 2) {
        currentArray = ALCentral;
        informationEl.textContent = `${prompt}AL Central`;
    } else if (randomNumber === 3) {
        currentArray = ALWest;
        informationEl.textContent = `${prompt}AL West`;
    } else if (randomNumber === 4) {
        currentArray = NLEast;
        informationEl.textContent = `${prompt}NL East`;
    } else if (randomNumber === 5) {
        currentArray = NLCentral;
        informationEl.textContent = `${prompt}NL Central`;
    } else if (randomNumber === 6) {
        currentArray = NLWest;
        informationEl.textContent = `${prompt}NL West`;
    }

    btnNewQuizEl.style.display = 'block';
}

function checkAnswer() {
    let answer = this.id;

    if(currentArray.includes(answer) && this.classList.contains('choice')){
            this.classList.add('correct');
            this.classList.remove('choice');
            score++;

            if (score === 5) {
            informationEl.textContent = `You got all 5 teams! Start new quiz!`;
            for(let i = 0; i < teamsArray.length; i++) {
                teamsArray[i].removeEventListener('click', checkAnswer);
                teamsArray[i].classList.remove('choice');
            }
            }
    } else if (!currentArray.includes(answer)){
        this.classList.add('wrong');
        this.classList.remove('choice');
    }
}

function newQuiz() {
    startQuiz();
    score = 0;

    for(let i = 0; i < teamsArray.length; i++) {
        if (!teamsArray[i].classList.contains('choice')){
            teamsArray[i].classList.remove('wrong');
            teamsArray[i].classList.remove('correct');
            teamsArray[i].classList.add('choice');
        }
        teamsArray[i].addEventListener('click', checkAnswer);
    }
}

function addChoice() {
    for(let i = 0; i < teamsArray.length; i++) {
        teamsArray[i].classList.add('choice');
        teamsArray[i].addEventListener('click', checkAnswer);
    }
}