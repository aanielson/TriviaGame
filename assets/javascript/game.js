//create variables for correct answers, incorrect answers, and unanswered
var correct = 0;
var incorrect = 0;
var unanswered = 8;
var time = 30000;
//create array of objects for questions;
var questions = [
    {
        question: "Bulbasaur is the only dual-type starter",
        answer: "true"
    },
    {
        question: "There are 18 Pokémon types",
        answer: "true"
    },
    {
        question: "There are more than 20 Pokémon games",
        answer: "true"
    },
    {
        question: "Pokémon is the largest IP in the world",
        answer: "true"
    },
    {
        question: "Eevee has the most evolutions, with 8",
        answer: "true"
    },
    {
        question: "The most common type is normal",
        answer: "true"
    },
    {
        question: "Steel has the most resistances, with 10",
        answer: "true"
    },
    {
        question: "Normal and ice have the fewest resistances, with 1 apiece",
        answer: "true"
    },
];
console.log(questions);
console.log(questions[0].question);
console.log(questions[0].answer);
//display "start" button at the beginning

//when "start" is pressed, change the display to show the 8 questions and run timer
$("#start").on("click", function() {
    
    setTimeout(countDown, 30000);
    listQuestions();
    timeUp();

})

function listQuestions() {
    

    for (i=0; i <= questions.length; i++) {
        var ask = questions[i].question;
        var guess = questions[i].answer;
        console.log(ask);
        //var trueButton = $("<button>");
        //console.log(trueButton);
        //trueButton.attr("val", "true");
        //var falseButton = $("<button>");
        //console.log(falseButton);
        //falseButton.attr("val", "false");

        $(".display").append(ask + ": " + guess + "<br></br>");
        
    }
}
function countDown() {
    time--;
    var currentTime = timeConverter(time);
    $(".display").html("<span><p>Time Remaining: <div id='time-left'></div></p></span><br>");
    $("#time-left").text(currentTime);
}
function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
  
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
}
function timeUp() {

}
//calculate questions 1-8
//if correct answer is selected, add to "correct" variable and subtract from unanswered
//else if incorrect answer is selected, add to "incorrect" variable and subtract from unanswered
//make it so that only one option can be selected
    //question 1
    //question 2
    //question 3
    //question 4
    //question 5
    //question 6
    //question 7
    //question 8

//function "done" to update the display with correct, incorrect, and unanswered questions
    //call that function when timer runs out
    //call that function when "done" button is clicked