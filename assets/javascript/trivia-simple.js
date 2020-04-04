//create variables for correct answers, incorrect answers 
var correct = 0;
var incorrect = 0;
var unanswered = 8;

//create array of objects for questions;
var questions = [
    {
        question: "Bulbasaur is the only dual-type starter. ",
        correctAnswer: "TRUE",
        possibleAns: ["TRUE", "FALSE"]
    },
    {
        question: "There are 18 Pokémon types. ",
        correctAnswer: "TRUE",
        possibleAns: ["TRUE", "FALSE"]
    },
    {
        question: "There are more than 20 Pokémon games. ",
        correctAnswer: "TRUE",
        possibleAns: ["TRUE", "FALSE"]
    },
    {
        question: "Pokémon is the largest IP in the world. ",
        correctAnswer: "TRUE",
        possibleAns: ["TRUE", "FALSE"]
    },
    {
        question: "Eevee has the most evolutions, with 8. ",
        correctAnswer: "TRUE",
        possibleAns: ["TRUE ", "FALSE "]
    },
    {
        question: "The most common type is normal. ",
        correctAnswer: "TRUE",
        possibleAns: ["TRUE", "FALSE"]
    },
    {
        question: "Steel has the most resistances, with 10. ",
        correctAnswer: "TRUE",
        possibleAns: ["TRUE", "FALSE"]
    },
    {
        question: "Normal and Ice have the fewest resistances, with 1 apiece. ",
        correctAnswer: "TRUE",
        possibleAns: ["TRUE ", "FALSE"]
    },
];



//display "start" button at the beginning
//when "start" is pressed, change the display to show a random question + possible answers
//run timer + display timer
$(document).ready(function () {
    var strtBtn = $("<button>").attr("id", "startButton");
    strtBtn.text("Start");
    $(".container").html(strtBtn);

    $(document).on("click", "#startButton", function () {
        displayQuestion();
    });
});



//display all questions + possible answers
function displayQuestion() {
    //make the inner html the .container class to display the time remaining
    var timeleft = 30;
    var clockDiv = $("<div>").attr("id", "clockDiv");
    $(clockDiv).html(timeleft);
    $(".container").html(clockDiv);

    var timer = setInterval(function () {
        timeleft--;
        $("#clockDiv").html(timeleft);
        if (timeleft === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);

    for (i = 0; i < questions.length; i++) {
        var quesDiv = $("<div>").attr("id", "quesDiv");
        $(quesDiv).html(questions[i].question);
        console.log(questions[i]);
        $('.container').append(quesDiv);
        // TODO: display questions
        var possibleAnsDiv = $("<div>").attr("id", "possibleAnsDiv");
        var trueButton = $("<button>").attr("id", i).attr("value", "true");
        $(trueButton).text(questions[i].possibleAns[0]);
        var falseButton = $("<button>").attr("id", i).attr("value", "false");
        $(falseButton).text(questions[i].possibleAns[1]);
        $(possibleAnsDiv).html(trueButton);
        $(possibleAnsDiv).append(falseButton);
        $('.container').append(possibleAnsDiv);
    }

    /**
     * checks the answer against the question
     * won't evaluate if already clicked
     */
    function evaluateAnswer(index, value) {
        if (!questions[index].status) {
            unanswered--;
        }
        if (questions[index].correctAnswer === value.toUpperCase()) {
            if (questions[index].status != "correct") {
                if (questions[index].status == "incorrect") {
                    incorrect--;
                }
                questions[index].status = "correct";
                correct++;
            }
        } else {
            if (questions[index].status != "incorrect") {
                if (questions[index].status == "correct") {
                    correct--;
                }
                questions[index].status = "incorrect";
                incorrect++;

            }
        };
        console.log("correct: " + correct);
        console.log("incorrect: " + incorrect);
        console.log("unanswered: " + unanswered);
    }
    //check to see if correct answer has been selected
    //compare value of button to randomQues.correctAnswer
    // for (i=0; i<questions.length; i++) {
    $(document).on("click", "[value='true']", function () {
        console.log(this);
        console.log(this.value);
        console.log(this.id);
        evaluateAnswer(this.id, this.value);
    });
    $(document).on("click", "[value='false']", function () {
        evaluateAnswer(this.id, this.value)
    });
    
    // 
};////////////end of displayQuestion function

//need an endGame screen that shows total correct, incorrect, and unaswered
function endGame() {
    ///rewrite .container html with "Here's how you did"
    $(".container").html("<h2>All done, here's how you did!</h2>");
    //append .container with correct
    $(".container").append("Correct Answers: " + correct + "<br>");
    //append .container with incorrect
    $(".container").append("Incorrect Answers: " + incorrect + "<br>");
    //append .container with unanswered
    $(".container").append("Unanswered: " + unanswered + "<br>");
    //append .container with startOver button
    var resetBtn = $("<button>").attr("id", "resetButton");
    resetBtn.text("Start Over?");
    $(".container").append(resetBtn);
    $(document).on("click", "#resetButton", function () {
        reset();
    });
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