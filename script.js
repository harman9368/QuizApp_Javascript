const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheeps",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Trans Product",
        b: "Hypertext Test Product",
        c: "Hey Transfer Product",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "Javascript",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');


let questionCount =0;
let score =0;

const loadQuestion = () => {
    //console.log(quizDB[0]);
    //console.log(quizDB[0].question);
    // copy the question on the referenxe question
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    // options
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
// apply forEach loop on the answers array to extract the value
      answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    }); 
return answer;
};

// to remove the default checked option
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    // to compare both the values 
    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    // to change the question
    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} GOOD </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;

        // to remove the scoreArea css property of display none
        showScore.classList.remove('scoreArea');
    }
});