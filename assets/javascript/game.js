$(document).ready(function() {

    // var randNum = randomNumGen(); //is this a function in a variable?

    //setting up variables 
    var win = 0;
    var lose = 0;
    var currentCrystalNum = 0;

    var ruby = 0;
    var sapphire = 0;
    var teardrop = 0;
    var tourmaline = 0;

    // this function will start the game/restart the game
    function startGame() {


    }

    // this the function that will give us the first random number to start the game and match that number
    function randGameNum() {
       gameNum =  (Math.floor(Math.random() * 101) + 19);
       $("#random-num").append(currentCrystalNum);
    };

    // This be the random number generators for the crystals
    
    function randCrystalNum() {
        ruby = (Math.floor(Math.random() * 11) + 1),
        sapphire = (Math.floor(Math.random() * 11) + 1),
        teardrop =  (Math.floor(Math.random() * 11) +1),
        tourmaline = (Math.floor(Math.random() * 11) +1)
    };

    // this will activate the numbers for the crystals when clicked

    $(".ruby").on("click", function() {
        currentCrystalNum+=ruby;
        $("#score-area").empty();
        $("#score-area").append(currentCrystalNum);
        
    });

    $(".sapphire").on("click", function() {
        currentCrystalNum+=sapphire;
        $("#score-area").empty();
        $("#score-area").append(currentCrystalNum);
    });

    $(".teardrop").on("click", function() {
        currentCrystalNum+=teardrop;
        $("#score-area").empty();
        $("#score-area").append(currentCrystalNum);
    });

    $(".tourmaline").on("click", function() {
        currentCrystalNum+=tourmaline;
        $("#score-area").empty();
        $("#score-area").append(currentCrystalNum);
    });

    // function is created to compare current crystal values with the goal number to see if it goes over the goal number
    function compareNum() {
        
    }

});