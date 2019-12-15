var startBtn = $('#start-btn');
// var restartBtn = $('#restart-btn')
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
var currentQuestion;
let usersArr = []
var clearUsers = $('#clear-users');


$(document).ready(function() {

    
    startBtn.on('click', startQuiz);
    answerBtn.on('click', selectAnswer);
    nextBtn.on('click', showQuestion);
    submitBtn.on('click', submitUser);
    clearUsers.on('click', clearScores)
    // restartBtn.on('click', restartQuiz)

function startClock(){
   // Once the start  button is clicked the quiz and time will start
   var seconds = $("#countdown").text();
       seconds--;
       $("#countdown").text(seconds);
       if (seconds <= 0) {
        clearTimeout(seconds);
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
    currentQuestion = questionsArray[questionIndex];
    questionIndex++
      if( questionIndex <= questionsArray.length ) {
        
        answerBtn.empty();
        $(".card").css("background-color", "#ffffff")  
        questionEl.text(currentQuestion.title);
    
        $.each(currentQuestion.choices, function (index, choice) {
            var newBtn = $('<button>');
            newBtn.text(choice);
            newBtn.addClass('btn btn-warning');
            answerBtn.append(newBtn); 
           
        })
        nextBtn.removeClass('hide')
    } else {
      gameOver()
    }
    
  }


  function selectAnswer(e) {
    console.log(e.target);
    
    if (e.target.innerHTML === (currentQuestion.answer)) {
      $(".card").css("background-color", "#28a745")
      score += 10;

    } else if ($(e.target).text() !== currentQuestion.answer && $(e.target).hasClass('btn')) {
      $(".card").css("background-color", "#dc3545")
    
    } 
    console.log(score)
};

// Game over function will display the header and user name form to submit to high scores
  function gameOver() {
    
    questionEl.empty();
    $(".card").css("background-color", "#ffffff")  
    answerBtn.empty();
    // clearInterval(runningTimer)
    clearInterval(runningTimer);
    userScore.removeClass('hide')
    userScore.text(`Score: ${score} points`)
      nextBtn.addClass('hide')
      gameOverH1.removeClass('hide')
      userForm.removeClass('hide')
      userName.removeClass('hide')
      userName.val("")
      
    }

function submitUser (e) {
  e.preventDefault()
  clearInterval(runningTimer);
  var newItem = $('<li>');
  newItem.text(`${userName.val()} : ${score} points`);
  userList.append(newItem);
  usersArr.push(newItem)  
  userForm.addClass('hide')
  gameOverH1.addClass('hide');
  userScore.addClass('hide')
  startBtn.removeClass('hide');
  userName.addClass('hide')

  localStorage.setItem(usersArr);
  



 
  resetQuiz()
 
};


function resetQuiz() {
  var seconds = $("#countdown").text(30);
  questionBoxEl.addClass('hide');
  
}

function clearScores () {
  userList.empty();
  usersArr = [];
  // localStorage.setItem('usersArr', '[]');
  console.log(usersArr)

}


});


