var buttonColors = ["green", "red", "yellow", "blue"];
var currentColor = [];
var simonPattern = [];
var userPattern = [];

var colorCheck = 0;
var level = 1;

$("#start-btn").click(function () {
  playSound("start-btn");
  simonPattern = [];
  if ($("#start-btn").html() === "Start") {   //On-click starts game
    $("#start-btn").html("Restart");
    nextPattern ();
  } else {                                    //Resets game and starts from level 1
    $("h1").text("Simon Says!");
    $(".btn").removeClass("btn-stop")
    setTimeout(function() {
      level = 1;
      nextPattern ();
    }, 600);
  }
});

function nextPattern () {
  userPattern = [];                        // Reset pattern
  $("h1").text("Level " + level);
  level++;                                 // Adds level
  setTimeout (function () {
    var rand = Math.floor (Math.random()*4); //Create random number
    currentColor = buttonColors[rand];       //Selects color from array
    $("#" + currentColor).fadeIn(200).fadeOut(100).fadeIn(200);
    simonPattern.push(currentColor);
  }, 300);
}


$(".btn").click(function () {
  colorCheck++;                             //Increments check value for each level
  var userChosenColor = $(this).attr("id");

  userPattern.push(userChosenColor);        //Generates user selection's array
  animatePress (userChosenColor);
  verifyAnswer(userPattern.length-1);
});

function verifyAnswer () {
  //Checks that every click is correct until it matches simonPattern length
  if (userPattern[colorCheck-1] === simonPattern[colorCheck-1]) {
    if (userPattern.length === simonPattern.length) {
      $("h1").text("Correct");
      nextPattern ();
      colorCheck = 0;
    }
  } else {
    $("h1").text("Game Over");
    playSound("wrong");
    $(".btn").addClass("btn-stop")
  }
}

function animatePress (currentColor) {              //Creates animation glow
  $("#"+currentColor).addClass("btn-active");
  playSound(currentColor);
  setTimeout(function() {
    $("#"+currentColor).removeClass("btn-active");
  }, 300);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + "-sound.wav");
  audio.play();
}
