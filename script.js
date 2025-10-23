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
    allQuestions = buildSimuladoQuestions(currentDifficulty);
    allQuestions = shuffleArray(allQuestions);
  } else {
    const categoryQuestions = getRandomQuestions(currentCategory, currentQuestionCount);
    const peso = ["transito", "legislacao"].includes(currentCategory) ? 2 : 1;
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
    transito: 7,
    legislacao: 7
  };

  const selected = [];

  // Português
  const port = getFilteredQuestions("portugues", difficulty);
  selected.push(
    ...selectRandomFrom(port, Math.min(needed.portugues, port.length))
      .map(q => ({ ...q, peso: 1, materia: "portugues" }))
  );

  // Matemática
  const mat = getFilteredQuestions("matematica", difficulty);
  selected.push(
    ...selectRandomFrom(mat, Math.min(needed.matematica, mat.length))
      .map(q => ({ ...q, peso: 1, materia: "matematica" }))
  );

  // Informática
  const info = getFilteredQuestions("informatica", difficulty);
  selected.push(
    ...selectRandomFrom(info, Math.min(needed.informatica, info.length))
      .map(q => ({ ...q, peso: 1, materia: "informatica" }))
  );

  // Trânsito (CTB)
  const trans = getFilteredQuestions("transito", difficulty);
  selected.push(
    ...selectRandomFrom(trans, Math.min(needed.transito, trans.length))
      .map(q => ({ ...q, peso: 2, materia: "transito" }))
  );

  // Legislação Municipal
  const legis = getFilteredQuestions("legislacao", difficulty);
  selected.push(
    ...selectRandomFrom(legis, Math.min(needed.legislacao, legis.length))
      .map(q => ({ ...q, peso: 2, materia: "legislacao" }))
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

  questionText.innerHTML = `${question.question} <br><small class="peso-info">⚖️ Peso ${question.peso}</small>`;
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.innerHTML = option;
    button.addEventListener("click", () => selectAnswer(index));
    optionsContainer.appendChild(button);
  });
}

// === Selecionar Resposta ===
function selectAnswer(index) {
  if (hasAnswered) return;
  hasAnswered = true;

  const question = currentQuestions[currentQuestionIndex];
  const buttons = optionsContainer.querySelectorAll(".option-btn");

  question.isCorrect = index === question.correct; // marca se acertou

  buttons.forEach((btn, i) => {
    btn.classList.add("disabled");
    if (i === question.correct) btn.classList.add("correct");
    else if (i === index && i !== question.correct) btn.classList.add("wrong");
  });

  if (index === question.correct) {
    correctAnswers++;
    score += question.peso;
  } else {
    wrongAnswers++;
  }

  scoreSpan.textContent = score;
  nextBtn.classList.remove("hidden");
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

// === Mostrar Resultados ===
function showResults() {
  showScreen(resultScreen);

  const total = currentQuestions.length;
  const accuracy = ((correctAnswers / total) * 100).toFixed(1);

  finalScore.textContent = score;
  correctAnswersSpan.textContent = correctAnswers;
  wrongAnswersSpan.textContent = wrongAnswers;
  accuracySpan.textContent = `${accuracy}%`;

  // === Mostra resumo abreviado por matéria no Simulado Completo ===
  if (currentCategory === "todas") {
    const resumo = getResumoPorMateria();
    const abrevs = {
      portugues: "Port",
      matematica: "Mat",
      informatica: "Info",
      transito: "CTB",
      legislacao: "Legis"
    };

    let resumoTexto = Object.entries(resumo)
      .map(([mat, d]) => {
        const perc = ((d.acertos / d.total) * 100).toFixed(0);
        return `${abrevs[mat] || mat}: ${d.acertos}/${d.total} (${perc}%)`;
      })
      .join(" | ");

    resultMessage.innerHTML = `<b>Desempenho por Matéria:</b><br>${resumoTexto}`;
  }
}

// === RESET QUIZ ===
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
}

// === Calcula desempenho por matéria ===
function getResumoPorMateria() {
  const resumo = {};
  currentQuestions.forEach((q) => {
    if (!resumo[q.materia]) resumo[q.materia] = { total: 0, acertos: 0 };
    resumo[q.materia].total++;
    if (q.isCorrect) resumo[q.materia].acertos++;
  });
  return resumo;
}
