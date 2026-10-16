# Khanpara Prit — Developer Portfolio

A personal, responsive portfolio built with semantic HTML, CSS, and vanilla JavaScript. It introduces Khanpara Prit, showcases his web development interests and skills, includes a personalized photo, and provides a gallery ready for real certificate images.

## Project structure

```text
portfolio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── profile.jpg
│   └── certificates/
│       └── README.md
└── README.md
```

## Run locally

1. Open the project folder in Visual Studio Code.
2. Open `index.html` in a browser, or install the VS Code **Live Server** extension and select **Open with Live Server**.

No package installation, framework, or build step is required. Google Fonts load when an internet connection is available; system fonts are used as a fallback.

## Features

- Responsive layout with a mobile navigation menu, active-section highlighting, and keyboard support.
- Dark/light theme toggle with a saved `localStorage` preference.
- Personal profile photo and About Me and Journey sections.
- Skills for HTML, CSS, JavaScript, Python, Node.js, MySQL, Figma, and AI prompt engineering.
- Certificate gallery with three image slots per desktop row.
- Accessible contact details, validated demo form, automatic copyright year, and back-to-top controls.
- Scroll reveal animations with reduced-motion support, visible focus states, and SEO/Open Graph metadata.

## Add your profile photo and certificates

The profile photo is [`assets/profile.jpg`](./assets/profile.jpg). To change it, replace that image with your own photo, keeping the same filename, or update the image paths and alt text in `index.html`.

To show your certificates:

1. Place your own certificate images in `assets/certificates/`, using filenames such as `certificate-1.jpg`, `certificate-2.jpg`, and `certificate-3.jpg`. These image files are not added until you supply them.
2. In `index.html`, find `<section id="certificates">` and replace each `.certificate-placeholder` `<div>` with an image link. For example:

   ```html
   <a class="certificate-preview" href="assets/certificates/certificate-1.jpg" target="_blank" rel="noreferrer">
     <img src="assets/certificates/certificate-1.jpg" alt="Accessible description of your certificate" loading="lazy">
   </a>
   ```

3. Replace “Add certificate title” with the accurate certificate name. Only include qualifications you have earned.
4. Save the files and reload the local site. Commit and push the certificate image files and HTML changes to publish them.

This portfolio is a static website: visitors cannot upload files to it. Adding certificates means placing the images in the project folder and publishing the updated files. The gallery displays three certificates across on desktop and adapts to narrower screens.

## Contact form

Phone, email, GitHub, and LinkedIn links use the contact details supplied for this portfolio. The contact form validates entries in the browser, but it does **not** send or save messages. To receive form submissions, connect a backend or form service and update both the JavaScript handler and the on-page disclosure.

## Publish with GitHub Pages

1. Push the portfolio files to your GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, and save.
4. After deployment, the site will be available at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

Alternatively, deploy the folder with another static host, such as Netlify or Cloudflare Pages.
