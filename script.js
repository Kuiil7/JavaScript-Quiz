$(document).ready(function(){


  //a container that hold the quizzes
  var quizContainer = document.getElementById("quiz");
  //a container to push results to the results element in html
  var resultsContainer = document.getElementById("results");
  
  //the submit button responds to the submit element in html
  var submitButton = document.getElementById("submit");

  submitButton.onclick= function(e){
    var initials = prompt("Enter Initials");
    var initialsElement = document.getElementById("initials");
    initialsElement.innerText = initials;    
    e.preventDefault();  
   }
 
  
  

//Starting on a page displaying start button a
$('#start-button').click(function(e){
 
  e.preventDefault();  


//connecting the timer element id to be displayed onclick
      display = document.querySelector('#TimeShow');
//timer to be triggered upon click and display in a total of 150 seconds  
      startTimer(fifteenSeconds, display);
      
      
//starting the main content function by selecting its elements       
          startMain();
          var startQuiz = document.getElementById("start-main");
          var startButton = document.getElementById("#start-button");
         
          
         
//function to hide the start page upon click and to show the timer countdown  
function startMain () {
$('.first-main').hide();
$('.time-box').show();

// adding the quiz function to load onclik 
  buildQuiz();
  
  var previousButton = document.getElementById("previous");
  var nextButton = document.getElementById("next");
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;
 
  //starting slide function at value 0 
  showSlide(0);
  
  // adding event listeners to buttons
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  
//start building quiz
  function buildQuiz() {
  
  // a place to store the HTML output
    var output = [];

      // for each question using currentQuestion and questionNumber for current value and
    questions.forEach((currentQuestion, questionNumber) => {
    
      // we'll want to store the list of answer choices
        var choices = [];
      
      // and for each available answer...
         for (letter in currentQuestion.choices) {
            
      // HTML radio button
            choices.push(
              `<label>
              <input type="radio" name="question${letter}" value="${letter}">
              
                  ${currentQuestion.choices[letter]}
               </label>`       
            );
          };
      
  
  // add questions and its choices to the output in slides
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question}</div>
           <div class="choices"> ${choices.join("")} </div>
         </div>`
      );
    });
  
  // finally combine our output list list of question and put in to one string in html
    quizContainer.innerHTML = output.join("");
      }


//testing counting score #################
       // We start the game with a score of 0.
    var score = 0;

    // Loop over every question object
    for (var i = 0; i < currentQuestion.length; i++) {
      // Display current question to user and ask OK/Cancel
      var selector = `input[name=question${questionNumber}]:checked`;
      var answer = (answerContainer.querySelector(selector) || {}).value;

      // Compare answers
      if ((userAnswer===currentQuestion.answer === true && currentQuestion[i].selector === "t") ||
        (answer === false && questions[i].a === "f")) {
        // Increase score
        score++;
        alert("Correct!");
      }

  //testing counting score #################

/*
  //function to display results
  function showResults() {
    
  // getting all answer containers listed in quiz
  var answerContainers = quizContainer.querySelectorAll('.choices');
  
  // tracking of user's choices answered correctly with a variable starting at 0
    var  numCorrect = 0;
  
  // using the forEach function to go through each question
    questions.forEach((currentQuestion, questionNumber) => {
    
     
  // to find selected answer, we need to set up an answer container 
     var  answerContainer = answerContainers[questionNumber];
  
  // new variable that checks and captures user input of selected answer 
  var selector = `input[name=question${questionNumber}]:checked`;
  
  // a variable that stores user answer and stores it's value 
   var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
  // if answer is correct, increment increase out of 10
      if (userAnswer===currentQuestion.answer) {
       numCorrect++;
      } 
    
    });
  
  // show number of correct answers out of total by going through the questions length method
    resultsContainer.innerHTML = `Score: ${numCorrect} out of ${questions.length}`;
    
  }
  */
  

  
  //adding slide individual slide functionanlity
  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
  
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
  
  //prompting for initials at end of slide but having issues where it appears at 9th slide instead of 10th
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
  
    }
    
   
    else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
  
      
    }
  }
  

  
  //adding am onclick function to display a prompt upon clicking the submit button at the end of question that asks for user initials and displays total score
 
  
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
    
  };
  
}
});
  
  var fifteenSeconds = 150;
  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
   var stopTimer = setInterval(function () {
        minutes = parseInt(timer / 60 );
        seconds = parseInt(timer % 60 );
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        display.textContent = minutes + " : " + seconds; 
        

      
        if (--timer < 0) {
            timer = duration;
        }
        fifteenSeconds--;
        if (fifteenSeconds === 0) {
         clearInterval(stoptimer);
      }
    }, 1000);
  }

  

  });
  
  
  
  
  
  //storing to local storage
  localStorage.setItem("initials", JSON.stringify(initials));
  localStorage.setItem('results', JSON.stringify(results));
  