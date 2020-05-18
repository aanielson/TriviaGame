//create variables for correct answers, incorrect answers 
// var correct = 0;
// var incorrect = 0;
// var unanswered = 8;

var card = $("#quiz-area");

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

//variable to hole the setInterval
var timer;
//game variables
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    //function to decrease counter
    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.endGame();
        }
    },

    //function to begin game and display questions
    start: function() {
        timer = setInterval(game.countdown, 1000);
        //display the counter
        $("#sub-wrapper").prepend(
            "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
        );
        //remove the start button
        $("#startButton").remove();
        //display all questions and their answers
        for (var i = 0; i < questions.length; i++) {
            card.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].possibleAns.length; j++) {
              card.append("<input type='radio' name='question-" + i +
                "' value='" + questions[i].possibleAns[j] + "''>" + questions[i].possibleAns[j]);
            }
        }
        //display the done button that will auto end the game
        card.append("<button id='done'>Done</button>");
    },

    //adjust score
    done: function() {
        //display checkboxes and store user selection
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
          if ($(inputs[i]).val() === questions[i].correctAnswer) {
            game.correct++;
          } else {
            game.incorrect++;
          }
        }
        this.result();
    },

    result: function() {
        //reset timer
        clearInterval(timer);
        //remove the subwrapper display
        $("#sub-wrapper h2").remove();
        //Display end scores
        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    }
};

// CLICK EVENTS
$(document).on("click", "#startButton", function () {
    game.start();
});
$(document).on("click", "#done", function() {
    game.done();
});




// //display all questions + possible answers
// function displayQuestion() {
//     //make the inner html the .quiz-area class to display the time remaining
//     var timeleft = 30;
//     var clockDiv = $("<div>").attr("id", "clockDiv");
//     var clockDisplay = $("<span>").attr("id", "clockDisplay");
//     $(clockDiv).append(timeleft);
//     $(".quiz-area").html(clockDiv);

//     var timer = setInterval(function () {
//         timeleft--;
//         $("#clockDiv").html(timeleft);
//         if (timeleft === 0) {
//             clearInterval(timer);
//             endGame();
//         }
//     }, 1000);

//     for (i = 0; i < questions.length; i++) {
//         var quesDiv = $("<div>").attr("id", "quesDiv");
//         $(quesDiv).html(questions[i].question);
//         console.log(questions[i]);
//         $('.quiz-area').append(quesDiv);
        
//         // TODO: display questions
//         var possibleAnsDiv = $("<div>").attr("id", "possibleAnsDiv");
//         var trueButton = $("<button>").attr("id", i).attr("value", "true");
//         $(trueButton).text(questions[i].possibleAns[0]);
//         var falseButton = $("<button>").attr("id", i).attr("value", "false");
//         $(falseButton).text(questions[i].possibleAns[1]);
//         $(possibleAnsDiv).html(trueButton);
//         $(possibleAnsDiv).append(falseButton);
//         $('.quiz-area').append(possibleAnsDiv);
//     }
//     $('.quiz-area').append("<button id='done'>Done</button>");
//     /**
//      * checks the answer against the question
//      * won't evaluate if already clicked
//      */
//     function evaluateAnswer(index, value) {
//         if (!questions[index].status) {
//             unanswered--;
//         }
//         if (questions[index].correctAnswer === value.toUpperCase()) {
//             if (questions[index].status != "correct") {
//                 if (questions[index].status == "incorrect") {
//                     incorrect--;
//                 }
//                 questions[index].status = "correct";
//                 correct++;
//             }
//         } else {
//             if (questions[index].status != "incorrect") {
//                 if (questions[index].status == "correct") {
//                     correct--;
//                 }
//                 questions[index].status = "incorrect";
//                 incorrect++;
//             }
//         };
//         console.log("correct: " + correct);
//         console.log("incorrect: " + incorrect);
//         console.log("unanswered: " + unanswered);
//     }
//     //check to see if correct answer has been selected
//     //compare value of button to randomQues.correctAnswer
//     // for (i=0; i<questions.length; i++) {
//     $(document).on("click", "[value='true']", function () {
//         console.log(this);
//         console.log(this.value);
//         console.log(this.id);
//         evaluateAnswer(this.id, this.value);
//     });
//     $(document).on("click", "[value='false']", function () {
//         evaluateAnswer(this.id, this.value)
//     });
    // };
////////////end of displayQuestion function

// //need an endGame screen that shows total correct, incorrect, and unaswered
// function endGame() {
//     ///rewrite .quiz-area html with "Here's how you did"
//     $(".quiz-area").html("<h2>All done, here's how you did!</h2>");
//     //append .quiz-area with correct
//     $(".quiz-area").append("Correct Answers: " + correct + "<br>");
//     //append .quiz-area with incorrect
//     $(".quiz-area").append("Incorrect Answers: " + incorrect + "<br>");
//     //append .quiz-area with unanswered
//     $(".quiz-area").append("Unanswered: " + unanswered + "<br>");
//     //append .quiz-area with startOver button
//     var resetBtn = $("<button>").attr("id", "resetButton");
//     resetBtn.text("Start Over?");
//     $(".quiz-area").append(resetBtn);
//     $(document).on("click", "#resetButton", function () {
//         reset();
//     });
// }

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