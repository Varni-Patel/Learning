var buttonColor = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var start = false;

$(document).keydown(function(){
    if(!start){
        $("h1").text("level " + level);
        nextSequence();
        start = true;
    }
})

$(".btn").click(function(){ 

    var userchosencolor = $(this).attr("id");

    userClickedPattern.push(userchosencolor);

    playsound(userchosencolor);
    animatepress(userchosencolor);
    checkAnswer(userClickedPattern.length - 1);

});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
        playsound("wrong");

        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");  
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        startover();
    }
}

function nextSequence(){
    userClickedPattern = [];
    level = level++;
    $("h1").text("level " + level);

    var randomnumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColor[randomnumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    
    playsound(randomChosenColor);
}

function animatepress(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function playsound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function startover(){
    level = 0;
    gamePattern = [];
    start = false;
}