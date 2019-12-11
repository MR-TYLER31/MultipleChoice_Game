var startBtn = $('#start-btn');
var questionBoxEl = $('#question-box');
var questionEl = $('#question');
var answerBtn = $('#answer-buttons')
var nextBtn = $('#next-btn')
var questionIndex = 0;
var scrore = 0;
var container = $('.container')
var currentQuestion = questionsArray[questionIndex];






$(document).ready(function() {

    
    startBtn.on('click', startQuiz);
    answerBtn.on('click', selectAnswer);
   
    function startQuiz() {
            startBtn.addClass('hide');
            questionIndex = 0;
            currentQ = questionsArray[questionIndex];
            questionBoxEl.removeClass('hide');
            setNextQuestion(currentQuestion);
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
    })
  }

  function setNextQuestion() {
    // resetState();
    showQuestion(currentQuestion);

  }

  function selectAnswer(e) {
    if (e.target.innerHTML === currentQuestion.answer) {
      $(".container").css("background-color", "#28a745")
      nextBtn.removeClass('hide');
    } else {
      $(".container").css("background-color", "#dc3545");
      nextBtn.removeClass('hide');
    }
};

});




















