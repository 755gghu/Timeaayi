# Timeaayi

Study resources, organized — notes, classes, and question papers in one place.

## Structure
```
index.html            Landing page
select-course.html     University → course → semester picker
resources.html          Notes / classes / question papers for the selected course
signin.html             Sign in
signup.html             Sign up
assets/css/main.css      Shared design system (page-specific styles are inline in each page's <style>)
assets/js/app.js         API config + auth helpers (localStorage session, login/logout, header rendering)
```

## Running locally
Just open `index.html` in a browser, or serve the folder with any static server:
```
python3 -m http.server 8000
```

## Backend
Update `API_BASE_URL` in `assets/js/app.js` to point at your deployed backend
(currently set to a local dev address). Expected endpoints:
- `POST /auth/signup`
- `POST /auth/login`
- `GET /auth/me`

## Deploying to GitHub Pages
1. Push this folder's contents to a repo.
2. In repo Settings → Pages, set the source to the branch/root.
3. Done — it's a static site, no build step required.
