var startBtn = $('#start-btn');
var questionBoxEl = $('#question-box');
var questionEl = $('#question');
var answerEl = $('#button-group')
let currentQuestion;


var questions = [
    {
      title: 'What is the capitol of Utah?',
    }
  ]



$(document).ready(function() {

    
    startBtn.on('click', startQuiz);
   
    function startQuiz() {
            startBtn.addClass('hide');
            currentQuestion = 0;
            questionBoxEl.removeClass('hide');
            setNextQuestion();
    }


function setNextQuestion() {
    showQuestion(currentQuestion);

    
  }
  
  function showQuestion() {
      var question = questions
    questionBoxEl.prepend(`<div id="question">
    <h3>${questions[0].title}</h3> </div>`)
  }
});




















