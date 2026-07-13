// ==========================================
// GAMEPLAY STATE ENGINE (LOCAL STORAGE)
// ==========================================
let state = {
  score: 0,
  currentScenarioIndex: 0,
  hintsUsedCount: 0,
  currentLevel: 1,
  answersLog: [],
  currentScenarioHintUsed: false
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  setupEventListeners();
  loadScenario(state.currentScenarioIndex);
});

function loadStateFromStorage() {
  const savedState = localStorage.getItem('waspada_digital_state');
  if (savedState) {
    const parsed = JSON.parse(savedState);
    state = { ...state, ...parsed };
    state.currentScenarioHintUsed = false; // Reset hint usage on new load
  } else {
    // Fallback if accessed directly
    state = {
      score: 0,
      currentScenarioIndex: 0,
      hintsUsedCount: 0,
      currentLevel: 1,
      answersLog: [],
      currentScenarioHintUsed: false
    };
  }
  
  // If activeScenarios is not defined yet, generate and shuffle them by difficulty level
  if (!state.activeScenarios || state.activeScenarios.length === 0) {
    state.activeScenarios = generateShuffledScenariosByLevel();
    saveStateToStorage();
  }
  
  updateScoreUI();
}

function saveStateToStorage() {
  localStorage.setItem('waspada_digital_state', JSON.stringify(state));
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function setupEventListeners() {
  document.getElementById('btn-aman').addEventListener('click', () => handleAnswer(false));
  document.getElementById('btn-bahaya').addEventListener('click', () => handleAnswer(true));
  document.getElementById('hint-trigger').addEventListener('click', toggleHint);

  // Modal actions
  document.getElementById('feedback-next-btn').addEventListener('click', () => {
    hideModal('feedback-modal');
    goToNextScenario();
  });

  document.getElementById('level-transition-btn').addEventListener('click', () => {
    hideModal('level-transition-modal');
    loadScenario(state.currentScenarioIndex);
  });

  document.getElementById('link-inspection-close-btn').addEventListener('click', () => {
    hideModal('link-inspection-modal');
  });
}

// ==========================================
// RENDER SCENARIO
// ==========================================
function loadScenario(index) {
  if (index >= state.activeScenarios.length) {
    finishGameRedirect();
    return;
  }

  const scenario = state.activeScenarios[index];
  state.currentScenarioHintUsed = false;

  // Hide hint card on new question
  const hintCard = document.getElementById('hint-card');
  hintCard.classList.remove('active');
  document.getElementById('hint-trigger-text').innerText = "Butuh Petunjuk? (Bantuan)";

  // Update gameplay headers & stats UI
  document.getElementById('level-title').innerText = scenario.levelName;
  document.getElementById('progress-text').innerText = `Soal ${index + 1} dari ${state.activeScenarios.length}`;
  
  const percentage = ((index + 1) / state.activeScenarios.length) * 100;
  document.getElementById('progress-bar-fill').style.width = `${percentage}%`;

  // Render mock inbox email details
  document.getElementById('inbox-avatar').innerText = scenario.avatar;
  document.getElementById('inbox-sender-name').innerText = scenario.sender;
  document.getElementById('inbox-sender-address').innerText = `<${scenario.senderAddress}>`;
  document.getElementById('inbox-time').innerText = scenario.time;
  document.getElementById('inbox-subject').innerText = scenario.subject;

  let emailBodyHtml = scenario.body;
  if (scenario.actionText) {
    emailBodyHtml += `
      <div class="email-action-link-box">
        <button type="button" class="email-action-button" onclick="inspectLink('${scenario.actionUrl}')">
          ${scenario.actionText}
        </button>
      </div>
    `;
  }
  document.getElementById('inbox-body').innerHTML = emailBodyHtml;

  // Set the hint body text
  document.getElementById('hint-body').innerText = scenario.clues[0];

  // Set active state level
  state.currentLevel = scenario.level;
  saveStateToStorage();
}

// ==========================================
// CLUES AND HINTS LOGIC
// ==========================================
function toggleHint() {
  const hintCard = document.getElementById('hint-card');
  const isCurrentlyActive = hintCard.classList.contains('active');

  if (!isCurrentlyActive) {
    hintCard.classList.add('active');
    document.getElementById('hint-trigger-text').innerText = "Tutup Petunjuk";
    
    if (!state.currentScenarioHintUsed) {
      state.currentScenarioHintUsed = true;
      state.hintsUsedCount++;
      saveStateToStorage();
    }
  } else {
    hintCard.classList.remove('active');
    document.getElementById('hint-trigger-text').innerText = "Butuh Petunjuk? (Bantuan)";
  }
}

// ==========================================
// ANSWER VALIDATION ENGINE
// ==========================================
function handleAnswer(userChoiceIsPhishing) {
  const scenario = state.activeScenarios[state.currentScenarioIndex];
  const isCorrect = (userChoiceIsPhishing === scenario.isPhishing);

  // Calculate points
  let pointsAwarded = 0;
  if (isCorrect) {
    pointsAwarded = state.currentScenarioHintUsed ? 5 : 10;
  }
  state.score += pointsAwarded;
  updateScoreUI();

  // Log choices
  state.answersLog.push({
    scenarioId: scenario.id,
    sender: scenario.sender,
    userChoice: userChoiceIsPhishing,
    actualAnswer: scenario.isPhishing,
    isCorrect: isCorrect,
    pointsAwarded: pointsAwarded
  });

  saveStateToStorage();
  showFeedbackModal(isCorrect, pointsAwarded, scenario.explanation);
}

function updateScoreUI() {
  document.getElementById('coins-score').innerText = state.score;
}

// ==========================================
// MODALS MANAGEMENT
// ==========================================
function showFeedbackModal(isCorrect, reward, explanationText) {
  const overlay = document.getElementById('feedback-modal');
  const modalCard = overlay.querySelector('.modal-card');
  const icon = document.getElementById('feedback-icon');
  const title = document.getElementById('feedback-title');
  const rewardLabel = document.getElementById('feedback-reward-label');
  const explanation = document.getElementById('feedback-explanation');
  
  // Clear modal card borders classes
  modalCard.className = 'modal-card';

  if (isCorrect) {
    modalCard.classList.add('modal-card-correct');
    icon.innerHTML = '✅';
    title.innerText = 'Tepat Sekali! Hebat!';
    rewardLabel.style.display = 'inline-flex';
    rewardLabel.innerHTML = `🌟 +${reward} Koin!`;
    explanation.innerHTML = explanationText;
    createConfettiEffect(overlay);
  } else {
    modalCard.classList.add('modal-card-incorrect');
    icon.innerHTML = '🚨';
    title.innerText = 'Awas! Ini Jebakan!';
    rewardLabel.style.display = 'inline-flex';
    rewardLabel.innerHTML = `🌟 +0 Koin`;
    explanation.innerHTML = explanationText;
    
    // Trigger vibration shake animation on error
    modalCard.style.animation = 'none';
    setTimeout(() => {
      modalCard.style.animation = 'shake 0.5s ease-in-out';
    }, 10);
  }

  showModal('feedback-modal');
}

function showModal(modalId) {
  document.getElementById(modalId).classList.add('active');
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('active');
  const canvas = modal.querySelector('.confetti-canvas');
  if (canvas) canvas.innerHTML = '';
}

// ==========================================
// PROGRESS NAVIGATION GO TO NEXT
// ==========================================
function goToNextScenario() {
  const oldLevel = state.currentLevel;
  state.currentScenarioIndex++;
  saveStateToStorage();

  if (state.currentScenarioIndex < state.activeScenarios.length) {
    const nextScenario = state.activeScenarios[state.currentScenarioIndex];
    const newLevel = nextScenario.level;

    if (newLevel > oldLevel) {
      showLevelTransitionModal(oldLevel, newLevel);
    } else {
      loadScenario(state.currentScenarioIndex);
    }
  } else {
    finishGameRedirect();
  }
}

function showLevelTransitionModal(finishedLevel, newLevel) {
  const levelNames = {
    1: "Tingkat 1: Modus Umum",
    2: "Tingkat 2: Berkedok Resmi",
    3: "Tingkat 3: Spear Phishing Kompleks"
  };

  document.getElementById('transition-level-title').innerText = `Tingkat ${finishedLevel} Selesai! 🎉`;
  document.getElementById('transition-message').innerHTML = `
    Selamat! Kamu sudah menyelesaikan tantangan di <b>${levelNames[finishedLevel]}</b>.<br><br>
    Persiapkan dirimu, selanjutnya kamu akan naik ke <b>${levelNames[newLevel]}</b> dengan tingkat kesulitan dan penipuan yang lebih cerdik!
  `;
  document.getElementById('level-transition-btn').innerText = `Lanjut ke Tingkat ${newLevel} ➔`;
  
  showModal('level-transition-modal');
}

function finishGameRedirect() {
  window.location.href = 'results.html';
}

// ==========================================
// VISUAL EFFECTS: CONFETTI GENERATOR (PURE CSS)
// ==========================================
function createConfettiEffect(parentElement, numPieces = 30) {
  let canvas = parentElement.querySelector('.confetti-canvas');
  
  if (!canvas) {
    canvas = document.createElement('div');
    canvas.className = 'confetti-canvas';
    parentElement.appendChild(canvas);
  }

  canvas.innerHTML = '';
  const colors = ['#0284c7', '#0d9488', '#f59e0b', '#e11d48', '#10b981', '#6366f1'];

  for (let i = numPieces - 1; i > 0; i--) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const size = Math.random() * 8 + 6;
    const duration = Math.random() * 2 + 2;
    const delay = Math.random() * 2;
    
    piece.style.backgroundColor = color;
    piece.style.left = `${left}%`;
    piece.style.width = `${size}px`;
    piece.style.height = `${size}px`;
    piece.style.animationDuration = `${duration}s`;
    piece.style.animationDelay = `${delay}s`;
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';

    canvas.appendChild(piece);
  }
}

// ==========================================
// DIFFICULTY LEVEL-BASED SEQUENTIAL HELPERS
// ==========================================
function generateShuffledScenariosByLevel() {
  const level1 = SCENARIOS.filter(s => s.level === 1);
  const level2 = SCENARIOS.filter(s => s.level === 2);
  const level3 = SCENARIOS.filter(s => s.level === 3);

  const sequential1 = level1.slice(0, 3);
  const sequential2 = level2.slice(0, 3);
  const sequential3 = level3.slice(0, 3);

  return [...sequential1, ...sequential2, ...sequential3];
}

// ==========================================
// LINK INSPECTOR DIALOG
// ==========================================
function inspectLink(url) {
  document.getElementById('inspected-link-url').innerText = url;
  showModal('link-inspection-modal');
}

