// ==========================================
// RESULTS STATE ENGINE (LOCAL STORAGE)
// ==========================================
let state = {
  score: 0,
  currentScenarioIndex: 0,
  hintsUsedCount: 0,
  currentLevel: 1,
  answersLog: []
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  renderResults();
  setupEventListeners();
});

function loadStateFromStorage() {
  const savedState = localStorage.getItem('waspada_digital_state');
  if (savedState) {
    state = JSON.parse(savedState);
  }
}

// ==========================================
// RENDER STATS & PREDICATES
// ==========================================
function renderResults() {
  const totalScenarios = state.activeScenarios ? state.activeScenarios.length : 9;
  const totalCorrect = state.answersLog.filter(log => log.isCorrect).length;
  const percentage = totalScenarios > 0 ? Math.round((totalCorrect / totalScenarios) * 100) : 0;

  // Header Score
  document.getElementById('coins-score').innerText = state.score;

  // Stats Box Numbers
  document.getElementById('stat-coins').innerText = `🌟 ${state.score}`;
  document.getElementById('stat-hints').innerText = `💡 ${state.hintsUsedCount} Kali`;

  // Render Circle Progress Chart
  const circle = document.getElementById('results-progress-circle');
  if (circle) {
    circle.style.setProperty('--percentage', `${percentage}%`);
  }
  document.getElementById('results-circle-val').innerText = `${totalCorrect}/${totalScenarios}`;
  document.getElementById('results-circle-lbl').innerText = `Benar (${percentage}%)`;

  // Predicate Logic
  let predicate = "";
  let description = "";
  let badgeEmoji = "🛡️";

  if (percentage >= 90) {
    predicate = "Penjaga Bintang Lima ⭐";
    description = "Luar biasa! Kamu adalah Pelindung Utama keluarga dan seluruh warga Dusun Teluk Lombok dari segala macam kejahatan digital. Kamu jeli 100%!";
    badgeEmoji = "👑";
  } else if (percentage >= 70) {
    predicate = "Penjaga Digital Keluarga 🟢";
    description = "Sangat bagus! Kamu memiliki ketahanan digital yang tinggi. Kamu siap mengawal anggota keluarga agar aman berinternet di rumah.";
    badgeEmoji = "🛡️";
  } else if (percentage >= 40) {
    predicate = "Cukup Waspada 🟡";
    description = "Cukup baik, tetapi masih perlu hati-hati! Kamu berhasil menebak beberapa modus, namun masih ada beberapa jebakan licik yang lolos.";
    badgeEmoji = "🔍";
  } else {
    predicate = "Rentan Penipuan 🔴";
    description = "Gawat! Kamu sangat mudah terpancing oleh iming-iming dan ancaman penipu. Ayo pelajari kembali tips keselamatan siber dan coba lagi simulasi ini!";
    badgeEmoji = "⚠️";
  }

  document.getElementById('results-badge').innerText = badgeEmoji;
  document.getElementById('results-predicate').innerText = predicate;
  document.getElementById('results-predicate-desc').innerText = description;

  // Trigger celebration confetti
  createConfettiEffect(document.getElementById('results-screen'), 45);
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function setupEventListeners() {
  document.getElementById('restart-btn').addEventListener('click', () => {
    localStorage.clear();
    
    // Set fresh state
    const freshState = {
      score: 0,
      currentScenarioIndex: 0,
      hintsUsedCount: 0,
      currentLevel: 1,
      answersLog: []
    };
    
    localStorage.setItem('waspada_digital_state', JSON.stringify(freshState));
    window.location.href = '../index.html'; // Back to home
  });

  document.getElementById('view-details-btn').addEventListener('click', () => {
    if (state.answersLog.length === 0) {
      alert("Belum ada jawaban tercatat.");
      return;
    }
    
    const details = state.answersLog.map((log, index) => {
      const statusIcon = log.isCorrect ? '✅ Benar' : '❌ Salah';
      const points = `(+${log.pointsAwarded} koin)`;
      const actualType = log.actualAnswer ? 'Bahaya (Phishing)' : 'Aman (Resmi)';
      return `${index + 1}. Pengirim: ${log.sender}\n   Tipe Asli: ${actualType}\n   Jawabanmu: ${log.userChoice ? 'Bahaya' : 'Aman'} (${statusIcon} ${points})\n`;
    }).join('\n');

    alert("📊 DETAIL KINERJA JAWABAN KAMU:\n\n" + details);
  });
}

// ==========================================
// CONFETTI GENERATOR (PURE CSS)
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

  for (let i = 0; i < numPieces; i++) {
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
