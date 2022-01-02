// grabbing all the elemennts
const start = document.querySelector(".start");
const start_btn = document.querySelector(".start_btn");
const rule = document.querySelector(".rule");
const cont = document.querySelector(".continue");
const exit = document.querySelector(".exit");
const quiz = document.querySelector("#quiz");
const answers = document.querySelectorAll(".answer");
const question = document.querySelector("#question");
const a = document.querySelector(".a_text");
const b = document.querySelector(".b_text");
const c = document.querySelector(".c_text");
const d = document.querySelector(".d_text");
const next_btn = document.querySelector("#n");
const result_box = document.querySelector(".result_box");
const scored = document.querySelector(".scored");
const play_again = document.querySelector(".play_again");
const quit = document.querySelector(".quit");

//what to do on clicking start button
start_btn.addEventListener("click", function() {
  start.style.display = "none";
  rule.style.display = "flex";
});

//what to do on clicking exit button
exit.addEventListener("click", function() {
  rule.style.display = "none";
  start.style.display = "contents";
});

//what to do on clicking continue button
cont.addEventListener("click", function() {
  rule.style.display = "none";
  quiz.style.display = "block";
  loadQuestions_Results();
});


//Quiz Questions
const quizQuestions = [{
    question: "1. Which of the following element is responsible for making text bold in HTML?",
    a: "<pre>",
    b: "<a>",
    c: "<b>",
    d: "<br>",
    correct: "c"
  },

  {
    question: "2. The first tag inside <TABLE> tag is _______?",
    a: "<head>",
    b: "<caption>",
    c: "<th>",
    d: "<td>",
    correct: "b"
  },

  {
    question: "3. <! Is a ______",
    a: "Comment tag",
    b: "Underlined tag",
    c: "Underlined with italic tag",
    d: "None of the above",
    correct: "a"
  },

  {
    question: "4. Which of the following element is not a block element in HTML?",
    a: "<div>",
    b: "<p>",
    c: "<span>",
    d: "<hr>",
    correct: "c"
  },

  {
    question: "5. CSS stands for - ",
    a: "Cascade style sheets",
    b: "Color and style sheets",
    c: "Cascading style sheets",
    d: "None of the above",
    correct: "c"
  },

  {
    question: "6. The CSS property used to control the element's font-size is -",
    a: "text-style",
    b: "font-size",
    c: "text-size",
    d: "None of the above",
    correct: "b"
  },

  {
    question: "7. The CSS property used to make the text bold is -",
    a: "font-weight : bold",
    b: "weight: bold",
    c: "font: bold",
    d: "style: bold",
    correct: "a"
  },

  {
    question: "8. Which type of JavaScript language is ___",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    correct: "b"
  },

  {
    question: "9. The 'function and 'var' are known as:",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    correct: "c"
  },

  {
    question: "10. In the JavaScript, which one of the following is not considered as an error:",
    a: "Syntax error",
    b: "Division by zero",
    c: "Missing of semicolons",
    d: "Missing of Bracket",
    correct: "b"
  },
]

//initializing variable for current question and score
var currentQues = 0;
var score = 0;
var data = quizQuestions[currentQues];

//a function for loading Questions and results
function loadQuestions_Results() {
  if (currentQues < quizQuestions.length) {
    question.innerText = data.question;
    a.innerText = data.a;
    b.innerText = data.b;
    c.innerText = data.c;
    d.innerText = data.d;
  } else {
    quiz.style.display = "none";
    scored.innerText = `You have scored ${score} / ${quizQuestions.length}`
    result_box.style.display = "flex";
    currentQues = 0;
    score = 0;
    data = quizQuestions[currentQues];
  }
}

// a function for updating question
function updateQuestion(index) {
  data = quizQuestions[index];
}

//setting on click attribute for each options
Array.from(answers).forEach(function(answer) {
  answer.setAttribute("onclick", "selected(this)")
});

//a function for what to do after selecting an option
function selected(answer) {
  if (answer.id === data.correct) {
    answer.classList.add("correct");
    score++;
  } else {
    answer.classList.add("wrong");
    Array.from(answers).forEach(function(answer) {
      if (answer.id === data.correct) {
        answer.classList.add("correct");
      }
    });
  }
  Array.from(answers).forEach(function(answer) {
    answer.style.pointerEvents = "none";
  });
}

// a function for deselection before moving onto next question
function deselect() {
  Array.from(answers).forEach(function(answer) {
    if (answer.classList.contains("correct") || answer.classList.contains("wrong")) {
      answer.classList.remove("correct");
      answer.classList.remove("wrong");
    }
    answer.style.pointerEvents = "auto";
  })
}

// a function for what to do after clicking next button
next_btn.addEventListener("click", function() {
  if (currentQues < quizQuestions.length) {
    currentQues++;
    updateQuestion(currentQues);
    loadQuestions_Results();
    deselect();
  }
})

// a function for what to do after clicking play again button
play_again.addEventListener("click", function() {
  result_box.style.display = "none";
  quiz.style.display = "inline-block";
  loadQuestions_Results();
})

// a function for what to do after clicking quit button
quit.addEventListener("click", function() {
  location.reload();
})
