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
var count = 0;
game.letterRender();
var inputArray = [];
var GameOn = function(){
   if (count < 10){
    inquirer.prompt([
        {
          type: "input",
          name: "userInput",
          message: "Guess a letter!"
        }
    
      
      ]).then(function(answer) {
    
        for (var i = 0; i < game.wordArray.length; i++){
            if (answer.userInput == game.wordArray[i]){
                   
                game.underscoreArray[i] = answer.userInput;
                game.underscoreString = game.underscoreArray.join(" ");   
                console.log("\x1b[32m","CORRECT!!")
// problem here if there is more than one letter correct console log that much
            }
        }   
// we need to check same letter 
        // inputArray.push(answer.userInput); 
        // var inputString = inputArray.join('');
        // console.log(inputString);
        // if (inputString.indexOf(answer.userInput) !== -1){
        //     console.log("Please guess different letter")
        // }
        if (gameWord.indexOf(answer.userInput) == -1 ){
            guesses++;
            console.log(hangman[guesses]);
            console.log("\x1b[31m", "WRONG!!!")
        }
        console.log("\x1b[37m" + game.underscoreString);
        count++;
        GameOn();
     
        if (game.underscoreString.indexOf("_") == -1){
            console.log("you win!!")
            count = 9;
            stopGame();
        }
        });
   }
}
function stopGame() {
     inquirer.prompt([
        {
            type: "list",
            name: "what",
            message: "Do you wanna play it again??",
            choices: ["Yeap!", "Meh"]
          } 
     ]).then (function(answer){
         if (answer.what === "Yeap!"){
             GameOn();
             //need setTime stuff here - i think
         } else {
             console.log("Thanks for playing!")
         }
     })
}
GameOn();


