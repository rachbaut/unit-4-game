$(document).ready(function() {

    //number manipulated by clicking on the crystals
    var crystalNum = 0;

    //this is a randnum generated to get us to the the target number
    var randNum = randomNumGen();

    //setting up rest of variables
    var win = 0;
    var lose = 0;
    var crystals; //why is this one set up like this?

    //this function will generate rand values for each crystal object
    function randNumCrystals() {
        //these are crystal objects
        return {
            red: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/ruby.jpg"
            },
            blue: {
                points: Math.floor(Math.random() * 12) +1,
                imageUrl: "assets/images/sapphire.jpg"
            },
            yellow: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/teardrop.jpg"
            },
            green: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/tourmaline.jpg"
            }
        };
    }

});