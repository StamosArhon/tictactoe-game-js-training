# The TicTacToe Game (HTML/CSS/JS training)

**Version:** 0.0.3  
**Author:** [StamosArchontis](https://github.com/StamosArhon)  
**License:** MIT

---

## 📖 About the Project

**The TicTacToe Game** is a simple, fully functional browser-based game built for educational purposes, aimed at practicing fundamental **HTML**, **CSS**, and **JavaScript** skills.

It focuses on:

- Core DOM manipulation
- Event handling
- Simple game logic (player switching, score keeping)
- Responsive and modern UI design using pure CSS

The project is cleanly structured with separated concerns for easy understanding and maintenance.

---

## 🗂️ Directory Structure

```bash
/tictactoe-game-js-training
├── LICENSE
├── /css
│   └── styles.css      # All styling rules (layout, components, effects)
├── /html
│   └── index.html      # Main HTML structure of the game
└── /js
    └── script.js       # Game logic (JS)
```

---

## 🚀 Features

- 🎮 **Two-player mode** (Player 1 vs Player 2)
- ✖️⭕ **Dynamic board filling** with X and O
- 🔄 **Restart Game** and 🔁 **Reset Board** buttons now appear **only after a round is won**, as part of a winning overlay
- 🧠 **Win detection** logic (8 possible winning combinations)
- 🏆 **Current score** and **high score tracking** per player
- 🔥 **Active player highlighting**
- 💎 **Modern, colorful UI** (hand-crafted CSS)
- 🧹 **Board resets cleanly after each round**
- 🎯 **Automatic player switching after each move**
- 🪟 **Winning overlay display** with player win message and post-round controls

---

## 🛠️ Tech Stack

- **HTML5** (Semantics, Responsive meta)
- **CSS3** (Flexbox, Grid, Animations, Styling)
- **Vanilla JavaScript** (No libraries)

---

## 🖥️ How to Run

1. Clone or download the repository:

```bash
git clone https://github.com/StamosArhon/tictactoe-game-js-training.git
```

2. Open `/html/index.html` in your favorite browser.

✅ No installations or servers are needed — it’s pure frontend!

---

## 🎨 Screenshots

### Gameplay

![Gameboard](assets/screenshots/tic-tac-toe-game-board-screenshot.png)

---

## 📋 Known Limitations

- Players can overwrite each other's moves if the button is not properly locked after clicking (currently partially handled).
- Mobile responsiveness can be improved (future enhancement).

---

## 🛣️ Planned Improvements

- [ ] Improve mobile responsiveness (media queries).
- [ ] Add winning animations.
- [ ] Add a move counter and timer.
- [ ] Track score history between rounds.
- [ ] Add sound effects and accessibility improvements.

---

## 📜 Version History

| Version | Date       | Changes/Notes                                                                                                                                                                                                                                                                                                                      |
| :------ | :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.0.1   | April 2025 | Initial version. Basic player switching, dynamic board filling, restart functionality, basic layout styling completed. <br> ➕ Added win detection logic and player score tracking. <br> ➕ Added high score tracking per player. <br> ➕ Added **Reset Board** button to clear the board without clearing current or high scores. |
| 0.0.3   | May 2025   | ➕ Added **winning overlay** that appears when a player wins a round. <br> ➕ Moved **Restart Game** and **Reset Board** buttons into the overlay UI, so they only appear after a win. <br> ✅ Improved game clarity and UI flow for round transitions.                                                                            |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 🤝 Contributions

This project is a training and learning project — but feel free to fork, improve, or extend it if you want!

---
