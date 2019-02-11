$(document).ready(function() {

    //number manipulated by clicking on the crystals
   

    //this is a random number generated to get us to the the target number

    var randNum = randomNumGen(); //is this a function in a variable?

    //setting up rest of variables
    var win = 0;
    var lose = 0;
    var crystals = 0;



    // this will be random number generators for the crystals button

    $(".ruby").on("click", function() {
        alert("It is working.");
    });

    $(".sapphire").on("click", function() {
        alert("It is working.");
    });

    $(".teardrop").on("click", function() {
        alert("It is working.");
    });

    $(".tourmaline").on("click", function() {
        alert("It is working.");
    });



});