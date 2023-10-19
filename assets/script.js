const questions = [
    {
        question: "Which survivor got added during chapter Curtain call?",
        a: "Dwight Fairfield",
        b: "Kate Denson",
        c: "Nea Karlson",
        d: "Felix Richter",
        correct: "b",
    },
    {
        question: "Who have the power called spencer's last breath?",
        a: "The doctor",
        b: "The oni",
        c: "The onryo",
        d: "The nurse",
        correct: "d",
    }
];

const questionElement = document.getElementById("question");
const answerOption = document.getElementById("answer-option");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.array.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild)
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}