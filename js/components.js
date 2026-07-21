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
    const path = window.location.pathname;
    const isEdukasiPage = path.includes("edukasi.html");
    const isTutorialPage = path.includes("tutorial.html");
    const isGameplayPage = path.includes("gameplay.html");
    const isResultsPage = path.includes("results.html");
    
    // Sembunyikan navigasi jika pengguna sedang berada di dalam rangkaian simulasi
    const hideNav = isTutorialPage || isGameplayPage || isResultsPage;

    const simClass = isEdukasiPage ? "header-nav-link" : "header-nav-link header-nav-link-primary";
    const eduClass = isEdukasiPage ? "header-nav-link header-nav-link-primary" : "header-nav-link";

    let navHtml = '';
    if (!hideNav) {
      navHtml = `
        <nav class="header-nav">
          <a href="${prefix}index.html" class="${simClass}">🚀 Mulai Simulasi</a>
          <a href="${prefix}pages/edukasi.html" class="${eduClass}">📖 Kenali Phishing</a>
        </nav>
      `;
    }

    headerPlaceholder.className = "app-header";
    headerPlaceholder.innerHTML = `
      <div class="container nav-container">
        <a href="${prefix}index.html" class="logo">
          <span class="logo-shield">🛡️</span> Waspada<span>Digital</span>
        </a>
        ${navHtml}
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> Instagram
          </a>
          <a href="https://github.com/EXOGAMER007" target="_blank" style="display: flex; align-items: center; gap: 6px; font-weight: 600; color: #333; text-decoration: none;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> GitHub
          </a>
        </div>
      </div>
    `;
  }

  // 3. Keep Coin Tracker Sync (from localStorage)
  updateCoinsTrackerHeader();

  // 4. Load Twemoji and parse all emojis into SVGs
  const twemojiScript = document.createElement('script');
  twemojiScript.src = "https://cdn.jsdelivr.net/npm/@twemoji/api@latest/dist/twemoji.min.js";
  twemojiScript.crossOrigin = "anonymous";
  twemojiScript.onload = () => {
    twemoji.parse(document.body, { 
      folder: 'svg', 
      ext: '.svg'
    });
  };
  document.head.appendChild(twemojiScript);
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
