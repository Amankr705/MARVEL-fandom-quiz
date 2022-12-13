var readlineSync = require("readline-sync");

var score = 0;

function welcome(){
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to Marvel Quiz");
}

var questions = [{
  question: "How many Infinity Stones are there? ",
  answer: "Six"
}, {
  question: "Captain America’s shield and Bucky's arm are made of what? ",
  answer: "Vibranium"
}, {
  question: "Thor's Mjolnir is made from the metal of a dying ___? ",
  answer: "Star"
}, {
  question: "Who is the Winter Soldier? ",
  answer: "Bucky"
}, {
  question: "Black Panther is set in which fictional country? ",
  answer: "Wakanda"
}];


function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("You are right!")
    score = score + 1;
  }else{
    console.log("You are wrong!")
  }

  console.log("Current score: ",score);
  console.log("---------------------")
}

function quiz(){
  for(var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScore(){
  console.log("YAY! you scored: ",score)
}

welcome();
quiz();
showScore();