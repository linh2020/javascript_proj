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

//
startGame.addEventListener("click", function (e) {
  gameData.index = Math.round(Math.random());
  //   console.log(gameData.index); // 0 or 1
  gameControl.innerHTML = "<h2>The Game Has Started</h2>";
  gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

  document.getElementById("quit").addEventListener("click", function (e) {
    location.reload(); // used to reload the current page. This can be useful in scenarios where you want to refresh the content of the page, for example, after certain actions have been performed.
  });

  console.log("set up the turn!");
});

function setUpTurn(param) {
  game.innerHTML = `<p>Roll the dice for the ${
    gameData.players[gameData.index]
  }</p>`;

  actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';

  document.getElementById("roll").addEventListener("click", function (e) {
    console.log("roll the dice");
  });
}
