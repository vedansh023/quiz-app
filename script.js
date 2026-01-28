const app = document.getElementById("app");

/* =========================
   QUIZ DATA
========================= */
const quizData = {
  javascript: [
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: ["var", "let", "const", "static"],
      answer: "const",
    },
    {
      question: "Which method converts a JSON string into an object?",
      options: [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.convert()",
        "parse.JSON()",
      ],
      answer: "JSON.parse()",
    },
    {
      question: "What will typeof null return?",
      options: ["null", "undefined", "object", "number"],
      answer: "object",
    },
    {
      question: "Which function executes code after a delay?",
      options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
      answer: "setTimeout()",
    },
    {
      question: "Which array method adds an element at the end?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: "push()",
    },
    {
      question: "Which keyword stops a loop?",
      options: ["stop", "exit", "break", "return"],
      answer: "break",
    },
    {
      question: "Which operator is strict equality?",
      options: ["==", "=", "===", "!="],
      answer: "===",
    },
    {
      question: "What does DOM stand for?",
      options: [
        "Document Object Model",
        "Data Object Method",
        "Digital Object Management",
        "Document Oriented Model",
      ],
      answer: "Document Object Model",
    },
    {
      question: "Which method selects an element by ID?",
      options: [
        "getElementById()",
        "querySelectorAll()",
        "getElementsByClassName()",
        "selectById()",
      ],
      answer: "getElementById()",
    },
    {
      question: "Which storage persists after browser is closed?",
      options: ["SessionStorage", "Cookies", "LocalStorage", "Cache"],
      answer: "LocalStorage",
    },
  ],

  dsa: [
    {
      question: "Which data structure follows FIFO?",
      options: ["Stack", "Queue", "Array", "Tree"],
      answer: "Queue",
    },
    {
      question: "Which data structure follows LIFO?",
      options: ["Queue", "Array", "Stack", "Linked List"],
      answer: "Stack",
    },
    {
      question: "Time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      answer: "O(log n)",
    },
    {
      question: "Which data structure supports recursion?",
      options: ["Queue", "Heap", "Stack", "Graph"],
      answer: "Stack",
    },
    {
      question: "BFS traversal uses which structure?",
      options: ["Stack", "Recursion", "Queue", "Priority Queue"],
      answer: "Queue",
    },
    {
      question: "Worst-case time complexity of linear search?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
      answer: "O(n)",
    },
    {
      question: "Which structure stores key-value pairs?",
      options: ["Array", "Stack", "Hash Map", "Queue"],
      answer: "Hash Map",
    },
    {
      question: "Best average case sorting algorithm?",
      options: [
        "Bubble Sort",
        "Selection Sort",
        "Merge Sort",
        "Insertion Sort",
      ],
      answer: "Merge Sort",
    },
    {
      question: "Linked list elements are stored in?",
      options: [
        "Contiguous memory",
        "Random memory",
        "Sequential blocks",
        "Non-contiguous memory",
      ],
      answer: "Non-contiguous memory",
    },
    {
      question: "Best data structure for undo operation?",
      options: ["Queue", "Array", "Stack", "Tree"],
      answer: "Stack",
    },
  ],
};

/* =========================
   STATE
========================= */
const state = {
  topic: null,
  currentIndex: 0,
  score: 0,
  selected: null,
  timer: null,
  timeLeft: 15,
};

/* =========================
   START SCREEN
========================= */
function renderStartScreen() {
  app.innerHTML = "";

  const title = document.createElement("h2");
  title.innerText = "Interactive Quiz App";

  const select = document.createElement("select");
  select.innerHTML = '<option value="">Select Topic</option>';

  Object.keys(quizData).forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic;
    option.innerText = topic.toUpperCase();
    select.appendChild(option);
  });

  const startBtn = document.createElement("button");
  startBtn.innerText = "Start Quiz";

  const error = document.createElement("div");
  error.className = "error";

  startBtn.addEventListener("click", () => {
    if (!select.value) {
      error.innerText = "Please select a topic";
      return;
    }
    state.topic = select.value;
    state.currentIndex = 0;
    state.score = 0;
    renderQuestion();
  });

  app.appendChild(title);
  app.appendChild(select);
  app.appendChild(startBtn);
  app.appendChild(error);
}

/* =========================
   QUESTION SCREEN
========================= */
function renderQuestion() {
  if (state.timer) clearInterval(state.timer);

  state.timeLeft = 15;
  state.selected = null;

  const questionObj = quizData[state.topic][state.currentIndex];
  app.innerHTML = "";

  const question = document.createElement("h3");
  question.innerText = questionObj.question;

  const timerText = document.createElement("p");
  timerText.innerText = `Time left: ${state.timeLeft}s`;

  const optionsDiv = document.createElement("div");

  questionObj.options.forEach((opt) => {
    const label = document.createElement("label");
    label.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = opt;

    input.addEventListener("change", () => {
      state.selected = opt;
    });

    label.appendChild(input);
    label.appendChild(document.createTextNode(opt));
    optionsDiv.appendChild(label);
  });

  const nextBtn = document.createElement("button");
  nextBtn.innerText = "Next";

  nextBtn.addEventListener("click", () => {
    if (!state.selected) return;

    if (state.selected === questionObj.answer) {
      state.score++;
    }

    state.currentIndex++;

    if (state.currentIndex < quizData[state.topic].length) {
      renderQuestion();
    } else {
      saveAttempt();
      renderResult();
    }
  });

  state.timer = setInterval(() => {
    state.timeLeft--;
    timerText.innerText = `Time left: ${state.timeLeft}s`;

    if (state.timeLeft === 0) {
      clearInterval(state.timer);
      if (typeof nextBtn.click === "function") nextBtn.click();
    }
  }, 1000);

  app.appendChild(question);
  app.appendChild(timerText);
  app.appendChild(optionsDiv);
  app.appendChild(nextBtn);
}

/* =========================
   RESULT SCREEN
========================= */
function renderResult() {
  app.innerHTML = "";

  const result = document.createElement("h2");
  result.innerText = `Your Score: ${state.score} / ${quizData[state.topic].length}`;

  const restart = document.createElement("button");
  restart.innerText = "Restart Quiz";
  restart.addEventListener("click", renderStartScreen);

  app.appendChild(result);
  app.appendChild(restart);
}

/* =========================
   SAVE ATTEMPT
========================= */
function saveAttempt() {
  const attempts = JSON.parse(localStorage.getItem("attempts")) || [];

  attempts.push({
    topic: state.topic,
    score: state.score,
    date: new Date().toLocaleString(),
  });

  localStorage.setItem("attempts", JSON.stringify(attempts));
}

/* =========================
   INIT
========================= */
renderStartScreen();
