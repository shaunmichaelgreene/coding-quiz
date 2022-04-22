var questionArray = ['1. Commonly used data types DO NOT include:',
                '2. The condition in an IF / ELSE statement is enclosed with ________.',
                '3. String values must be enclosed within __________ when being assigned to variables.',
                '4. A very useful tool used during development and debugging for printing content to the debugger is:',
                '5. Arrays in JavaScript can be used to store ________.'];
console.log(questionArray[0]);

var choices={
    0: ["strings", "booleans", "alerts", "numbers"],
    1: ["quotes", "curly brackets", "parentheses", "square brackets"],
    2: ["commas", "curly brackets", "quotes", "parentheses"],
    3: ["Javascript", "terminal/bash", "for loops", "console.log"],
    4: ["numbers & strings", "other arrays", "booleans", "all of the above"],
};

var questionContainer = document.createElement('div');
var questionText = document.createElement('h2');
var option1 = document.createElement('button');
var option2 = document.createElement('button');
var option3 = document.createElement('button');
var option4 = document.createElement('button');

// questionText.textContent = [questionArray(i)];
// option1.textContent = [choices]

// console.log(choices.q2);

// var questionChoices = choices.q1


// var answers = [3, 3, 3, 4, 4];

function startQuiz() {
    window.alert("Let the games begin!");
};

// currentQuestion();
//     for (let i = 0; i < answers.length; i++) {
//         questionToAsk = [questionArray(i)];
//         choicesToShow = [choices[i]]
//     };
var startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startQuiz)

//correct answer syntax: choices.q2()
//main game function

//choice click handler

//start click handler

//question load 

//choice validate

//timer

//define all questions in a single array, or separate? Iterate as a loop for 1-5? Different behavior needed for last question. 


//Q1: "Commonly used data types DO NOT include:"
//Q1 Choices: ["strings", "booleans", "alerts", "numbers"]

//Q2: "The condition in an IF / ELSE statement is enclosed with ________."
//Q2 Choices: ["quotes", "curly brackets", "parentheses", "square brackets"]

//Q3: "String values must be enclosed within __________ when being assigned to variables."
//Q3 Choices: ["commas", "curly brackets", "quotes", "parentheses"]

//Q4: "A very useful tool used during development and debugging for printing content to the debugger is:"
//Q4 Choices: ["Javascript", "terminal/bash", "for loops", "console.log"]

//Q5: "Arrays in JavaScript can be used to store ________.""
//Q5 Choices: ["numbers & strings", "other arrays", "booleans", "all of the above"]

//dont try to match up strings for validations. Just establish the numerical choice or div ID reference for the correct answer on each question. Then just validate that the 
// ID number matches the answer. 

