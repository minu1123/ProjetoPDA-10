<<<<<<< HEAD
const QuizData = [{
    Questao: "Qual é a linguagem de programação que é conhecida por sua simplicidade e legibilidade, com a filosofia de baterias incluídas?",
    A: "Java",
    B: "Python",
    C: "C++",
    D: "Ruby",
    Correta: "b"
},
{
    Questao: "Qual linguagem é reconhecida por sua versatilidade, sendo utilizada para automação, desenvolvimento web e outras aplicações?",
    A: "Java",
    B: "CSS",
    C: "HTML",
    D: "Python",
    Correta: "d"
},
{
    Questao: "Qual linguagem é usada para estruturar o conteúdo de uma página web?",
    A: "HTML",
    B: "CSS",
    C: "Java",
    D: "Python",
    Correta: "a"
},
{
    Questao: "Qual dos seguintes não é um tipo de dados em JavaScript?",
    A: "String",
    B: "Boolean",
    C: "Float",
    D: "Character",
    Correta: "c"

},
{
    Questao: "O que significa a sigla HTML?",
    A: "HyperText Markup Language",
    B: "High-Level Text Machine Language",
    C: "HyperTransfer Markup Language",
    D: "HyperText Machine Language",
    Correta: "a"
},
{
    Questao: "Qual é a principal função do CSS (Cascading Style Sheets) em desenvolvimento web?",
    A: "Manipulação de banco de dados",
    B: "Estilização e formatação de elementos HTML",
    C: "Controle de lógica de programação",
    D: "Execução de scripts do lado do servidor",
    Correta: "b"
}, 
=======
const quizData = [
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
    answer_d: "HyperText Machine Language",
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
>>>>>>> 212d83de7ffd8bd07e85f25db6e6ffc8a3472968
];





const quiz =document.getElementById("quiz")
const countQuestion = document.getElementById("count-question");
const tottleNumberofQuestion = document.getElementById("tol-num-que");
const questionNumber =document.getElementById("question-number");
const questionTitle =document.getElementById("question");
const answerLable =document.querySelectorAll(".answer-lable");
const nextQuestionbtn =document.getElementById("next-question-btn");
const allInputs =document.querySelectorAll("input[type='radio']");
const submitequiz = document.getElementById("submite");
const resultadoEl = document.getElementById("resultado");
const scoreEl=document.getElementById("score");

let correntQtn=0;
let answerd = 0;

const loadQuiz = ()=>{
    countQuestion.innerHTML = `${correntQtn + 1}`;
    tottleNumberofQuestion.innerHTML=QuizData.length;
    questionNumber.innerHTML=`${correntQtn + 1}`;
    questionTitle.innerHTML=QuizData[correntQtn].Questao;
    answerLable[0].innerHTML=QuizData[correntQtn].A;
    answerLable[1].innerHTML=QuizData[correntQtn].B;
    answerLable[2].innerHTML=QuizData[correntQtn].C;
    answerLable[3].innerHTML=QuizData[correntQtn].D;

    reset();

if(correntQtn ==QuizData.length-1){
    nextQuestionbtn.style.display="none";
    submitequiz.style.display="block";
}

<<<<<<< HEAD
}
const reset =()=>{
    allInputs.forEach((allInputs)=>{
        allInputs.checked=false;
    })          
}

nextQuestionbtn.addEventListener("click",()=>{
 let answer =getselected();
 if(answer){
    if(answer===QuizData[correntQtn].Correta){
        answerd++;
=======
const nextQuestionClickHandler = () => {
  let answer = getSelected();
  if (answer) {
    if (answer === quizData[correntQtn].correct_answer) {
      correctAnswers++;
>>>>>>> 212d83de7ffd8bd07e85f25db6e6ffc8a3472968
    }
    correntQtn++;
    if(correntQtn<QuizData.length){
        loadQuiz();
    }
<<<<<<< HEAD
 }
=======
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
>>>>>>> 212d83de7ffd8bd07e85f25db6e6ffc8a3472968
});

submitequiz.addEventListener("click", ()=>{
    let answer =getselected();
    if(answer === QuizData[correntQtn].Correta){
        answerd++;
    };
    correntQtn++;
    if(getselected()){
        quiz.style.display="none";
        resultadoEl.style.display="block";
        scoreEl.innerHTML=`perguntas respondidas corretamente ${answerd} / ${QuizData.length}`;

    }

})

const getselected = ()=>{
    let answer;
    allInputs.forEach((allInputs)=>{
      if(allInputs.checked){
        answer = allInputs.value;
      }
    });
    return answer;
}
loadQuiz();


















