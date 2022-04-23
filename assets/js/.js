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

var questionChoices = choices[currentQuestion];

var answers = [3, 3, 3, 4, 4];
var correctScore = 0;
var currentQuestion = 0;
var welcomeHeader = document.querySelector("#welcome-header");
var welcomeInstructions = document.querySelector("#welcome-instructions");
var buttonBox = document.querySelector("#button-box");
var choiceValue= "";
// console.log(choices["4"][3]);

function startQuiz() { //triggered by clicking Start Quiz button
    welcomeHeader.classList.add("hidden"); //hide initial page content
    welcomeInstructions.classList.add("hidden");
    startButton.classList.add("hidden"); 
    //show quiz question
    correctScore = 0 //reset score
    //reset timer
    //start timer
    loadQuestion();
}

function loadQuestion() { 
    console.log("Let the games begin!");
    //   for (var i = 0; i < answers.length; i++) {
    questionNumber = questionArray[currentQuestion];
    //create new elements for question container div, h2 question text, and buttons for each answer choice
    var questionContainer = document.createElement("div");
    var questionText = document.createElement("h2");
    var choice1 = document.createElement("button");
    var choice2 = document.createElement("button");
    var choice3 = document.createElement("button");
    var choice4 = document.createElement("button");
    //give new choiceButton elements class names (choice-btn)
    choice1.classList.add("choice-btn");
    choice2.classList.add("choice-btn");
    choice3.classList.add("choice-btn");
    choice4.classList.add("choice-btn");
    //give new choiceButton elements numerical values
    choice1.setAttribute('value', 1);
    choice2.setAttribute('value', 2);
    choice3.setAttribute('value', 3);
    choice4.setAttribute('value', 4);
    
    //assign content into new elements
    questionText.textContent = questionArray[currentQuestion];
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
    console.log(currentQuestion);
    
    var choiceButton = document.querySelector(".choice-btn");
    choiceButton.addEventListener("click", function(){
        choiceValue = choiceButton.getAttribute(this.value);
        this.choiceValue = choices([currentQuestion][choiceValue]); //how to determine the selection's index in the array? 
        //need a way to append a numerical value to each option button, which can be cross-referenced against the answer key
        questionContainer.remove(); // fucntion to hide just-answered question content
        currentQuestion++; //increment question counter
        if (currentQuestion > answers.length) { //if the question count is greater than the length of the answer array, end the quiz
                endQuiz ();
        }
        else {
        loadQuestion(currentQuestion); //else, re-call the loadQuestion function
        }
    });
    

    //function pauses, awaits user answer for validation - MAY NEED TO SEPARATE AS OWN FUNCTION
    if (choiceValidate) { //the underlying function is called by the optionButton event listener, which will return the value of true or false. 
        correctScore = correctScore++;
        //rule to determine if any questions are left. If yes - recall loadQuestion function. Else - call endQuiz function
    }
    else if (!choiceValidate) {
        //reduce timer by 10 sec
        //rule to determine if any questions are left. If yes - recall loadQuestion function. Else - call endQuiz function
    };
};

//switch case function for button id choice evaluation? 

function choiceValidate(choiceValue) {
    //validation function to determine if selected option matches the correct answer
    //if userAnswerIndex === answers[currentQuestion] then value = true, else value = false
    //return true or false value for use in loadQuestion function
    if (choiceValue === answers[currentQuestion]) {
        choiceValidate = true;
        return
    }
    else {
        choiceValidate = false;
        return
    };
    
}

function endQuiz() {
    //stop timer, check value
    //return value of correctScore
    //hide current question content
    //display end game message (call another function for this?)
}

var startButton = document.querySelector("#start-btn"); //identify variable for start button
startButton.addEventListener("click", startQuiz); //add event listener to trigger startQuiz function once clicked


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
