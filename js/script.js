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

//Declaring global variables
let highScore, currentScore, activePlayer, playing;

const init = function () {
  highScore = [0, 0];
  currentScore = 0;
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
};

init();

//Looping through all TicTacToe piecesand add event listeners to all
const ticTacToeFill = boardButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (playing && button.textContent === "") {
      button.textContent = activePlayer === 0 ? "✖️" : "⭕";
      switchPlayer();
    }
  });
});

const switchPlayer = function () {
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
};
