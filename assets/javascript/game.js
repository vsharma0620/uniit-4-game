//pseudo coding 
//The computer will generate a random number between 19 and 120 which will reset once the user wins or losses
//There will be 4 crystals 
//Each crystal will have a random value between 1 and 12 which will reset once the user wins or losses
//when clicking any crystal it should keep adding to the score (append)
//When the score equals the random number the player wins
//If the score does not equal to the random number and goes over then we lose
// Initial Variables //    
var score = 0;
var wins = 0;
var losses = 0;
//Random number//
var random = Math.floor(Math.random()*120+19);
console.log("random number: " + random); 
$("#randomnumber").text(random);

var numberOptions = [1, 5, 7, 12];

for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("buttons");

    imageCrystal.attr("src", "https://vignette.wikia.nocookie.net/bejeweled/images/8/86/Bejeweled_Blitz_Square_Icon_%28Halloween%29.png/revision/latest?cb=20151008223239");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#buttons").append(imageCrystal);

}
//Button Functions//
$(".buttons").on("click", function() {

var buttonvalue = ($(this).attr("data-crystalvalue"));
buttonvalue = parseInt(buttonvalue);

score += buttonvalue;
$("#score").text(buttonvalue);
console.log(score);
    
 if (score === random) {
     wins++
     $('#wins').text(wins);
    }

    else if (score >= random) {
    losses++
    $('#losses').text(losses);
    }
});