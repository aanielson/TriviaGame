//create variables for correct answers, incorrect answers, and unanswered + timer
var correct = 0;
var incorrect = 0;
var unanswered = 8;
var time = 30000;
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
console.log(questions);

//display "start" button at the beginning
    //when "start" is pressed, change the display to show the 8 questions
    //when "start" is clicked, display possible answers
    //run timer
    $(document).ready(function () {
        var strtBtn = $("<button>").attr("id", "startButton");
        strtBtn.text("Start");
        $(".container").html(strtBtn);
    
        $(document).on("click", "#startButton", function(){
            displayQuestion();
            
        });
    
    
    
    });
    function displayQuestion() {
        var randomQues = questions[Math.floor(Math.random() * questions.length)];
        var quesDiv = $("<div>").attr("id", "quesDiv");
        $(quesDiv).html(randomQues.question);
        $('.container').html(quesDiv);
        
        var possibleAnsDiv = $("<div>").attr("id", "possibleAnsDiv");
        var trueButton = $("<button>").attr("val", true);
        $(trueButton).text(randomQues.possibleAns[0]);
        var falseButton = $("<button>").attr("val", false);
        $(falseButton).text(randomQues.possibleAns[1]);
        $(possibleAnsDiv).html(trueButton);
        $(possibleAnsDiv).append(falseButton);
        $('.container').append(possibleAnsDiv);
        

        var correctAnsDiv = $("<div>").attr("id", "correctAnsDiv");
        $(correctAnsDiv).html(randomQues.correctAnswer);
        $('.container').append(correctAnsDiv);
    };
    
    function countDown() {
        time--;
        var currentTime = timeConverter(time);
        $(".display").html("<span><p>Time Remaining: <div id='time-left'></div></p></span><br>");
        $("#time-left").text(currentTime);
    };
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
