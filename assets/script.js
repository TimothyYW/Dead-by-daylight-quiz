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

const questionElement = document.getElementById("question")
const answerOption = document.getElementById("answer-option")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

