var startBtn = $('#start-btn');
var questionBoxEl = $('#question-box');
var questionEl = $('#question');
var answerBtn = $('#answer-buttons');
var nextBtn = $('#next-btn');
var questionIndex = 0;
var score = 0;
var card = $('.card');
var seconds = $('#countdown');
var gameOverDiv = $('#game-over')
var gameOverH1 = $('#game-over-header');
var userForm = $('#user-form')
var userList = $('#user-list')
var userName = $('#user-name');
var submitBtn = $('#submit-button');
var userScore = $('#user-score');
var runningTimer;



$(document).ready(function() {

    
    startBtn.on('click', startQuiz);
    answerBtn.on('click', selectAnswer);
    nextBtn.on('click', showQuestion);
    submitBtn.on('click', submitUser);

function startClock(){
   // Once the start  button is clicked the quiz and time will start
   var seconds = $("#countdown").text();
       seconds--;
       document.getElementById("countdown").textContent = seconds;
       if (seconds <= 0) {
         gameOver();
       } else {
        runningTimer = setTimeout(startClock, 1000);
       }
      }

      
 
   
    function startQuiz() {
      startClock();
            startBtn.addClass('hide');
            questionIndex = 0;
            currentQuestion = questionsArray[questionIndex];
            questionBoxEl.removeClass('hide');
            showQuestion(currentQuestion);
    }



  
  // show question function
  function showQuestion() {
    answerBtn.empty();
    $(".card").css("background-color", "#ffffff")  
    var currentQuestion = questionsArray[questionIndex];
    
    questionIndex++
    questionEl.text(currentQuestion.title);
    $.each(currentQuestion.choices, function (index, choice) {
        var newBtn = $('<button>');
        newBtn.text(choice);
        newBtn.addClass('btn btn-warning');
        answerBtn.append(newBtn); 
    })
    nextBtn.removeClass('hide')
    
    
      if(currentQuestion >= questionsArray.length) {
        
        gameOver()
    }
 
  }


  function selectAnswer(e) {
    
    if ($(e.target).text() === currentQuestion.answer) {
      $(".card").css("background-color", "#28a745")
      score += 10;

    } else if ($(e.target).text() !== currentQuestion.answer && $(e.target).hasClass('btn')) {
      $(".card").css("background-color", "#dc3545")
      score -= 10
    
    } 
    console.log(score)
};

// Game over function will display the header and user name form to submit to high scores
  function gameOver() {
    
    questionEl.empty();
    answerBtn.empty();
    runningTimer = clearInterval(runningTimer)
    finalScore = 0;
    console.log(finalScore)
    console.log(seconds)
    // console.log(finalScore)
      nextBtn.addClass('hide')
      gameOverH1.removeClass('hide')
      userForm.removeClass('hide')

    }
  
    // Get the user name input and store it in the modal for local storage
function submitUser(e) {
  var user = $('<h1>');
  user.addClass('list-item');
  user.text(`${userName.val()} - ${score}`)
  userList.append(user);
 
  e.preventDefault()
}
});



