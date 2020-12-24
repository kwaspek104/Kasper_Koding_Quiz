$('document').ready(function () {
  let clearBtn = document.querySelector('.clear')
  //   let userScores = document.querySelector('#user-scores')

  clearBtn.addEventListener('click', function () {
    localStorage.clear()
    document.getElementById('user-scores').innerHTML = ''
  })

  const highScorers = JSON.parse(localStorage.getItem('Scores'))
  console.log(highScorers[0].score)

  for (i = 0; i < highScorers.length; i++) {
    $('#user-scores').append('<h2>' + highScorers[i].score + '</h2>')
    $('#user-scores').append('<p>' + highScorers[i].initials + '</p>')
  }
})
