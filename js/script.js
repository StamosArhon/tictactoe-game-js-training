"use strict";

//Selecting elements
//====== Players current scores ======//

const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

//====== Players current scores ======//

const currentScore0Element = document.querySelector(".player-0-current-score");
const currentScore1Element = document.querySelector(".player-1-current-score");

//====== Players high scores ======//

const highScore0Element = document.querySelector(".player-0-high-score");
const highScore1Element = document.querySelector(".player-1-high-score");

//====== TicTacToe board buttons ======//

const boardButtons = document.querySelectorAll(".TicTacToe-board-piece");

//====== TicTacToe winning combinations ======//

const winningCombinations = [
  ["row-1-box-1", "row-1-box-2", "row-1-box-3"], // Row 1
  ["row-2-box-1", "row-2-box-2", "row-2-box-3"], // Row 2
  ["row-3-box-1", "row-3-box-2", "row-3-box-3"], // Row 3
  ["row-1-box-1", "row-2-box-1", "row-3-box-1"], // Col 1
  ["row-1-box-2", "row-2-box-2", "row-3-box-2"], // Col 2
  ["row-1-box-3", "row-2-box-3", "row-3-box-3"], // Col 3
  ["row-1-box-1", "row-2-box-2", "row-3-box-3"], // Diag 1
  ["row-3-box-1", "row-2-box-2", "row-1-box-3"], // Diag 2
];

//Declaring global variables

let highScore, currentScore, activePlayer, playing;

const init = function () {
  highScore = [0, 0];
  currentScore = [0, 0];
  activePlayer = 0;
  playing = true;

  currentScore0Element.textContent = 0;
  currentScore1Element.textContent = 0;
  highScore0Element.textContent = 0;
  highScore1Element.textContent = 0;

  player0Element.classList.remove("player--winner");
  player1Element.classList.remove("player--winner");
  player0Element.classList.add("player--active");
  player1Element.classList.remove("player--active");

  boardButtons.forEach((button) => {
    button.textContent = "";
  });
};

init();

//====== Main game function to monitor button activity ======//

const ticTacToeFill = boardButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (playing && button.textContent === "") {
      button.textContent = activePlayer === 0 ? "✖️" : "⭕";

      if (checkWinner()) {
        playing = false;
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add("player--winner");

        currentScore[activePlayer] += 1;
        document
          .querySelector(".winning-overlay")
          .classList.add("show-winning-overlay");
        document.querySelector(".winner-banner").textContent = `Player ${
          activePlayer + 1
        } wins!`;

        if (currentScore[activePlayer] > highScore[activePlayer]) {
          highScore[activePlayer] = currentScore[activePlayer];
        }
        currentScore0Element.textContent = currentScore[0];
        currentScore1Element.textContent = currentScore[1];
        highScore0Element.textContent = highScore[0];
        highScore1Element.textContent = highScore[1];
      } else switchPlayer();
    }
  });
});

const switchPlayer = function () {
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
};

//====== Function to check winner ======//

const checkWinner = function () {
  return winningCombinations.some((combination) => {
    const [a, b, c] = combination;

    let buttonA = document.getElementById(a).textContent;
    let buttonB = document.getElementById(b).textContent;
    let buttonC = document.getElementById(c).textContent;

    return buttonA !== "" && buttonA === buttonB && buttonB === buttonC;
  });
};

//====== Function to reset the board for the next round ======//

const resetBoard = function () {
  playing = true;
  activePlayer = 0;

  player0Element.classList.remove("player--winner");
  player1Element.classList.remove("player--winner");
  player0Element.classList.add("player--active");
  player1Element.classList.remove("player--active");

  boardButtons.forEach((button) => {
    button.textContent = "";
  });
};

//====== Reset the game for the next round ======//

document.querySelector(".reset-board-btn").addEventListener("click", () => {
  document
    .querySelector(".winning-overlay")
    .classList.remove("show-winning-overlay");
  resetBoard();
});

//====== Restart the game and clear scores ======//

const restartGame = document
  .querySelector(".restart-game-btn")
  .addEventListener("click", () => {
    document
      .querySelector(".winning-overlay")
      .classList.remove("show-winning-overlay");
    init();
  });
