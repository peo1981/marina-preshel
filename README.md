# Marina Preshel — Personal Finance Consultant Website

## Tech Stack
- **React 18** + **Vite 5**
- Component-based architecture
- Modular CSS per component
- Responsive mobile-first design
- Real photos embedded via asset imports

## Quick Start

```bash
cd marina_preshel
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
marina_preshel/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css          # CSS variables, global styles
    ├── assets/
    │   ├── photo1.jpeg    # About section photo (B&W portrait)
    │   ├── photo2.jpeg    # Hero section photo (color portrait)
    │   └── photo3.jpeg    # Spare photo
    ├── components/
    │   ├── Nav.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Services.jsx
    │   ├── HowItWorks.jsx
    │   ├── Reviews.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    └── styles/
        ├── Nav.css
        ├── Hero.css
        ├── About.css
        ├── Services.css
        ├── HowItWorks.css
        ├── Reviews.css
        ├── Contact.css
        └── Footer.css
```

## Customization

| What              | Where                          |
|-------------------|-------------------------------|
| Contact links     | `src/components/Contact.jsx`  |
| Social links      | `src/components/Footer.jsx`   |
| Testimonials      | `src/components/Reviews.jsx`  |
| Services list     | `src/components/Services.jsx` |
| Color palette     | `src/index.css` (CSS vars)    |
| Photos            | `src/assets/`                 |

## Deploy (Netlify / Vercel)

```bash
npm run build
# Upload /dist folder to your hosting
```
