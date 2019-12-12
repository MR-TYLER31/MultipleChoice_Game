var startBtn = $('#start-btn');
var questionBoxEl = $('#question-box');
var questionEl = $('#question');
var answerBtn = $('#answer-buttons');
var nextBtn = $('#next-btn');
var questionIndex = 0;
var scrore = 0;
var card = $('.card');
var seconds = $('#countdown');
var currentQuestion = questionsArray[questionIndex];


$(document).ready(function() {

    
    startBtn.on('click', startQuiz);
    answerBtn.on('click', selectAnswer);
    nextBtn.on('click', setNextQuestion)
   
    function startQuiz() {
      // Once the start  button is clicked the quiz and time will start
      var seconds = document.getElementById("countdown").textContent;
      var countdown = setInterval(function() {
          seconds--;
          document.getElementById("countdown").textContent = seconds;
          if (seconds <= 0) clearInterval(countdown);
      }, 1000);

            startBtn.addClass('hide');
            questionIndex = 0;
            currentQuestion = questionsArray[questionIndex];
            questionBoxEl.removeClass('hide');
            showQuestion(currentQuestion);
 
            console.log(currentQuestion)   
    }



  
  // show question function
  function showQuestion() {
    answerBtn.empty();

    questionEl.text(currentQuestion.title);
    $.each(currentQuestion.choices, function (index, choice) {
        var newBtn = $('<button>');
        newBtn.text(choice);
        newBtn.addClass('btn btn-warning');
        answerBtn.append(newBtn);
        questionIndex++
    })

    nextBtn.removeClass('hide')
  }
  
  function setNextQuestion() {   

    showQuestion(currentQuestion);
 
      currentQuestion = questionsArray[questionIndex];  
   
  }

  function selectAnswer(e) {
    console.log(e.target.innerHTML)
    console.log(currentQuestion)
    if (e.target.innerHTML === currentQuestion.answer) {
      $(".card").css("background-color", "#28a745")
    } else if ($(e.target).text() !== currentQuestion.answer && $(e.target).hasClass('btn')) {
      $(".card").css("background-color", "#dc3545")

    
    } 
};



});




















