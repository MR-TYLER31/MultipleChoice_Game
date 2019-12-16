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
var submitBtn = $('#submit-button');
var userScore = $('#user-score');
var userName = $('#user-name')
var runningTimer;
var currentQuestion;
var usersArr = [];
var clearUsers = $('#clear-users')
var newItem = $('<li>');

console.log(JSON.parse(localStorage.getItem('users')));


$(document).ready(function() {
  var loadUsers = JSON.parse(localStorage.getItem('users'));
  console.log(loadUsers)
  newItem.text(`${loadUsers.username} : ${loadUsers.userscore} points`);
  userList.append(newItem);
    
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

    
   // Starts the quiz for user
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

// Select the question choices, correct will be gree, wrong will be red background
  function selectAnswer(e) {
  
    
    if (e.target.innerHTML === (currentQuestion.answer)) {
      $(".card").css("background-color", "#28a745")
      score += 10;

    } else if ($(e.target).text() !== currentQuestion.answer && $(e.target).hasClass('btn')) {
      $(".card").css("background-color", "#dc3545")
    
    } 
    // console.log(score)
};

// Game over function will display the header and user name form to submit to high scores
  function gameOver() { 
    questionEl.empty();
    $(".card").css("background-color", "#ffffff")  
    answerBtn.empty();
    clearInterval(runningTimer);
    userScore.removeClass('hide')
    userScore.text(`Score: ${score} points`)
      nextBtn.addClass('hide')
      gameOverH1.removeClass('hide')
      userForm.removeClass('hide')
      userName.removeClass('hide')
      userName.val("")
      
    }




// Submit user and score 
function submitUser (e) {
  e.preventDefault()
  userName = $('#user-name')
  console.log(userName.val())
  clearInterval(runningTimer);
  var newItem = $('<li>');
  newItem.text(`${loadUsers.username} : ${loadUsers.userscore} points`);
  userList.append(newItem);
  usersArr.push(newItem)  
  userForm.addClass('hide');
  gameOverH1.addClass('hide');
  userScore.addClass('hide')
  startBtn.removeClass('hide');
  userName.addClass('hide')
  var info = {
    username: userName.val(),
    userscore: score
  }
  console.log(info)
 

  storeTaskInLocalStorage(info);
  resetQuiz()
 
};

// Store Users
function storeTaskInLocalStorage(task) {
  let usersArr;
  if(localStorage.getItem('users') === null){
    usersArr= [];
  } else {
    usersArr = JSON.parse(localStorage.getItem('users'));
  }

  usersArr.push(task);
  console.log(usersArr)

  localStorage.setItem('users', JSON.stringify(task));

  
}

// reset so user can retake the quiz
function resetQuiz() {
  var seconds = $("#countdown").text(30);
  questionBoxEl.addClass('hide');
  
}

// Clear users and scores
function clearScores () {
  userList.empty();
  usersArr = [];
  console.log(usersArr)

}


});
