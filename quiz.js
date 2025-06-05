const quizData = [
  {
    question: "Which of the following is a sign of an investment scam?",
    answers: {
      a: "Guaranteed high returns with no risk",
      b: "MAS registration",
      c: "Slow growth over years"
    },
    correctAnswer: "a"
  },
  {
    question: "What should you do before investing?",
    answers: {
      a: "Call your friend",
      b: "Trust your gut",
      c: "Check MAS Investor Alert List"
    },
    correctAnswer: "c"
  },
  {
    question: "What does 'ADD' stand for in scam prevention?",
    answers: {
      a: "Add money to invest fast",
      b: "Add privacy and security features",
      c: "Add new apps daily"
    },
    correctAnswer: "b"
  }
];

function buildQuiz() {
  const quizContainer = document.getElementById("quiz");
  const output = [];

  quizData.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (let letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} : ${currentQuestion.answers[letter]}
        </label><br>`
      );
    }

    output.push(
      `<div class="question"><strong>${currentQuestion.question}</strong></div>
      <div class="answers">${answers.join("")}</div><br>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = document.querySelectorAll(".answers");
  let score = 0;

  quizData.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      score++;
      answerContainer.style.color = "green";
    } else {
      answerContainer.style.color = "red";
    }
  });

  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

buildQuiz();

document.getElementById("submit").addEventListener("click", showResults);
