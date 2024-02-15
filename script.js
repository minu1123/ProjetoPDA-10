const QuizData = [
  {
    question:
      "Qual é a linguagem de programação que é conhecida por sua simplicidade e legibilidade, com a filosofia de baterias incluídas?",
    answer_a: "Java",
    answer_b: "Python",
    answer_c: "C++",
    answer_d: "Ruby",
    correct_answer: "b",
  },
  {
    question: "Qual dos seguintes não é um tipo de dados em JavaScript?",
    answer_a: "String",
    answer_b: "Boolean",
    answer_c: "Float",
    answer_d: "Character",
    correct_answer: "c",
  },
  {
    question: "O que significa a sigla HTML?",
    answer_a: "HyperText Markup Language",
    answer_b: "High-Level Text Machine Language",
    answer_c: "HyperTransfer Markup Language",
    answer_c: "HyperText Machine Language",
    correct_answer: "a",
  },
  {
    question:
      "Qual é a principal função do CSS (Cascading Style Sheets) em desenvolvimento web?",
    answer_a: "Manipulação de banco de dados",
    answer_b: "Estilização e formatação de elementos HTML",
    answer_c: "Controle de lógica de programação",
    answer_d: "Execução de scripts do lado do servidor",
    correct_answer: "b",
  },
];

const quiz = document.getElementById("quiz");
const countQuestion = document.getElementById("count-question");
const tottleNumberofQuestion = document.getElementById("tol-num-que");
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question");
const answerLable = document.querySelectorAll(".answer-lable");
const nextQuestionbtn = document.getElementById("next-question-btn");
const allInputs = document.querySelectorAll("input[type='radio']");
const submitequiz = document.getElementById("submite");
const resultadoEl = document.getElementById("resultado");
const scoreEl = document.getElementById("score");

let correntQtn = 0;
let answerd = 0;

const loadQuiz = () => {
  countQuestion.innerHTML = `${correntQtn + 1}`;
  tottleNumberofQuestion.innerHTML = QuizData.length;
  questionNumber.innerHTML = `${correntQtn + 1}`;
  questionTitle.innerHTML = QuizData[correntQtn].question;
  answerLable[0].innerHTML = QuizData[correntQtn].a;
  answerLable[1].innerHTML = QuizData[correntQtn].B;
  answerLable[2].innerHTML = QuizData[correntQtn].C;
  answerLable[3].innerHTML = QuizData[correntQtn].D;

  reset();

  if (correntQtn == QuizData.length - 1) {
    nextQuestionbtn.style.display = "none";
    submitequiz.style.display = "block";
  }
};
const reset = () => {
  allInputs.forEach((allInputs) => {
    allInputs.checked = false;
  });
};

nextQuestionbtn.addEventListener("click", () => {
  let answer = getselected();
  if (answer) {
    if (answer === QuizData[correntQtn].correct_answer) {
      answerd++;
    }
    correntQtn++;
    if (correntQtn < QuizData.length) {
      loadQuiz();
    }
  }
});

submitequiz.addEventListener("click", () => {
  let answer = getselected();
  if (answer === QuizData[correntQtn].correct_answer) {
    answerd++;
  }
  correntQtn++;
  if (getselected()) {
    quiz.style.display = "none";
    resultadoEl.style.display = "block";
    scoreEl.innerHTML = `perguntas respondidas corretamente ${answerd} / ${QuizData.length}`;
  }
});

const getselected = () => {
  let answer;
  allInputs.forEach((allInputs) => {
    if (allInputs.checked) {
      answer = allInputs.value;
    }
  });
  return answer;
};
loadQuiz();
