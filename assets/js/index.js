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
var submitBtn = $('#submit-button');
var userScore = $('#user-score');
var runningTimer;



$(document).ready(function() {

    
    startBtn.on('click', startQuiz);
    answerBtn.on('click', selectAnswer);
    nextBtn.on('click', showQuestion);

function startClock(){
   // Once the start  button is clicked the quiz and time will start
   var seconds = document.getElementById("countdown").textContent;
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
 
            // console.log(currentQuestion)   
    }



  
  // show question function
  function showQuestion() {
    answerBtn.empty();
    $(".card").css("background-color", "#ffffff")  
    var currentQuestion = questionsArray[questionIndex];
    if(questionIndex >= questionsArray.length) {
      gameOver()
}
   
    questionEl.text(currentQuestion.title);
    $.each(currentQuestion.choices, function (index, choice) {
        var newBtn = $('<button>');
        newBtn.text(choice);
        newBtn.addClass('btn btn-warning');
        answerBtn.append(newBtn); 
    })
    
    questionIndex++
    nextBtn.removeClass('hide')
 
  }


  function selectAnswer(e) {
    // console.log(e.target.innerHTML)
    // console.log(currentQuestion)
    if (e.target.innerHTML === currentQuestion.answer) {
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
runningTimer = ""
  nextBtn.addClass('hide')
  gameOverH1.removeClass('hide')
  userForm.removeClass('hide')

}

});




















