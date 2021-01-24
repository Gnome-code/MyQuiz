var canvas, gameState, contestantCount, database, quiz, question, contestant, database;

function setup(){
  canvas = createCanvas(850,400);
  gameState = 0;
  database = firebase.database();
  quiz = new Quiz
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState == 1){
    quiz.play();
  }
}
