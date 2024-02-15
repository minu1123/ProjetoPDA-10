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
let correctAnswers = 0;

const loadQuiz = () => {
  countQuestion.innerHTML = `${correntQtn + 1}`;
  tottleNumberofQuestion.innerHTML = quizData.length;
  questionNumber.innerHTML = `${correntQtn + 1}`;
  questionTitle.innerHTML = quizData[correntQtn].question;
  answerLable[0].innerHTML = quizData[correntQtn].answer_a;
  answerLable[1].innerHTML = quizData[correntQtn].answer_b;
  answerLable[2].innerHTML = quizData[correntQtn].answer_c;
  answerLable[3].innerHTML = quizData[correntQtn].answer_d;

  reset();

  if (correntQtn == quizData.length - 1) {
    nextQuestionbtn.style.display = "none";
    submitequiz.style.display = "block";
  }
};
const reset = () => {
  allInputs.forEach((allInputs) => {
    allInputs.checked = false;
  });
};

const nextQuestionClickHandler = () => {
  let answer = getSelected();
  if (answer) {
    if (answer === quizData[correntQtn].correct_answer) {
      correctAnswers++;
    }
    correntQtn++;
    if (correntQtn < quizData.length) {
      loadQuiz();
    }
  }
};

nextQuestionbtn.addEventListener("click", nextQuestionClickHandler);

submitequiz.addEventListener("click", () => {
  let answer = getSelected();
  if (answer === quizData[correntQtn].correct_answer) {
    correctAnswers++;
  }
  correntQtn++;
  if (getSelected()) {
    quiz.style.display = "none";
    resultadoEl.style.display = "block";
    scoreEl.innerHTML = `perguntas respondidas corretamente ${correctAnswers} / ${quizData.length}`;
  }
});

const getSelected = () => {
  let answer;
  //   allInputs.forEach((input) => {
  //     if (input.checked) {
  //       answer = input.value;
  //     }
  //   });

  answer = Array.from(allInputs)
    .filter((input) => input.checked)
    .pop().value;

  return answer;
};
loadQuiz();
