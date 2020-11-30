var timeEl = document.querySelector("#timer");
var buttonEl = document.querySelector("#begin");
var questionGameEl = document.querySelector("#question-game");
var questionLocations = document.querySelector("#question-locations");
var questionTitles = document.querySelector("#question-titles");
var buttonLocations = document.querySelector("#button-locations");
var questionsEl = [
    {
        title: "Commonly used data types DO NOT include:",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        correctAnswer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ______.",
        answers: [
            "quotes",
            "curly brackets",
            "parantheses",
            "square brackets"
        ],
        correctAnswer: "parantheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        answers: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        correctAnswer: "all of the above"
    },
    {
        title: "String values must be enclosed within ______.",
        answers: [
            "commas",
            "curly brackets",
            "quotes",
            "parenthesis"
        ],
        correctAnswer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is: ",
        answers: [
            "Javascript",
            "terminal / bash",
            "for loops",
            "console log"
        ],
        correctAnswer: "console log"
    },
];

var questionIndex = 0;
var secondsLeft = 60;
var penalty = 10;


function startGame() {
    questionGameEl.style.display = "none";
    generateQuestions()
}

function generateQuestions() {
    var currentQuestion = questionsEl[questionIndex];

    questionTitles.textContent = currentQuestion.title;

    buttonLocations.innerHTML = '';
    currentQuestion.answers.forEach(function (choice) {
        var newButton = document.createElement('button');
        newButton.textContent = `${choice}`;
        newButton.onclick = validateAnswer
        // append each button to buttons element
        buttonLocations.appendChild(newButton)
    })

}

function validateAnswer() {
    // validate:
    // wrong = -15 seconds
    // correct = nothing


    // are there any more questions?


    questionIndex++;
    generateQuestions();

}

buttonEl.addEventListener("click", function () {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time left:" + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
    startGame()
})
