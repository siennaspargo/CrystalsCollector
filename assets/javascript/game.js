// TARGET NUMBER TO BE GUESSED
//variable holding random number
var targetNumber = 100;
// jQuery selector statement calling target number
$("#mystery-number").text(targetNumber);

// USERS CURRENT SCORE
var currentScore = 0;

// RANDOM VALUES FOR CRYSTALS
// array to hold crystal values
var crystalValues = [5, 4, 8, 1];

// grab image and assign image to value
// on click event 
$(".crystals").on("click", function() {

// ++ increment user's score

currentScore += 1;

// if matched score, log win
if (currentScore === targetNumber) {

  // If the numbers match we'll celebrate the user's win.
  alert("YOU MATCHED THE NUMNERS!!!!!");
}

// if loss, log loss
else if (counter >= targetNumber) {
  alert("Ooops. Better luck next time.");
}
 
// reset page without reload

});