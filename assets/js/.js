var questionArray = [
    "1. Commonly used data types DO NOT include:",
  "2. The condition in an IF / ELSE statement is enclosed with ________.",
  "3. String values must be enclosed within __________ when being assigned to variables.",
  "4. A very useful tool used during development and debugging for printing content to the debugger is:",
  "5. Arrays in JavaScript can be used to store ________.",
];
console.log(questionArray[0]);

var choices = {
  0: ["strings", "booleans", "alerts", "numbers"],
  1: ["quotes", "curly brackets", "parentheses", "square brackets"],
  2: ["commas", "curly brackets", "quotes", "parentheses"],
  3: ["Javascript", "terminal/bash", "for loops", "console.log"],
  4: ["numbers & strings", "other arrays", "booleans", "all of the above"],
};

console.log(choices.q2);

var questionChoices = choices[1];

var answers = [3, 3, 3, 4, 4];

var currentQuestion = 0;
console.log(choices["4"][3]);

debugger;
function loadQuestion() {
  console.log("Let the games begin!");
  for (var i = 0; i < answers.length; i++) {
    questionNumber = questionArray[i];
    // choicesToShow = [choices[i]]
    //create new elements for question container div, h2 question text, and buttons for each answer choice
    var questionContainer = document.createElement("div");
    var questionText = document.createElement("h2");
    var choice1 = document.createElement("button");
    var choice2 = document.createElement("button");
    var choice3 = document.createElement("button");
    var choice4 = document.createElement("button");
    //give new elements class names
    choice1.classList.add("choice-btn");
    choice2.classList.add("choice-btn");
    choice3.classList.add("choice-btn");
    choice4.classList.add("choice-btn");
    //assign content into new elements
    questionText.textContent = questionArray[i];
    choice1.textContent = choices[currentQuestion][0];
    choice2.textContent = choices[currentQuestion][1];
    choice3.textContent = choices[currentQuestion][2];
    choice4.textContent = choices[currentQuestion][3];
    //append new elements
    document.body.appendChild(questionContainer);
    questionContainer.appendChild(questionText);
    questionContainer.appendChild(choice1);
    questionContainer.appendChild(choice2);
    questionContainer.appendChild(choice3);
    questionContainer.appendChild(choice4);
    console.log("the currentQuestion iteration number is:" + currentQuestion);
    console.log("the questionNumber is:" + questionNumber);
    console.log(i);
  }
}


var startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", loadQuestion());

var choiceButton = document.querySelector(".choice-btn");
choiceButton.addEventListener("click", function () {
  var questionContainer = document.getElementById(questionContainer);
  questionContainer.remove();
  currentQuestion++;
  loadQuestion(currentQuestion);
});

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
