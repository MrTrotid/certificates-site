# Certificates Website - Adding New Certificates

This document outlines how to add new certificates to the website without causing alignment errors or issues.

---

## 1. Image Guidelines

### Location
Place all certificate images in: `public/images/`

### Resolution & Size
| Property | Value |
|----------|-------|
| Recommended Width | 800px |
| Aspect Ratio | 16:9 (landscape) |
| Format | JPG, PNG, or WebP |
| Max File Size | 200KB (for fast loading) |

### Image Naming
Name images descriptively. Examples:
- `Learn Python Basics.jpg`
- `Networking Basics.jpg`
- `Introduction to Cybersecurity.jpg`

### How to Reference Images
```json
"image": "/images/your-certificate-name.jpg"
```

---

## 2. JSON Data Structure

All certificates are stored in: `src/data/certificates.json`

### Full Schema
```json
{
  "id": "unique-id-kebab-case",
  "title": "Certificate Title - Keep under 80 characters",
  "issuer": "Issuing Organization Name",
  "category": "certification | hackathon | volunteering | eca | award | YOUR_CUSTOM_CATEGORY",
  "date": "YYYY-MM (e.g., 2024-06)",
  "expiry": "YYYY-MM or null",
  "description": "Brief description, 1-3 sentences, max 200 characters recommended",
  "image": "/images/filename.jpg",
  "credential_id": "ABC123 or null",
  "verify_url": "https://example.com/verify or null",
  "tags": ["tag1", "tag2", "tag3"],
  "featured": true
}
```

### Field Details

| Field | Required | Notes |
|-------|----------|-------|
| `id` | Yes | Must be unique, kebab-case |
| `title` | Yes | Keep under 80 characters |
| `issuer` | Yes | Organization name |
| `category` | Yes | Auto-generates filter tabs |
| `date` | Yes | Format: YYYY-MM |
| `expiry` | No | Format: YYYY-MM or null |
| `description` | Yes | Max 200 chars, 1-3 sentences |
| `image` | Yes | Path starting with `/images/` |
| `credential_id` | No | Shows in credential box |
| `verify_url` | No | Links to verification page |
| `tags` | Yes | Array of strings, max 8 |
| `featured` | No | Currently not used |

### Category Values
Add any category value - it will automatically appear in filters:
- `certification` → Course Certifications
- `hackathon` → Competitions
- `volunteering` → Volunteering
- `eca` → ECA
- `award` → Awards
- Or create your own (e.g., `research`, `publication`)

---

## 3. Adding a New Certificate

### Step 1: Add Image
1. Save your certificate image to `public/images/`
2. Name it descriptively (e.g., `Python Basics.jpg`)

### Step 2: Update JSON
Add a new entry to `certificates.json`:

```json
{
  "id": "python-basics-new",
  "title": "Python Basics",
  "issuer": "Programiz",
  "category": "certification",
  "date": "2024-07",
  "expiry": null,
  "description": "Completed Python Basics course covering fundamental programming concepts.",
  "image": "/images/Python Basics.jpg",
  "credential_id": "ABC123XYZ",
  "verify_url": "https://example.com/verify",
  "tags": ["python", "programming", "basics"],
  "featured": false
}
```

### Step 3: Rebuild
```bash
npm run build
```

---

## 4. Features

### Card Layout
- All cards have consistent layout using flexbox
- Content sections: Image → Badge → Title → Meta → Description → Tags → Credentials
- Credentials section pushed to bottom with `mt-auto` for alignment
- Long IDs truncate with "..." and show full on hover

### Lightbox
- Click any certificate image to enlarge
- Blurred dark background (70% opacity)
- Close by clicking X, clicking outside, or pressing Escape

### Credentials Box
- Shows credential ID (if available)
- Shows "Verify Credential" button (if verify_url provided)
- Styled consistently in a single horizontal row

---

## 5. Common Issues & Solutions

### Images Not Showing
- Check path: must start with `/images/`
- Ensure file exists in `public/images/`
- Check file extension matches (jpg vs jpeg)

### Alignment Issues
- Keep title under 80 characters
- Keep description under 200 characters
- Use 16:9 aspect ratio for images
- Cards automatically align using flexbox

### Filter Not Showing Category
- Categories are auto-generated from JSON
- Just add a new category value and it will appear

### Long Credential IDs
- IDs truncate with "..." in the card
- Full ID shows on hover (tooltip)
- IDs display in a single horizontal row

---

## 6. Example Entries

### With Credential ID and Verify URL
```json
{
  "id": "google-cybersecurity-cert",
  "title": "Google Cybersecurity Certificate",
  "issuer": "Google / Coursera",
  "category": "certification",
  "date": "2024-06",
  "expiry": null,
  "description": "Completed a 6-course program covering foundations of cybersecurity, network security, Linux, SQL, and Python.",
  "image": "/images/Google Cybersecurity Certificate.jpg",
  "credential_id": "GCC-2024-BPG",
  "verify_url": "https://coursera.org/verify/GCC-2024-BPG",
  "tags": ["cybersecurity", "python", "linux", "networking"],
  "featured": false
}
```

### With Only Credential ID (Credly)
```json
{
  "id": "networking-basics-cisco",
  "title": "Networking Basics",
  "issuer": "Cisco",
  "category": "certification",
  "date": "2026-03",
  "expiry": null,
  "description": "Completed Cisco Networking Basics course covering fundamental networking concepts.",
  "image": "/images/Networking Basics.jpg",
  "credential_id": "0aae43e2-1a99-4e09-a8e1-88ae00501496",
  "verify_url": "https://www.credly.com/badges/0aae43e2-1a99-4e09-a8e1-88ae00501496/public_url",
  "tags": ["networking", "cisco", "basics"],
  "featured": false
}
```

### Without Credentials
```json
{
  "id": "python-basics-programiz",
  "title": "Python Basics",
  "issuer": "Programiz",
  "category": "certification",
  "date": "2024-07",
  "expiry": null,
  "description": "Completed Python Basics course covering fundamental programming concepts.",
  "image": "/images/Learn Python Basics.jpg",
  "credential_id": null,
  "verify_url": null,
  "tags": ["python", "programming"],
  "featured": false
}
```

---

## 7. Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 8. Deployment

After adding certificates:
```bash
git add .
git commit -m "feat: add new certificate"
git push
```

Vercel will auto-deploy in ~30 seconds.

---

## 9. Security Measures

This website includes the following security headers:

### Applied Security Headers

| Header | Value | Purpose |
|--------|-------|---------|
| X-Frame-Options | DENY | Prevents clickjacking - site cannot be embedded in iframes |
| X-Content-Type-Options | nosniff | Prevents MIME type sniffing |
| X-XSS-Protection | 1; mode=block | XSS filter in browsers |
| Referrer-Policy | strict-origin-when-cross-origin | Controls referrer info |
| Permissions-Policy | camera=(), microphone=(), geolocation=() | Blocks unnecessary permissions |
| Strict-Transport-Security | max-age=31536000 | Enforces HTTPS |
| Content-Security-Policy | Custom policy | Restricts resources |

### CSP Details
- `default-src 'self'` - Only same-origin by default
- `script-src` - Allows self + Credly scripts
- `style-src` - Allows self + Google Fonts
- `img-src` - Allows data: and https images
- `frame-src` - Only Credly for badges

### Files Modified
- `src/layouts/BaseLayout.astro` - Meta tags
- `vercel.json` - Server-level headers

---

## 10. Reporting Issues

Found a bug or have a suggestion? See [CONTRIBUTING.md](./CONTRIBUTING.md).
