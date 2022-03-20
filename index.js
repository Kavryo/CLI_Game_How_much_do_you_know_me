var readLineSync = require("readline-sync");
//const chalk = require("chalk");

//define score var
var score = 0
var userName = readLineSync.question("What is your lovely name? " + "\n")
console.log("Hey " + userName + "! Welcome to HOW MUCH DO YOU KNOW KAVYA? \n")
var players = [
  {
    playerName: "Kavya",
    Score: 5
  }
]
//prepare list of questions
var questions = [
 {
  question: "What is my insta art account name? ",
  answer: "kavryo"
 },
 {
  question: "What is my favourite ice cream flavour? ",
  answer: "chocolate"
 },
 {
  question: "What is my hobby? ",
  answer: "art"  
 },
 {
  question: "What is my go to game? ",
  answer: "apex legends"  
 },
 {
  question: "What genre of game do I like? ",
  answer: "fps"  
 }
]

function play(question,answer)
{
  var userAnswer = readLineSync.question(questions[i].question + "\n")
  if(userAnswer.toUpperCase() === questions[i].answer.toUpperCase())
    {
      console.log("\ncorrect! \n")
      score++
    }
  else
    {
      console.log("\nincorrect! \n")
    }
  
  //show score at end
}

for(i = 0; i < questions.length; i++)
  {
    play(questions[i].question,questions[i].answer)
  }
console.log("Your score is: " + score + "\n")

console.log("******** Highest Score ******** \n")

for( i = 0; i < players.length; i++)
  {
    console.log("Player : " + players[i].playerName + "\n" + "Score : " + players[i].Score + "\n");
  }