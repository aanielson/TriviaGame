//create variables for correct answers, incorrect answers 
var correct = 0;
var incorrect = 0;
var answered = 0;
var unanswered = 0;
//variable to be updated so that a new question will appear and reset the timers
var questionDone;
var autoReset = setTimeout(displayQuestion, 5000);

//create array of objects for questions;
var questions = [
    {
        question: "Bulbasaur is the only dual-type starter. ",
        correctAnswer: true,
        possibleAns: ["TRUE ", "FALSE "]
    },
    {
        question: "There are 18 Pokémon types. ",
        correctAnswer: true,
        possibleAns: ["TRUE ", "FALSE "]
    },
    {
        question: "There are more than 20 Pokémon games. ",
        correctAnswer: true,
        possibleAns: ["TRUE ", "FALSE "]
    },
    {
        question: "Pokémon is the largest IP in the world. ",
        correctAnswer: true,
        possibleAns: ["TRUE ", "FALSE "]
    },
    {
        question: "Eevee has the most evolutions, with 8. ",
        correctAnswer: true,
        possibleAns: ["TRUE ", "FALSE "]
    },
    {
        question: "The most common type is normal. ",
        correctAnswer: true,
        possibleAns: ["TRUE ", "FALSE "]
    },
    {
        question: "Steel has the most resistances, with 10. ",
        correctAnswer: true,
        possibleAns: ["TRUE ", "FALSE "]
    },
    {
        question: "Normal and Ice have the fewest resistances, with 1 apiece. ",
        correctAnswer: true,
        possibleAns: ["TRUE ", "FALSE "]
    },
];



//display "start" button at the beginning
//when "start" is pressed, change the display to show a random question + possible answers
//run timer + display timer
$(document).ready(function () {
    var strtBtn = $("<button>").attr("id", "startButton");
    strtBtn.text("Start");
    $(".container").html(strtBtn);

    $(document).on("click", "#startButton", function(){
        displayQuestion();
        //run timer after displayCorrect() inside of displayQuestion() runs out
        
        //re-run NEW display question and add to answered variable
    });
    newQuestion();
    endGame();

});



//display a random question + possible answers
function displayQuestion() {
    clearTimeout(autoReset);
    questionDone = false;
    console.log(questionDone);
    //make the inner html the .container class to display the time remaining
    var timeleft = 10;
    var clockDiv = $("<div>").attr("id", "clockDiv");
    $(clockDiv).html(timeleft);
    $(".container").html(clockDiv);

    var timer = setInterval(function() {
        timeleft--;
        $("#clockDiv").html(timeleft);
        if (timeleft === 0) {
            clearInterval(timer);
            displayFailure();
        }
    }, 1000);
    
    var randomQues = questions[Math.floor(Math.random() * questions.length)];
    var quesDiv = $("<div>").attr("id", "quesDiv");
    $(quesDiv).html(randomQues.question);
    $('.container').append(quesDiv);
    
    var possibleAnsDiv = $("<div>").attr("id", "possibleAnsDiv");
    var trueButton = $("<button>").attr({"val":true, "id":"true"});
    $(trueButton).text(randomQues.possibleAns[0]);
    var falseButton = $("<button>").attr({"val":false, "id":"false"});
    $(falseButton).text(randomQues.possibleAns[1]);
    $(possibleAnsDiv).html(trueButton);
    $(possibleAnsDiv).append(falseButton);
    $('.container').append(possibleAnsDiv); 
    
    
    
    //time remaining should always begin at 30 seconds
    //if the timer runs out, run the displayfailure() function
    
    //check to see if correct answer has been selected
        //compare value of button to randomQues.correctAnswer
    $(document).on("click", "#true", function() {
        if ((randomQues.correctAnswer) === true) {
            whenCorrect()
        } else {
            whenWrong();
        };
        console.log("correct: " + correct);
        console.log("incorrect: " + incorrect);
        console.log("unanswered: " + unanswered);
        console.log("answered: " + answered);
    });
    $(document).on("click", "#false", function() {
        if (randomQues.correctAnswer === false) {
            whenCorrect();
        } else {
            whenWrong();
        };
        console.log("correct: " + correct);
        console.log("incorrect: " + incorrect);
        console.log("unanswered: " + unanswered);
        console.log("answered: " + answered);
    });
    
    

    //when the user selects an answer before the timer runs out
    function whenCorrect() {
        //clear container class html
        //display "CORRECT!"
        $(".container").html("<h2>CORRECT!<h2>");
        //display correct answer
        displayCorrect();
        //increase score
        correct++;
        answered++;
    }
    function whenWrong() {
        //clear container class html
        //display "WRONG!"
        $(".container").html("<h2>WRONG!<h2>");
        //display correct answer
        displayCorrect();
        //increase incorrect
        incorrect++;
        answered++;
    }
    function displayCorrect() {
        var correctAnsDiv = $("<div>").attr("id", "correctAnsDiv");
        $(correctAnsDiv).html(randomQues.correctAnswer);
        $('.container').append("Correct answer: ");
        $('.container').append(correctAnsDiv);
        questionDone = true;
        console.log(questionDone);
    }

    //when the user fails to select an answer before the timer runs out
    function displayFailure() {
        //clear container class html
        //display "Time's up!"
        $(".container").html("<h2>TIME'S UP!<h2>");
        //display correct answer
        displayCorrect();
        //increase incorrect
        unanswered++;
        answered++;
        console.log("correct: " + correct);
        console.log("incorrect: " + incorrect);
        console.log("unanswered: " + unanswered);
        console.log("answered: " + answered);
    }///end 
};////////////end of displayQuestion function

//need a 10 second timer that will run AFTER each displayQuestion()
function newQuestion() {
    if (questionDone === true) {
        setTimeout(displayQuestion, 10000)
    };
}

//need an endGame screen that shows total correct, incorrect, and unaswered
function endGame () {
    if (answered === 8) {
        ///rewrite .container html with "Here's how you did"
        $(".container").html("<h2>All done, here's how you did!</h2>");
        //append .container with correct
        $(".container").text("Correct Answers: " + correct);
        //append .container with incorrect
        $(".container").text("Incorrect Answers: " + incorrect);
        //append .container with unanswered
        $(".container").text("Unanswered: " + unanswered);
        //append .container with startOver button
        var resetBtn = $("<button>").attr("id", "resetButton");
        resetBtn.text("Start Over?");
        $(".container").append(resetBtn);
        $(document).on("click", "#resetButton", function(){
            reset();
        });
    }
}

///function to reset game display
function reset() {
    ///set all variables to 0
    correct = 0;
    incorrect = 0;
    answered = 0;
    unaswered = 0;
    displayQuestion();
    //repeat other timer code that went inside of the original $(document).on("click", "#startButton", function()
}