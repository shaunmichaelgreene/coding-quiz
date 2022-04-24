var scoreList = document.querySelector("#scores");
var user = localStorage.getItem('user');
var savedUser = JSON.parse(user);
console.log(savedUser.initials);
console.log(savedUser.score);

var score1 = document.createElement('li');
score1.textContent = ("Initials: " + savedUser.initials + " | Score: " + savedUser.score);
scoreList.appendChild(score1);

var clearScores = document.querySelector("#clear-scores")
clearScores.addEventListener("click", localStorage.clear())
clearScores.addEventListener("click", score1.remove())
var goBack = document.querySelector("#go-back")
goBack.onclick = function() {
    window.location.replace("https://shaunmichaelgreene.github.io/coding-quiz/index.html");
};
