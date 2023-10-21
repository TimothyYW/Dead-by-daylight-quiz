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
    },
    {
        question: "Whose survivor portrait is this?",
        image: "assets/images/character_portrait.jpg",
        answers: [
            { text: "Nicolas Cage", correct: true },
            { text: "Nea Karlson", correct: false },
            { text: "Claudette Morales", correct: false },
            { text: "Felix Richter", correct: false },
        ]
    },
    {
        question: "Who is the fattest killer in Dead by daylight?",
        answers: [
            { text: "The Executioner", correct: false },
            { text: "The Clown", correct: true },
            { text: "The Legion", correct: false },
            { text: "The Shape", correct: false },
        ]
    },
    {
        question: "Who came to the fog bringing the park called Boon:Circle of Healing?",
        answers: [
            { text: "David King", correct: false },
            { text: "Nea Karlson", correct: false },
            { text: "Zarina Kassier", correct: false },
            { text: "Mikahela Reid", correct: true },
        ]
    },
    {
        question: "Which killer, whose real name is Susie?",
        answers: [
            { text: "The Legion", correct: true },
            { text: "The Cenobite", correct: false },
            { text: "The Oni", correct: false },
            { text: "The Wraith", correct: false },
        ]
    },
    {
        question: "Whose killer portrait is this?",
        image: "assets/images/killer_portrait.jpg",
        answers: [
            { text: "The Pleague", correct: false },
            { text: "The Onryo", correct: false },
            { text: "The Spirit", correct: true },
            { text: "The Oni", correct: false },
        ]
    },
    {
        question: "Which survivor that have association with the killer name The Trickster?",
        answers: [
            { text: "Yumi Kimura", correct: false },
            { text: "Jake Park", correct: false },
            { text: "Yun-Jin-Lee", correct: true },
            { text: "Feng Min", correct: false },
        ]
    },
    {
        question: "Who is the killer with the nickname The Skull Merchant",
        answers: [
            { text: "Herman Carter", correct: false },
            { text: "Adriana Imai", correct: true },
            { text: "Caleb Qinn", correct: false },
            { text: "Amanda Young", correct: false },
        ]
    },
    {
        question: "Which survivor that have a Lebanese origin?",
        answers: [
            { text: "Zarina Kassier", correct: true },
            { text: "Ada Wong", correct: false },
            { text: "Meg Thomas", correct: false },
            { text: "Gabriel Soma", correct: false },
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
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    if (currentQuestion.image) {
        const questionImage = document.getElementById("question-image");
        questionImage.src = currentQuestion.image;
    }

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

    if (score < 5) {
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