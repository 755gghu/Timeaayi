// assets/js/auth-config.js
// Must be loaded BEFORE app.js, signin.html, and signup.html use it.

const TIMEAAYI_CONFIG = {
  API_BASE_URL: 'https://timeaayi-backend.onrender.com' // your Render backend URL, no trailing slash
};

const TimeaayiAuth = {
  saveSession(token, user) {
    localStorage.setItem('timeaayi_token', token);
    localStorage.setItem('timeaayi_user', JSON.stringify(user));
  },

  isLoggedIn() {
    return !!localStorage.getItem('timeaayi_token');
  },

  getToken() {
    return localStorage.getItem('timeaayi_token');
  },

  getUser() {
    const raw = localStorage.getItem('timeaayi_user');
    return raw ? JSON.parse(raw) : null;
  },

  logout() {
    localStorage.removeItem('timeaayi_token');
    localStorage.removeItem('timeaayi_user');
    window.location.href = 'signin.html';
  }
};
