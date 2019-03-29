$(document).ready(function() {

    //setting up global variables 
    var win = 0;
    var lose = 0;
    var currentCrystalNum = 0;

    var ruby = 0;
    var sapphire = 0;
    var teardrop = 0;
    var tourmaline = 0;

    // this function will start the game/restart the game
    function startGame() {
        $("#random-num").empty();
        randGameNum();
        currentCrystalNum = 0;
        randCrystalNum();
        $("#score-area").empty();
        $("#score-area").append(currentCrystalNum); 
    }

    // this the function that will give us the first random number to start the game and match that number
    function randGameNum() {
       gameNum =  (Math.floor(Math.random() * 101) + 19);
       $("#random-num").append(gameNum);
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
        compareNum();
    });

    $(".sapphire").on("click", function() {
        currentCrystalNum+=sapphire;
        $("#score-area").empty(); 
        $("#score-area").append(currentCrystalNum);
        compareNum();
    });

    $(".teardrop").on("click", function() {
        currentCrystalNum+=teardrop;
        $("#score-area").empty();
        $("#score-area").append(currentCrystalNum);
        compareNum();
    });

    $(".tourmaline").on("click", function() {
        currentCrystalNum+=tourmaline;
        $("#score-area").empty();
        $("#score-area").append(currentCrystalNum);
        compareNum();
    });

    // function is created to compare current crystal values with the goal number to see if it goes over the goal number
    function compareNum() {
        if(currentCrystalNum === gameNum) {
            win++
            $("#win").empty();
            $("#win").append(win);
            alert("You win!");
            startGame();
        }
        else if(currentCrystalNum > gameNum) {
            lose++
            $("#lose").empty();
            $("#lose").append(lose);
            alert("Sorry, you lost. :( ");
            startGame();
        }
    };

    startGame();

    });