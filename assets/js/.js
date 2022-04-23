var questionArray = [
    "1. Commonly used data types DO NOT include:",
    "2. The condition in an IF / ELSE statement is enclosed with ________.",
    "3. String values must be enclosed within __________ when being assigned to variables.",
    "4. A very useful tool used during development and debugging for printing content to the debugger is:",
    "5. Arrays in JavaScript can be used to store ________.",
];
// console.log(questionArray[0]);

var choices = {
    0: ["strings", "booleans", "alerts", "numbers"],
    1: ["quotes", "curly brackets", "parentheses", "square brackets"],
    2: ["commas", "curly brackets", "quotes", "parentheses"],
    3: ["Javascript", "terminal/bash", "for loops", "console.log"],
    4: ["numbers & strings", "other arrays", "booleans", "all of the above"],
};
var answers = [3, 3, 3, 4, 4];

var questionChoices = choices[currentQuestion];

var correctScore = 0;
var currentQuestion = 0;
var welcomeHeader = document.querySelector("#welcome-header");
var welcomeInstructions = document.querySelector("#welcome-instructions");
var buttonBox = document.querySelector("#button-box");
var choiceValue = "";
var gameHeader = document.querySelector("#game-header");
var timeLeft = 60;

// console.log(choices["4"][3]);

function startQuiz() {
    //triggered by clicking Start Quiz button
	console.log("Let the games begin!");

    welcomeHeader.classList.add("hidden"); //hide initial page content
    welcomeInstructions.classList.add("hidden");
    startButton.classList.add("hidden");
	var scoreLink = document.createElement("a");
	scoreLink.classList.add("score-link");
	scoreLink.textContent = "View High Scores";
	gameHeader.appendChild(scoreLink);
	var mainTimer = document.createElement("a");
	mainTimer.classList.add("timer");
	mainTimer.textContent = "Time Remaining: " + timeLeft;
	gameHeader.appendChild(mainTimer);
	//show quiz question
    correctScore = 0; //reset score
    //reset timer
    //start timer
    loadQuestion();
}

// function quizTimer () {
// 	var timeLeft = 60;
// 	var timeInterval = setInterval(function) {

// 	var timer = 60;
// }

function loadQuestion() {
    console.log("A new question has loaded!");
    //   for (var i = 0; i < answers.length; i++) {
    questionNumber = questionArray[currentQuestion];
    //create new elements for question container div, h2 question text, and buttons for each answer choice
    var questionContainer = document.createElement("div");
    var questionText = document.createElement("h2");
    var choiceContainer = document.createElement("div");
    var choice1 = document.createElement("button");
    var choice2 = document.createElement("button");
    var choice3 = document.createElement("button");
    var choice4 = document.createElement("button");
    //give new elements class names (choice-btn)
	questionText.classList.add("question-text");
    choiceContainer.classList.add("choice-container");
    choice1.classList.add("choice-btn");
    choice2.classList.add("choice-btn");
    choice3.classList.add("choice-btn");
    choice4.classList.add("choice-btn");
    //give new choiceButton elements numerical values
    choice1.setAttribute("value", 1);
    choice2.setAttribute("value", 2);
    choice3.setAttribute("value", 3);
    choice4.setAttribute("value", 4); 

    //assign content into new elements
    questionText.textContent = questionArray[currentQuestion];
    choice1.textContent = choices[currentQuestion][0];
    choice2.textContent = choices[currentQuestion][1];
    choice3.textContent = choices[currentQuestion][2];
    choice4.textContent = choices[currentQuestion][3];

    //append new elements
    document.body.appendChild(questionContainer);
    questionContainer.appendChild(questionText);
    questionContainer.appendChild(choiceContainer);
    choiceContainer.appendChild(choice1);
    choiceContainer.appendChild(choice2);
    choiceContainer.appendChild(choice3);
    choiceContainer.appendChild(choice4);
    console.log("the currentQuestion iteration number is: " + currentQuestion);
    console.log("the current question is: " + questionNumber);

    var choiceBox = document.querySelector("choice-container");
    var choiceButton = document.getElementsByClassName("choice-btn");
    // choiceContainer.addEventListener("click", function(){
    choiceContainer.addEventListener("click", function (event) {
        var userChoice = event.target;
		debugger;
        console.log("the numerical value (1-4) of the button that was just clicked was " + userChoice.value + ", which is stored in the variable userChoice.value");
		console.log("the current value of choiceValue is: " + choiceValue);
		console.log("the current value of userChoice.value is: " + userChoice.value);
        choiceValue = userChoice.value;
		console.log("now the current value of choiceValue is " + choiceValue + ", did it change in one line of code?");
        this.choiceValue = choices[currentQuestion][(choiceValue-1)]; //subtracting 1 from choiceValue because the array still starts indexing at zero
        console.log("the selected answer was: " + this.choiceValue + ", which is stored in the variable this.choiceValue");
		console.log("currently the code is trying to determine if choiceValue (" + choiceValue + ") is equal to the correct answer value of (" + answers[currentQuestion] + "), which corresponds to the correct answer of : " + choices[currentQuestion][(answers[currentQuestion] - 1)]);
		//need a way to stop/break this function if choiceValue=undefined (click not on the button)
		choiceValidate(choiceValue);
		choiceGrade (choiceValidate);
		questionContainer.remove(); // function to hide just-answered question content
        currentQuestion++; //increment question counter
        if (currentQuestion > answers.length) {
            //if the question count is greater than the length of the answer array, end the quiz
            endQuiz();
        } else {
            loadQuestion(currentQuestion); //else, re-call the loadQuestion function
			//NEED TO RESET THE EVENT LISTENER HERE? IT IS ENDING THE FUCNTION AFTER RE-CALLING
        };
    });
}

//function pauses, awaits user answer for validation - MAY NEED TO SEPARATE AS OWN FUNCTION
function choiceGrade (){
	console.log("the choiceGrade function has started! The current value of choiceValidate is: " + choiceValidate);

	if (choiceValidate) {
		//the underlying function is called by the optionButton event listener, which will return the value of true or false.
		correctScore++;
		console.log("The answer is correct! The value of the current score (correctScore) is: " + correctScore);
		playCorrectSound()
		function playCorrectSound() {
			var correctSound = new Audio('./assets/audio/correct.wav');
			correctSound.play();
		};
		// var audio = new Audio('./assets/audio/correct.wav');
		// audio.play();
		//rule to determine if any questions are left. If yes - recall loadQuestion function. Else - call endQuiz function
	} else if (!choiceValidate) {
		timeLeft = timeLeft - 10;
		playWrongSound()
		function playWrongSound() {
			var wrongSound = new Audio('./assets/audio/wrong.wav');
			wrongSound.play();
		};
		console.log("The answer is wrong! The value of the current score (correctScore) is: " + correctScore);
		//reduce timer by 10 sec
		//rule to determine if any questions are left. If yes - recall loadQuestion function. Else - call endQuiz function
	};
};

//switch case function for button id choice evaluation?

function choiceValidate(userResponse) {
	console.log("the choiceValidate function has started! The current value of userResponse is: " + userResponse);
    //validation function to determine if selected option matches the correct answer
    //if userAnswerIndex === answers[currentQuestion] then value = true, else value = false
    //return true or false value for use in loadQuestion function
    if (userResponse == answers[currentQuestion]) { //NEED TO EXPRESS BOTH ITEMS AS A STRING
        choiceValidate = true;
		console.log("(True validation received) Now leaving the choiceValidate function with a value of: " + choiceValidate);
        return;
    } else {
        choiceValidate = false;
		console.log("(False validation received) Now leaving the choiceValidate function with a value of: " + choiceValidate);
        return;
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
