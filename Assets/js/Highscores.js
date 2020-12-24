$('document').ready(function(){
let userScores = document.querySelector("#user-scores");
userScores.textContent = JSON.parse(localStorage.getItem("Scores"))
});
