var startBtn = $('#start-btn');
var questionBoxEl = $('#question-box');
var questionEl = $('#question');
var answerBtn = $('#answer-buttons')
var nextBtn = $('#next-btn')
var questionIndex = 0;
var currentQuestion = questionsArray[questionIndex];






$(document).ready(function() {

    
    startBtn.on('click', startQuiz);
   
    function startQuiz() {
            startBtn.addClass('hide');
            questionIndex = 0;
            currentQ = questionsArray[questionIndex];
            questionBoxEl.removeClass('hide');
            setNextQuestion(currentQuestion);
    }


function setNextQuestion() {
    resetState();
    showQuestion(currentQuestion);

  }
  
  // show question function
  function showQuestion(question) {
    answerBtn.empty();
 
    questionEl.text(question.title);
    //create answer buttons for each item in answers choice array
    $.each(question.choices, function (index, choice) {
        //create button, set text, add button class, and append to end for each choice
        var newBtn = $('<button>');
        newBtn.text(choice);
        newBtn.addClass('btn btn-warning');
        answerBtn.append(newBtn);
    })
  }

  function resetState() {
    
  }

  function selectAnswer(event) {

  }
});




















