# Personal Developer Portfolio

A polished, responsive personal portfolio built with semantic HTML, CSS, and vanilla JavaScript. It uses an original dark-first visual system, a custom CSS-drawn coding illustration and project previews, accessible navigation, project filters, a persistent theme switch, and an honest client-side-only contact form.

## Project structure

```text
portfolio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── projects/
└── README.md
```

The `assets/projects/` directory is reserved for your own optimized project screenshots. The current hero art and project concepts are drawn in HTML and CSS, so no photos, image downloads, frameworks, or build step are required.

## Run locally

1. Open the project folder in Visual Studio Code.
2. Open `index.html` in a browser. For a local development server, install the **Live Server** extension in VS Code, right-click `index.html`, and select **Open with Live Server**.
3. Change the text, links, and colors in `index.html` and `styles.css`; update interactions in `script.js`.

The page loads Google Fonts when online and falls back to local system fonts when offline. No package installation is required.

## Features

- Sticky, keyboard-friendly navigation with a responsive hamburger menu and active section indicator.
- Dark/light mode with a `localStorage` preference and an updated browser theme color.
- Smooth section navigation, IntersectionObserver reveal effects, and reduced-motion support.
- Filterable concept project cards (All, JavaScript, Web apps, and UI projects).
- Accessible, client-side contact form validation with clear, truthful status messages.
- Automatic copyright year and accessible back-to-top controls.
- Responsive desktop, tablet, and mobile layouts; visible focus states and a skip link.
- Search and Open Graph metadata.

## Make it yours

1. Replace every `Your Name`, `yourname`, and `YN` placeholder in `index.html` with your name and initials. Update the `<title>`, description, and Open Graph text in the document head.
2. Replace the sample About copy, skills list, and Journey entries with accurate details. The existing education, course, and experience examples are explicitly marked as placeholders; do not leave them looking like real qualifications.
3. Replace the four concept cards with projects you have actually built. Update their titles, descriptions, categories, and technology badges. Set each “Live demo” and “Source” link to a real destination. The current project concepts are not claims of completed work.
4. Add optimized screenshots under `assets/projects/` and use them in the matching project previews if desired. Provide descriptive `alt` text for every content image.
5. Replace `hello@example.com` with an address you monitor. The GitHub link currently points to [Khanpara-Prit](https://github.com/Khanpara-Prit); replace it if necessary. Add a real LinkedIn profile URL to the contact section.
6. The contact form validates in the browser only and does **not** send or save anything. To receive messages, connect a server endpoint or a form service (for example, Formspree), then update the submit handler and the on-page disclosure in `index.html` to match the integration.
7. Update the metadata, accent colors, and any other personal details before you publish.

## Publish with GitHub Pages

1. Create a GitHub repository and push these files to its default branch (usually `main`).
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
4. Wait for the deployment check to finish. Your site will be available at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

Alternatively, upload the folder to any static host that serves `index.html` (such as Netlify, Cloudflare Pages, or Vercel). No compilation is required.
