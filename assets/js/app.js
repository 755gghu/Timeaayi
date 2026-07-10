/* ============================================================
   TIMEAAYI — APP CONFIG + SHARED AUTH HELPERS
   Loaded by every page (single script tag). Change API_BASE_URL
   when you deploy the backend somewhere other than your machine
   (e.g. https://api.timeaayi.com).
   ============================================================ */

const TIMEAAYI_CONFIG = {
  API_BASE_URL: "http://192.168.1.22:3000/api",
};

const TimeaayiAuth = {
  TOKEN_KEY: "timeaayi_token",
  USER_KEY: "timeaayi_user",

  saveSession(token, user) {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  },

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  },

  getUser() {
    const raw = localStorage.getItem(this.USER_KEY);
    return raw ? JSON.parse(raw) : null;
  },

  isLoggedIn() {
    return !!this.getToken();
  },

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    window.location.href = "index.html";
  },

  // Call once per page to swap Sign In / Sign Up for the user's
  // name + a logout button once they're authenticated.
  renderAuthButtons(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    if (!this.isLoggedIn()) return; // leave the default Sign In / Sign Up markup

    const user = this.getUser();
    el.innerHTML = `
      <span class="btn" style="cursor:default; background: var(--yellow);">Hi, ${user?.name?.split(" ")[0] || "there"}</span>
      <a href="select-course.html" class="btn btn-primary">My Resources</a>
      <button class="btn" id="logoutBtn" type="button">Log out</button>
    `;
    document.getElementById("logoutBtn").addEventListener("click", () => this.logout());
  },

  // Call on pages that require login (e.g. resources.html) to
  // bounce anonymous visitors back to sign in.
  requireLogin() {
    if (!this.isLoggedIn()) {
      window.location.href = `signin.html?next=${encodeURIComponent(window.location.pathname + window.location.search)}`;
    }
  },

  // Verifies the stored token is still valid by asking the backend.
  async verifySession() {
    const token = this.getToken();
    if (!token) return null;
    try {
      const res = await fetch(`${TIMEAAYI_CONFIG.API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        this.logout();
        return null;
      }
      const data = await res.json();
      return data.user;
    } catch (err) {
      console.error("Session check failed:", err);
      return null;
    }
  },
};
