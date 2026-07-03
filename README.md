# Hexler Media - Agency Website

A responsive multi-page website for a marketing agency built using HTML5, CSS3, Javascript and Bootstrap 5. Built as a project for my Hexler Tech Bootcamp/Internship.

**Live Demo:** [https://jawadk8.github.io/agency-website/](https://jawadk8.github.io/agency-website/)

## Tech Stack

Built using:

- HTML5
- CSS3 (custom + Flexbox/Grid)
- Bootstrap 5.3g
- Vanilla Javascript (for dark mode)
- Git/Github

## Features

Consists of the following features:

- 7 pages, semantic HTML
- Responsive layout (Flexbox/Grid + Bootstrap)
- Dark mode with persistence
- Bootstrap navbar, cards, carousel, modal, accordion
- Contact form with validation
- Lighthouse-optimized (90+)

## Folder Structure

```
agency-website/
├── assets/    (logos, images)
├── css/       (style.css, bootstrap)
├── js/        (dark-mode.js, bootstrap bundle)
├── index.html
├── about.html
├── services.html
├── portfolio.html
├── careers.html
├── contact.html
└── 404.html
```

## How to Run Locally

1. Clone the repository:

```bash
   git clone https://github.com/jawadk8/agency-website.git
```

2. Navigate into the project folder:

```bash
   cd agency-website
```

3. Open `index.html` directly in your browser, **or** for the best experience (auto-reload on changes), use the "Live Server" extension in VS Code:
   - Right-click `index.html`
   - Select "Open with Live Server"

No build step or dependencies are required — this is a static site built with plain HTML, CSS, and Bootstrap 5 (loaded via CDN).

## Known Issues

Bootstrap is loaded via CDN rather than self-hosted, which slightly affects mobile performance.

## Credits

- Built from scratch by Jawad Faiz
- With the help of Talha and Haseeb
- Built with guidance from Claude (Anthropic) for code, review, debugging and Bootstrap implementation; all code reviewed and understood by the author
