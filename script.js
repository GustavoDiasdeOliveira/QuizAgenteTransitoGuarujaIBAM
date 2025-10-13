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

  if (currentCategory === "todas") {
    // Simulado completo com pesos variados
    allQuestions = buildSimuladoQuestions(currentDifficulty);
    allQuestions = shuffleArray(allQuestions);
  } else {
    // Categoria única
    const categoryQuestions = getRandomQuestions(currentCategory, currentQuestionCount);
    const peso = ["transito", "legislacao", "placas"].includes(currentCategory) ? 2 : 1;
    allQuestions = categoryQuestions.map(q => ({ ...q, peso, materia: currentCategory }));
  }

  if (allQuestions.length === 0) {
    alert("Nenhuma questão encontrada para essa categoria/dificuldade.");
    return;
  }

  currentQuestions = allQuestions;
  totalQuestionsSpan.textContent = currentQuestions.length;

  difficultyBadge.textContent =
    currentCategory === "todas"
      ? "🧠 Simulado Completo"
      : currentDifficulty
      ? currentDifficulty.toUpperCase()
      : "MISTA";
  difficultyBadge.className = `difficulty-badge ${currentDifficulty || "mista"}`;

  showScreen(quizScreen);
  loadQuestion();
}

// === Pega questões aleatórias ===
function getRandomQuestions(category, count) {
  let catQuestions = [];

  if (currentDifficulty) {
    catQuestions = questionsDatabase[category]?.[currentDifficulty] || [];
  } else {
    const categoryData = questionsDatabase[category];
    if (categoryData) {
      Object.values(categoryData).forEach(diffSet => {
        catQuestions = catQuestions.concat(diffSet);
      });
    }
  }

  return shuffleArray(catQuestions).slice(0, count);
}

// === MONTA O SIMULADO COMPLETO ===
function buildSimuladoQuestions(difficulty) {
  const needed = {
    portugues: 12,
    matematica: 4,
    informatica: 10,
    especificos: 14
  };

  const selected = [];

  // Português (peso 1)
  const port = getFilteredQuestions("portugues", difficulty);
  selected.push(
    ...selectRandomFrom(port, Math.min(needed.portugues, port.length))
      .map(q => ({ ...q, peso: 1, materia: "portugues" }))
  );

  // Matemática (peso 1)
  const mat = getFilteredQuestions("matematica", difficulty);
  selected.push(
    ...selectRandomFrom(mat, Math.min(needed.matematica, mat.length))
      .map(q => ({ ...q, peso: 1, materia: "matematica" }))
  );

  // Informática (peso 1)
  const info = getFilteredQuestions("informatica", difficulty);
  selected.push(
    ...selectRandomFrom(info, Math.min(needed.informatica, info.length))
      .map(q => ({ ...q, peso: 1, materia: "informatica" }))
  );

  // Conhecimentos Específicos (peso 2)
  const trans = getFilteredQuestions("transito", difficulty);
  const legis = getFilteredQuestions("legislacao", difficulty);
  const placas = getFilteredQuestions("placas", difficulty);
  const allEsp = trans.concat(legis, placas);

  selected.push(
    ...selectRandomFrom(allEsp, Math.min(needed.especificos, allEsp.length))
      .map(q => ({ ...q, peso: 2, materia: "conhecimentos" }))
  );

  return selected;
}

// === FILTRA QUESTÕES ===
function getFilteredQuestions(category, difficulty) {
  let result = [];
  if (difficulty) {
    result = questionsDatabase[category]?.[difficulty] || [];
  } else {
    const catData = questionsDatabase[category];
    if (catData) {
      Object.values(catData).forEach(diffSet => result = result.concat(diffSet));
    }
  }
  return result;
}

// === SELECIONA ALEATÓRIAS ===
function selectRandomFrom(array, count) {
  return shuffleArray(array).slice(0, count);
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

  // Enunciado + peso
  questionText.innerHTML = `${question.question} <br><small class="peso-info">⚖️ Peso ${question.peso}</small>`;
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
  optionButtons.forEach(btn => btn.classList.add("disabled"));

  let feedbackHTML = "";

  if (selectedIndex === question.correct) {
    optionButtons[selectedIndex].classList.add("correct");
    correctAnswers++;

    // soma pontos conforme peso (1 ou 2)
    const pontosGanhos = calculatePoints(question);
    score += pontosGanhos;
    scoreSpan.textContent = score; // atualiza topo imediatamente
    feedbackHTML = `<p class="feedback correct">✅ Acertou! (+${pontosGanhos} ponto${pontosGanhos > 1 ? 's' : ''})</p>`;
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

// === Pontuação com Peso ===
function calculatePoints(question) {
  // Cada acerto vale o peso da questão (1 ou 2)
  return question && question.peso ? question.peso : 1;
}

// === Próxima Questão ===
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

// === Resultados ===
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
