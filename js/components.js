// ==========================================
// SHARED HEADER AND FOOTER INJECTION ENGINE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Determine if the current page is inside the subfolder "pages/"
  const isSubPage = window.location.pathname.includes("/pages/");
  const prefix = isSubPage ? "../" : "";

  // 1. Render Shared Header
  const headerPlaceholder = document.getElementById("app-header");
  if (headerPlaceholder) {
    headerPlaceholder.className = "app-header";
    headerPlaceholder.innerHTML = `
      <div class="container nav-container">
        <a href="${prefix}index.html" class="logo">
          <span class="logo-shield">🛡️</span> Waspada<span>Digital</span>
        </a>
        <nav class="header-nav">
        <a href="${prefix}index.html" class="header-nav-link header-nav-link-primary">🚀 Mulai Simulasi</a>
          <a href="${prefix}pages/edukasi.html" class="header-nav-link">📖 Kenali Phishing</a>
        </nav>
        <div class="score-tracker">
          🌟 <span id="coins-score">0</span> Koin
        </div>
      </div>
    `;
  }

  // 2. Render Shared Footer
  const footerPlaceholder = document.getElementById('app-footer');
  if (footerPlaceholder) {
    footerPlaceholder.className = 'app-footer';
    footerPlaceholder.innerHTML = `
      <div class="container">
        <p>© 2026 Dusun Teluk Lombok - Waspada Digital</p>
        <p style="font-size: 0.85rem; margin-top: 8px; color: var(--color-text-muted);">
          Dirancang & Dikembangkan oleh <b>Muh Ghazy Daffa Sampe</b>
        </p>
        <div style="margin-top: 12px; display: flex; gap: 16px; justify-content: center; align-items: center;">
          <a href="https://instagram.com/exogamer007" target="_blank" style="display: flex; align-items: center; gap: 6px; font-weight: 600; color: #e1306c; text-decoration: none;">
            📸 Instagram
          </a>
          <a href="https://github.com/EXOGAMER007" target="_blank" style="display: flex; align-items: center; gap: 6px; font-weight: 600; color: #333; text-decoration: none;">
            💻 GitHub
          </a>
        </div>
      </div>
    `;
  }

  // 3. Keep Coin Tracker Sync (from localStorage)
  updateCoinsTrackerHeader();
});

// Sync Coins Score from LocalStorage globally on load
function updateCoinsTrackerHeader() {
  const savedState = localStorage.getItem("waspada_digital_state");
  if (savedState) {
    const parsed = JSON.parse(savedState);
    const coinsScoreElement = document.getElementById("coins-score");
    if (coinsScoreElement) {
      coinsScoreElement.innerText = parsed.score || 0;
    }
  }
}
