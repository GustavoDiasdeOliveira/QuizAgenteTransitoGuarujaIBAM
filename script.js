// === Estado do Quiz ===
let currentCategory = "";
let currentDifficulty = "";
let currentQuestionCount = 10;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let hasAnswered = false;

// === Elementos DOM ===
const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const categorySelect = document.getElementById("category");
const numQuestionsSelect = document.getElementById("num-questions");
const difficultySelect = document.getElementById("difficulty");
const startBtn = document.querySelector(".btn.start");

const progressFill = document.querySelector(".progress-fill");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const difficultyBadge = document.querySelector(".difficulty-badge");
const questionImage = document.querySelector(".question-image");
const questionText = document.querySelector(".question-text");
const optionsContainer = document.querySelector(".options-container");
const nextBtn = document.getElementById("next-btn");

const resultIcon = document.querySelector(".result-icon");
const resultTitle = document.querySelector(".result-title");
const finalScore = document.querySelector(".final-score");
const correctAnswersSpan = document.getElementById("correct-answers");
const wrongAnswersSpan = document.getElementById("wrong-answers");
const accuracySpan = document.getElementById("accuracy");
const resultMessage = document.querySelector(".result-message");
const restartBtn = document.getElementById("restart-btn");

// === Iniciar Quiz ===
startBtn.addEventListener("click", () => {
  currentCategory = categorySelect.value;
  currentDifficulty = difficultySelect.value;
  const numValue = numQuestionsSelect.value;

  // Se escolher "simulado", força 40 questões
  currentQuestionCount = numValue === "simulado" ? 40 : parseInt(numValue);

  startQuiz();
});

// === Reiniciar Quiz ===
restartBtn.addEventListener("click", () => {
  resetQuiz();
  showScreen(homeScreen);
});

// === Mostrar Tela ===
function showScreen(screen) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  screen.classList.add("active");
}

// === Iniciar Quiz ===
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  correctAnswers = 0;
  wrongAnswers = 0;

  let allQuestions = [];

  // ✅ Caso selecione "todas as matérias", juntar todas as categorias
  if (currentCategory === "todas") {
    Object.keys(questionsDatabase).forEach((cat) => {
      if (currentDifficulty) {
        // pega apenas o nível escolhido
        allQuestions = allQuestions.concat(questionsDatabase[cat][currentDifficulty] || []);
      } else {
        // pega todas as dificuldades
        Object.values(questionsDatabase[cat]).forEach((diffSet) => {
          allQuestions = allQuestions.concat(diffSet);
        });
      }
    });
  } else {
    // Categoria específica
    if (currentDifficulty) {
      allQuestions = questionsDatabase[currentCategory]?.[currentDifficulty] || [];
    } else {
      // Qualquer dificuldade — junta todas dentro da categoria
      const categoryData = questionsDatabase[currentCategory];
      if (categoryData) {
        Object.values(categoryData).forEach((diffSet) => {
          allQuestions = allQuestions.concat(diffSet);
        });
      }
    }
  }

  if (allQuestions.length === 0) {
    alert("Nenhuma questão encontrada para essa categoria/dificuldade.");
    return;
  }

  // embaralha e corta na quantidade escolhida
  currentQuestions = shuffleArray([...allQuestions]).slice(0, currentQuestionCount);

  totalQuestionsSpan.textContent = currentQuestions.length;
  difficultyBadge.textContent = currentDifficulty ? currentDifficulty.toUpperCase() : "🧠 Simulado";
  difficultyBadge.className = `difficulty-badge ${currentDifficulty || "mista"}`;

  showScreen(quizScreen);
  loadQuestion();
}

// === Embaralhar ===
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// === Carregar Questão ===
function loadQuestion() {
  hasAnswered = false;
  nextBtn.classList.add("hidden");

  const question = currentQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
  progressFill.style.width = `${progress}%`;
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  scoreSpan.textContent = score;

  if (question.image) {
    questionImage.classList.add("show");
    questionImage.innerHTML = `<img src="${question.image}" alt="Imagem da questão">`;
  } else {
    questionImage.classList.remove("show");
    questionImage.innerHTML = "";
  }

  questionText.textContent = question.question;
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(index));
    optionsContainer.appendChild(button);
  });
}

// === Selecionar Resposta ===
function selectAnswer(selectedIndex) {
  if (hasAnswered) return;
  hasAnswered = true;

  const question = currentQuestions[currentQuestionIndex];
  const optionButtons = document.querySelectorAll(".option-btn");
  optionButtons.forEach((btn) => btn.classList.add("disabled"));

  let feedbackHTML = "";

  if (selectedIndex === question.correct) {
    optionButtons[selectedIndex].classList.add("correct");
    correctAnswers++;
    score += calculatePoints();
    feedbackHTML = `<p class="feedback correct">✅ Acertou!</p>`;
  } else {
    optionButtons[selectedIndex].classList.add("wrong");
    optionButtons[question.correct].classList.add("correct");
    wrongAnswers++;
    feedbackHTML = `<p class="feedback wrong">❌ Errou!</p>`;
  }

  if (question.explanation) {
    feedbackHTML += `<p class="explanation">${question.explanation}</p>`;
  }

  const feedbackDiv = document.createElement("div");
  feedbackDiv.className = "feedback-container";
  feedbackDiv.innerHTML = feedbackHTML;
  optionsContainer.appendChild(feedbackDiv);

  nextBtn.classList.remove("hidden");
}

// === Pontuação ===
function calculatePoints() {
  switch (currentDifficulty) {
    case "facil": return 5;
    case "medio": return 10;
    case "dificil": return 15;
    default: return 5; // dificuldade mista
  }
}

// === Botão Próxima Questão ===
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

// === Mostrar Resultados ===
function showResults() {
  showScreen(resultScreen);

  finalScore.textContent = score;
  correctAnswersSpan.textContent = correctAnswers;
  wrongAnswersSpan.textContent = wrongAnswers;

  const accuracy = Math.round((correctAnswers / currentQuestions.length) * 100);
  accuracySpan.textContent = `${accuracy}%`;

  if (accuracy === 100) {
    resultIcon.innerHTML = "🏆";
    resultTitle.textContent = "Perfeito!";
    resultMessage.textContent = "Você gabaritou o quiz!";
  } else if (accuracy >= 70) {
    resultIcon.innerHTML = "👏";
    resultTitle.textContent = "Muito bem!";
    resultMessage.textContent = "Ótimo desempenho! Continue estudando!";
  } else {
    resultIcon.innerHTML = "💪";
    resultTitle.textContent = "Continue praticando!";
    resultMessage.textContent = "Revise os conteúdos e tente novamente!";
  }
}

// === Resetar Quiz ===
function resetQuiz() {
  currentCategory = "";
  currentDifficulty = "";
  currentQuestionCount = 10;
  currentQuestions = [];
  currentQuestionIndex = 0;
  score = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  hasAnswered = false;

  categorySelect.value = "portugues";
  numQuestionsSelect.value = "5";
  difficultySelect.value = "";
}
