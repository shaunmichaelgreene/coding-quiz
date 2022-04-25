debugger;
var scoreList = document.querySelector("#scores");
var user = localStorage.getItem('user');
var savedUser = JSON.parse(user);
console.log(savedUser.initials);
console.log(savedUser.score);

var score1 = document.createElement('li');
score1.textContent = ("Initials: " + savedUser.initials + " | Score: " + savedUser.score);
scoreList.appendChild(score1);

//temporarily removing the below logic while debugging
document.querySelector("#clear-scores").onclick = function () {
    localStorage.clear();
    console.log("the clear-scores button element has registered a click!");
};
// var clearScores = document.querySelector("#clear-scores")
// clearScores.addEventListener("click", localStorage.clear())
// clearScores.addEventListener("click", score1.remove())
// var goBack = document.querySelector("#go-back")
document.querySelector("#go-back").onclick = function() { //redirects to home page 
    window.location.replace("https://shaunmichaelgreene.github.io/coding-quiz/index.html");
    console.log("the go-back button element has registered a click!");
};
