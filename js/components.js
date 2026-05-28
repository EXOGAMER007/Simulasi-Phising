// ==========================================
// SHARED HEADER AND FOOTER INJECTION ENGINE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Determine if the current page is inside the subfolder "pages/"
  const isSubPage = window.location.pathname.includes('/pages/');
  const prefix = isSubPage ? '../' : '';

  // 1. Render Shared Header
  const headerPlaceholder = document.getElementById('app-header');
  if (headerPlaceholder) {
    headerPlaceholder.className = 'app-header';
    headerPlaceholder.innerHTML = `
      <div class="container nav-container">
        <a href="${prefix}index.html" class="logo">
          <span class="logo-shield">🛡️</span> Waspada<span>Digital</span>
        </a>
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
        <p>© 2026 Dusun Teluk Lombok - Program Ketangkasan Keamanan Siber Desa.</p>
        <p style="font-size: 0.75rem; margin-top: 6px; color: var(--color-text-light);">
          Didesain secara bersahabat (family-friendly) untuk melatih warga desa mengenali kejahatan digital.
        </p>
      </div>
    `;
  }

  // 3. Keep Coin Tracker Sync (from localStorage)
  updateCoinsTrackerHeader();
});

// Sync Coins Score from LocalStorage globally on load
function updateCoinsTrackerHeader() {
  const savedState = localStorage.getItem('waspada_digital_state');
  if (savedState) {
    const parsed = JSON.parse(savedState);
    const coinsScoreElement = document.getElementById('coins-score');
    if (coinsScoreElement) {
      coinsScoreElement.innerText = parsed.score || 0;
    }
  }
}
