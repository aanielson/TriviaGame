//create variables for correct answers, incorrect answers 
var correct = 0;
var incorrect = 0;
var answered = 0;
var unaswered = 0;

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
    });
    //run timer after displayCorrect() inside of displayQuestion() runs out
    //re-run NEW display question and add to answered variable

});

//display a random question + possible answers
function displayQuestion() {
    var randomQues = questions[Math.floor(Math.random() * questions.length)];
    var quesDiv = $("<div>").attr("id", "quesDiv");
    $(quesDiv).html(randomQues.question);
    $('.container').html(quesDiv);
    
    var possibleAnsDiv = $("<div>").attr("id", "possibleAnsDiv");
    var trueButton = $("<button>").attr({"val":true, "id":"true"});
    $(trueButton).text(randomQues.possibleAns[0]);
    var falseButton = $("<button>").attr({"val":false, "id":"false"});
    $(falseButton).text(randomQues.possibleAns[1]);
    $(possibleAnsDiv).html(trueButton);
    $(possibleAnsDiv).append(falseButton);
    $('.container').append(possibleAnsDiv); 

    //check to see if correct answer has been selected
        //compare value of button to randomQues.correctAnswer
    $(document).on("click", "#true", function() {
        if (randomQues.correctAnswer === this.val) {
            whenCorrect()
        } else {
            whenWrong();
        };
    });
    $(document).on("click", "#false", function() {
        if (randomQues.correctAnswer === this.val) {
            whenCorrect();
        } else {
            whenWrong();
        };
    });
    //prepend the .container class to display the time remaining
    //time remaining should always begin at 30 seconds
    //if the timer runs out, run the displayfailure() function


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
        $('.container').append(correctAnsDiv);
    }

    //when the user fails to select an answer before the timer runs out
    function displayfailure() {
        //clear container class html
        //display "Time's up!"
        $(".container").html("<h2>TIME'S UP!<h2>");
        //display correct answer
        displayCorrect();
        //increase incorrect
        unaswered++;
        answered++;
    }///end 
};////////////end of displayQuestion function

//need a 30 second timer that will run with each displayQuestion()
function thirtySeconds() {

}

//need a 10 second timer that will run AFTER each displayQuestion()
function tenSeconds() {

}

//need an endGame screen that shows total correct, incorrect, and unaswered
function endGame () {
    if (answered === 8) {
        ///rewrite .container html with "Here's how you did"
        //append .container with correct
        //append .container with incorrect
        //append .container with unanswered
        //append .container with startOver button

    }
}