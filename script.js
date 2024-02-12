const QuizData = [{
    Questao: "Qual é a linguagem de programação que é conhecida por sua simplicidade e legibilidade, com a filosofia de baterias incluídas?",
    A: "Java",
    B: "Python",
    C: "C++",
    D: "Ruby",
    Correta: "b"
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
    }
    correntQtn++;
    if(correntQtn<QuizData.length){
        loadQuiz();
    }
 }
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


















