var scoreList = document.querySelector("#scores");
var user = localStorage.getItem("user");
var savedUser = JSON.parse(user);
console.log(savedUser.initials);
console.log(savedUser.score);

var scoreListItem = document.createElement("li");
scoreListItem.textContent =
    "Initials: " + savedUser.initials + " | Score: " + savedUser.score;
scoreList.appendChild(scoreListItem);

document.querySelector("#clear-scores").onclick = function () {
    localStorage.clear();
    console.log("the clear-scores button element has registered a click!");
    scoreListItem.textContent = " ";
};
