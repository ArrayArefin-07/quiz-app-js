const question = [
  {
    question: "Which is larger animal in the world.?",
    answers: [
      { text: "shark", correct: false },
      { text: "blue whale", correct: true },
      { text: "elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is largest desert in the world.?",
    answers: [
      { text: "kalahari", correct: false},
      { text: "Gobi", correct: false },
      { text: "sahara", correct: false },
      { text: "Antarctica", correct: true },
    ]
  },
  {
    question: "Which is smallest continent in the world.?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "next";
  showQuestion();
}

function showQuestion(){
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex +1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}

startQuiz();
