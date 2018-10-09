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

// functin for images on click



// function that returns the img src info when clicked on image..
// function myFunction() {
//     var x = document.getElementById("crystalImg").crystalValues;
//     document.getElementById("crystals").innerHTML = x;
// }
 // W3 schools

$("crystalImg").on("click", function () {

crystalImg.attr("data-crystalValue", crystalValues[i]);
// grab image and assign image to value
// on click event 
// $(".crystalImg").on("click", function () {

  // ++ increment user's score

  var crystalValue = ($(this).attr("crystalImg"));
  crystalValue = parseInt(crystalValues);

  currentScore += crystalValues;

  // if matched score, log win
  if (currentScore === targetNumber) {

    // If the numbers match we'll celebrate the user's win.
    appendTo("<h3>Wins</h3>");
  }

  // if loss, log loss
  else if (currentScore >= targetNumber) {
    appendTo("<h3>Losses</h3>");
  }

  // reset page without reload

});