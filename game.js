var Letter = require("./letter.js");
var inquirer = require("inquirer");
var colors = require("colors");

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
var GameOn = function() {

    inquirer.prompt([
        {
            type: "input",
            name: "userInput",
            message: "Guess a letter!".america
        }

    ]).then(function (answer) {
        var correct = true;
        var lowerCase = game.wordArray.join("").toLowerCase().split("");
        function checkArray() {
            for (var i = 0; i < inputArray.length; i++) {
                if (answer.userInput == inputArray[i]) {
                    console.log("pick another letter!");
                }
            }
        }
        checkArray();

        if (lowerCase.indexOf(answer.userInput.toLowerCase()) !== -1) {
            correct = true;
            console.log("CORRECT!!".green);
            inputArray.push(answer.userInput);
        } else if (answer.userInput == inputArray[i]) {
            console.log("pick another one");
        }

        for (var i = 0; i < game.wordArray.length; i++) {
            if (answer.userInput.toLowerCase() == lowerCase[i]) {
                game.underscoreArray[i] = game.wordArray[i];
                game.underscoreString = game.underscoreArray.join(" ");
            }
        }

        if (gameWord.toLowerCase().indexOf(answer.userInput.toLowerCase()) == -1 && guesses < 8) {

            guesses++;
            console.log(hangman[guesses]);
            correct = false;
            inputArray.push(answer.userInput);

        } else if (guesses >= 8) { stopGame() }
        console.log("\x1b[37m" + game.underscoreString);
        GameOn();

        if (game.underscoreString.indexOf("_") == -1) {
            console.log("You win!!".green);
            stopGame();
        }

    });
        if (guesses == 8) {
            console.log("You Lost".red);
            stopGame();
        }

}

function stopGame() {
    inquirer.prompt([
        {
            type: "list",
            name: "what",
            message: "Do you wanna play it again??",
            choices: ["Yep!", "Nope"]
        }
    ]).then(function (answer) {
        if (answer.what === "Yep!") {
            GameOn();
            
            emitter.setMaxListeners(0);
           

        } else {
            console.log("See You Later!!".blue)
            process.exit()
        }
    })
}
GameOn();






