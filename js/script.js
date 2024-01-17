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

// Variables
let randomNumber;
let currentArray;
let score = 0;
const prompt = 'Can you guess the teams from the: ';

// Start Quiz
btnStartEl.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() *6) +1;
    
    if (randomNumber === 1) {
        currentArray = ALEast;
        informationEl.textContent = `${prompt}AL East`;
        console.log(currentArray);
    } else if (randomNumber === 2) {
        currentArray = ALCentral;
        informationEl.textContent = `${prompt}AL Central`;
        console.log(currentArray);
    } else if (randomNumber === 3) {
        currentArray = ALWest;
        informationEl.textContent = `${prompt}AL West`;
        console.log(currentArray);
    } else if (randomNumber === 4) {
        currentArray = NLEast;
        informationEl.textContent = `${prompt}NL East`;
        console.log(currentArray);
    } else if (randomNumber === 5) {
        currentArray = NLCentral;
        informationEl.textContent = `${prompt}NL Central`;
        console.log(currentArray);
    } else if (randomNumber === 6) {
        currentArray = NLWest;
        informationEl.textContent = `${prompt}NL West`;
        console.log(currentArray);
    }

    for(let i = 0; i < teamsArray.length; i++) {
        teamsArray[i].classList.add('choice');
        teamsArray[i].addEventListener('click', checkAnswer);
    }
})

function checkAnswer() {
    let answer = this.id;
    
    if(currentArray.includes(answer)){
        this.classList.add('correct');
        this.classList.remove('choice');
        score++;
        if (score === 5) {
            informationEl.textContent = `You got all of the teams!`;
        }
    } else {
        this.classList.add('wrong');
        this.classList.remove('choice');
    }
}