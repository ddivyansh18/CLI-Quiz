var readlineSync = require("readline-sync")
var chalk = require("chalk")

var playerName = readlineSync.question("Enter your name : ");
var score = 0;

console.log(chalk.bgCyan("Welcome " + playerName + " to DO YOU KNOW Divyansh ?"));

function play(question, answer) {
  var userResponse = readlineSync.question(question);
  if(userResponse.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreen("Correct"));
    score++;
  } else {
    console.log(chalk.bgRed("Wrong"));
  }

  console.log("Current Score : ", score);
  console.log("----------------------");
}

var highscorers = [{
  name : "Prabhat",
  score : 4
}
]

function printHighScore(highscorer) {
  console.log(highscorer.name + " " + highscorer.score);
} 


var questions = [{
  question : "Where Do I Live ? ",
  answer : "India"
},
{
  question : "My Favourite SuperHero ? ",
  answer : "Batman"
},
{
  question : "My Favourite Movie ? ",
  answer : "Three Idiots"
},
{
  question : "My Favourite Colour ? ",
  answer : "Black"
},
{
  question : "Is my age less than 25 ? ",
  answer : "Yes"
}]

for(var i=0;i<questions.length;i++) {
  play(questions[i].question,questions[i].answer);
}

console.log(chalk.bgMagenta("You scored : " + score));

console.log("\nLeaderboard : ")
for(var i=0;i<highscorers.length;i++) {
  printHighScore(highscorers[i]);
}

if(score > highscorers[0].score) {
  console.log(chalk.bgYellow("Congrats ! You have the highest score"));
}
