const questions = [
    {
        question: "Which survivor got added during chapter Curtain call?",
        answers: [
            { text: "Dwight Fairfield", correct: false },
            { text: "Kate Denson", correct: true },
            { text: "Nea Karlson", correct: false },
            { text: "Felix Richter", correct: false },
        ]
    },
    {
        question: "Who has the power called Spencer's Last Breath?",
        answers: [
            { text: "The doctor", correct: false },
            { text: "The oni", correct: false },
            { text: "The onryo", correct: false },
            { text: "The nurse", correct: true },
        ]
    }
];


const questionElement = document.getElementById("question");
const answerOptions = document.getElementById("answer-option");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

startQuiz();

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    // resetState();
    let currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion.question);
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerOptions.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
    });
}



function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerOptions.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    // resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

    nextButton.innerHTML = "Return to the fog?";

    if (score > 3) {
        questionElement.innerHTML += " Return to the fog and join us for an adventure!";
    } else {
        questionElement.innerHTML += " The entity will be aware of you.";
    }

    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        const btns = document.querySelectorAll(".btn");
        btns.forEach(btn => {
            btn.remove();
        });
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});