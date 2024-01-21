//
//
let startGame = document.getElementById("startgame");
let gameControl = document.getElementById("gamecontrol");
let game = document.getElementById("game");
let score = document.getElementById("score");
let actionArea = document.getElementById("actions");

//
let gameData = {
  dice: [
    "1die.jpg",
    "2die.jpg",
    "3die.jpg",
    "4die.jpg",
    "5die.jpg",
    "6die.jpg",
  ],
  players: ["player1", "player2"],
  score: [0, 0],
  roll1: 0,
  roll2: 0,
  rollSum: 0,
  index: 0,
  gameEnd: 29,
};
