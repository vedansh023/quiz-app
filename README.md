# Interactive Quiz & Skill Assessment App

A browser-based quiz application built with **vanilla JavaScript**, **HTML**, and **CSS** — no frameworks or libraries. Practice JavaScript and DSA concepts with timed quizzes, instant feedback, and progress tracking.

## Live Demo

> Deploy to GitHub Pages or Vercel and add your live URL here.

## Problem Statement

Students often rely on static learning resources that do not provide real-time evaluation or feedback. This project addresses that by offering an interactive quiz platform that dynamically renders questions, evaluates responses, calculates scores, and tracks progress on the client side.

## Features

- **Multiple topics** — JavaScript and DSA (Data Structures & Algorithms) quizzes
- **Timed quizzes** — Countdown timer for each attempt
- **Instant scoring** — Immediate results after submission
- **Progress tracking** — Attempt history stored in `localStorage`
- **Dynamic rendering** — Questions and options built via DOM manipulation
- **Responsive UI** — Clean layout that works on desktop and mobile
- **Zero dependencies** — Pure HTML, CSS, and JavaScript

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript (ES6+) |
| Storage | localStorage |

## Getting Started

### Option 1 — Open directly

Clone the repo and open `index.html` in your browser:

```bash
git clone https://github.com/vedansh023/quiz-app.git
cd quiz-app
```

Double-click `index.html` or use a local server:

```bash
npx serve .
```

### Option 2 — Local server (recommended)

```bash
npx serve .
# Open http://localhost:3000
```

## How It Works

1. Select a quiz topic (JavaScript or DSA)
2. Answer multiple-choice questions within the time limit
3. Submit to see your score and review answers
4. Your attempt is saved locally for future reference

## Project Structure

```
quiz-app/
├── index.html    # App shell
├── script.js     # Quiz logic, DOM rendering, timer, storage
├── style.css     # Layout and styling
└── README.md
```

## Concepts Demonstrated

- DOM manipulation (`createElement`, event listeners)
- Event-driven programming
- Client-side state management
- `localStorage` for persistence
- Timer logic with `setInterval`
- Dynamic UI rendering without a framework

## Author

**Vedansh Vinodh** — [GitHub](https://github.com/vedansh023) · [Portfolio](https://vedansh023.github.io/Porfolio/)

## License

This project is open source and available for learning purposes.
