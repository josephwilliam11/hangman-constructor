var Letter = require("./letter.js");
var inquirer = require("inquirer");
var game = new Letter();
var guesses = 0;
var hangman = [
    "¯",
    "¯|",
    "¯L",
    "¯L_(",
    "¯L_(ツ",
    "¯L_(ツ)",
    "¯L_(ツ)_",
    "¯L_(ツ)_/",
    "¯L_(ツ)_/¯"
];
var inputArray = [];
game.letterRender();
var count = 0;
var GameOn = function () {

    inquirer.prompt([
        {
            type: "input",
            name: "userInput",
            message: "Guess a letter!"
        }


    ]).then(function (answer) {
        var correct = false;
        var lowerCase = game.wordArray.join("").toLowerCase().split("");

        if (lowerCase.indexOf(answer.userInput.toLowerCase()) !== -1) {
            correct = true;
            console.log("\x1b[32m", "CORRECT!!")
        }
        for (var i = 0; i < game.wordArray.length; i++) {
            if (answer.userInput.toLowerCase() == lowerCase[i]) {
                game.underscoreArray[i] = game.wordArray[i];
                game.underscoreString = game.underscoreArray.join(" ");
            }
        }

        if (gameWord.toLowerCase().indexOf(answer.userInput.toLowerCase()) == -1 && guesses < 9) {

            guesses++;
            console.log(hangman[guesses]);

            // console.log("\x1b[31m", "WRONG!!!")
        } else if (guesses >= 9) { stopGame() }
        console.log("\x1b[37m" + game.underscoreString);
        GameOn();

        if (game.underscoreString.indexOf("_") == -1) {
            console.log("you win!!")
            stopGame();
        }
    });

}
function stopGame() {
    inquirer.prompt([
        {
            type: "list",
            name: "what",
            message: "Do you wanna play it again??",
            choices: ["Yeap!", "Meh"]
        }
    ]).then(function (answer) {
        if (answer.what === "Yeap!") {
            GameOn();
            //need setTime stuff here - i think
        } else {
            process.exit()
        }
    })
}
GameOn();


