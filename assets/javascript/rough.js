 // TARGET NUMBER TO BE GUESSED
//variable holding random number
var targetNumber = 100;
// jQuery selector statement calling target number
$("#mystery-number").text(targetNumber);

// USERS CURRENT SCORE
var currentScore = 0;

// RANDOM VALUES FOR CRYSTALS
// array to hold crystal values
var crystalValues = [5, 12, 8, 1];

// variable for crystal images
var crystalImg = $("<img>");


// variables for wins and losses
var wins = 0;
var losses = 0;
// functin for images on click



// function that returns the img src info when clicked on image..
// function myFunction() {
//     var wins = document.getElementById("crystalImg").crystalValues;
//     wins ++;
//     document.getElementById("crystals").innerHTML = wins;
// }
// function myFunction() {
//   var losses = document.getElementById("crystalImg").crystalValues;
//   losses ++;
//   document.getElementById("crystals").innerHTML = losses;
// }


$("#crystalImg1").on("click", function () {

// function myFunction() {
  // var crystalValues = Math.floor((Math.random() * 10) + 1);
  // $("#").val.("") = x;

crystalImg.attr("data-crystalValue", crystalValues[i]);
// grab image and assign image to value
// on click event 
// $(".crystalImg").on("click", function () {

  // ++ increment user's score

  // math.floor random

  // vall the function at the end to reset to the beginning of the function ( zeros in value spots )

  var crystalValue = ($(this).val("crystalImg"));
  crystalValue = parseInt(crystalValues);

  currentScore += crystalValues;

  // if matched score, log win
  if (currentScore === targetNumber) {

    // If the numbers match we'll celebrate the user's win.
    wins ++;
    appendTo("<h3>Wins</h3>");
    
  }

  // if loss, log loss
  else if (currentScore >= targetNumber) {
    losses++;
    appendTo("<h3>Losses</h3>");
  }

  // reset page without reload

});