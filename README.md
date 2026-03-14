# Certificates Portfolio Website

A certifications portfolio website for Baman Prasad Guragain showcasing certifications, hackathons, volunteering work, ECA activities, and awards.

**Live Site:** [certificates.bamanguragain.com.np](https://certificates.bamanguragain.com.np)

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Astro 4.x |
| UI Layer | React |
| Styling | Tailwind CSS |
| Data Source | Local JSON |
| Icons | Lucide React |
| Fonts | JetBrains Mono + Inter |
| Hosting | Vercel |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/certificates-site.git
cd certificates-site

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

---

## Project Structure

```
certificates-site/
├── public/
│   └── images/          # Certificate images
├── src/
│   ├── components/       # React components
│   │   ├── CertCard.jsx
│   │   ├── CertificatesApp.jsx
│   │   ├── FilterBar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroStats.jsx
│   │   ├── Lightbox.jsx
│   │   ├── SearchBar.jsx
│   │   └── TagPill.jsx
│   ├── data/
│   │   └── certificates.json
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

---

## Adding New Certificates

See [CERTIFICATES_GUIDE.md](./CERTIFICATES_GUIDE.md) for detailed instructions on adding new certificates.

Quick steps:
1. Add image to `public/images/`
2. Add entry to `src/data/certificates.json`
3. Run `npm run build`

---

## Contributing

Found a bug or have a UI/UX suggestion? See [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## License

MIT
