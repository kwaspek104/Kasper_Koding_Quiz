let timeEl = document.querySelector('#timer')
let buttonEl = document.querySelector('#begin')
let questionGameEl = document.querySelector('#question-game')
let questionLocations = document.querySelector('#question-locations')
let questionTitles = document.querySelector('#question-titles')
let buttonLocations = document.querySelector('#button-locations')
let rightWrong = document.querySelector('#right-wrong')
let gameOver = document.querySelector('#game-over')
let finalScore = document.querySelector('#final-score')
let submitBtn = document.querySelector('#submit')
let userName = document.querySelector('#name')
let clearBtn = document.querySelector('.clear')
let userScores = document.querySelector('#user-scores')

questionLocations.style.display = 'none'
gameOver.style.display = 'none'
let questionsEl = [
  {
    title: 'Commonly used data types DO NOT include:',
    answers: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
    correctAnswer: 'Alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ______.',
    answers: ['Quotes', 'Curly Brackets', 'Parantheses', 'Square Brackets'],
    correctAnswer: 'Parantheses',
  },
  {
    title: 'Arrays in Javascript can be used to store ____.',
    answers: [
      'Numbers and Strings',
      'Other Arrays',
      'Booleans',
      'All of the Above',
    ],
    correctAnswer: 'All of the Above',
  },
  {
    title: 'String values must be enclosed within ______.',
    answers: ['Commas', 'Curly Brackets', 'Quotes', 'Parenthesis'],
    correctAnswer: 'Quotes',
  },
  {
    title:
      'A very useful tool for used during development and debugging for printing content to the debugger is: ',
    answers: ['Javascript', 'Terminal / Bash', 'For Loops', 'Console Log'],
    correctAnswer: 'Console Log',
  },
]

let questionIndex = 0
let secondsLeft = 60

function startGame() {
  questionGameEl.style.display = 'none'
  questionLocations.style.display = ''
  generateQuestions()
}

function generateQuestions() {
  if (questionIndex === questionsEl.length) {
    endQuiz()
  } else {
    let currentQuestion = questionsEl[questionIndex]

    questionTitles.textContent = currentQuestion.title

    buttonLocations.innerHTML = ''
    rightWrong.textContent = ''
    currentQuestion.answers.forEach(function (choice) {
      let newButton = document.createElement('button')
      newButton.setAttribute('class', 'new-button')
      newButton.textContent = `${choice}`
      newButton.setAttribute('value', choice)
      newButton.onclick = validateAnswer
      // append each button to buttons element
      buttonLocations.appendChild(newButton)
    })
  }
}

function validateAnswer() {
  let userChoice = this.value
  let correctAnswer = questionsEl[questionIndex].correctAnswer

  if (userChoice === correctAnswer) {
    rightWrong.textContent = 'Right!'
  } else {
    rightWrong.textContent = 'Wrong!'
    secondsLeft -= 10
  }

  questionIndex++
  generateQuestions()
}

function endQuiz() {
  questionLocations.style.display = 'none'
  gameOver.style.display = ''
  finalScore.textContent = secondsLeft
}

buttonEl.addEventListener('click', function () {
  let timerInterval = setInterval(function () {
    secondsLeft--
    timeEl.textContent = 'Time left:' + secondsLeft

    if (secondsLeft === 0 || questionIndex === questionsEl.length) {
      clearInterval(timerInterval)
      endQuiz()
    }
  }, 1000)
  startGame()
})

submitBtn.addEventListener('click', function () {
  if (localStorage.key(0) == 'Scores') {
    console.log('if')
    let userArr = JSON.parse(localStorage.getItem('Scores'))

    let userInfo = {}

    userInfo.score = secondsLeft
    userInfo.initials = userName.value
    userArr.push(userInfo)

    localStorage.setItem('Scores', JSON.stringify(userArr))
  } else {
    console.log('else')
    let userArr = []

    let userInfo = {}

    userInfo.score = secondsLeft
    userInfo.initials = userName.value
    userArr.push(userInfo)

    localStorage.setItem('Scores', JSON.stringify(userArr))
  }
})
