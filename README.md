# Fakhr Ul Islam Portfolio (React + Vite)

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # output in dist/

## Customize (almost everything is in src/data/content.js)
- **Projects:** add an object to `projects` (category, title, description, tech, github, demo, image) and set `placeholder: false`. Put screenshots in `public/projects/` and use `image: '/projects/name.png'`.
- **Skills:** edit `skills`; change `level` (0-100) and `label`.
- **CV:** replace `public/Fakhr_Ul_Islam_CV.pdf` (keep the filename, or change `profile.cv`).
- **Profile picture:** save as `public/profile.jpg`.
- **Email / LinkedIn:** set `profile.email` and `profile.linkedin`.
- **Experience / cybersecurity work:** edit `experience` and `cyberWork`.

## Contact form
Create a free form at formspree.io, copy `.env.example` to `.env`, set `VITE_FORMSPREE_ID`. On Vercel/Netlify add the same variable in project settings. Without it, the form opens the visitor's email app addressed to `profile.email`.

## Deploy
Vercel/Netlify: import the repo, build command `npm run build`, output directory `dist`.
