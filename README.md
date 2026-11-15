# Chilaka Babhitha — Personal Portfolio Website

A bespoke, responsive portfolio website created for **Chilaka Babhitha**, B.Tech student (2nd Year) at **Jain University**, aspiring software developer, and participant in the **Smart India Hackathon (SIH)**.

## ✨ Highlights & Features
- **Editorial Slate & Teal Aesthetic:** Clean typography (`Plus Jakarta Sans`, `Outfit`, `JetBrains Mono`), vertical side rails, and high-contrast accessibility.
- **Dark & Light Mode Switcher:** Smooth instant theme switching persisted with `localStorage` and OS preference detection.
- **High-Resolution Portrait Integration:** Features Chilaka Babhitha's portrait photo set in an arched frame with ambient glowing gradients.
- **Interactive "Student Gap Analyser" Live Simulator:** Real-time mini-demo enabling visitors/recruiters to test gap calculations across Python, FastAPI, and Java.
- **Featured Project Modal:** 4-stage architectural breakdown with problem statement, system architecture, sample FastAPI endpoints, and remedial modeling.
- **Printable Executive Resume Modal:** Designed after modern two-column executive resumes, complete with a one-click `window.print()` trigger for clean PDF export.
- **Interactive Skills Filter:** Categorized view for Programming Languages, Backend & Frameworks, and Web Standards.
- **One-Click Contact & QR Code:** Fast clipboard email copy (`chilakababhitha@gmail.com`), direct phone call link (`+91 7337432621`), scannable QR code (`assets/qr-contact.svg`), and interactive contact form.

## 📂 Project Structure
```text
babhitha-portfolio/
├── index.html           # Main semantic HTML5 document
├── styles.css           # Complete styling, dark/light themes, animations & print rules
├── script.js            # Interactive behaviors, simulator widget, modals & form logic
├── assets/
│   ├── portrait.png     # Portrait photo of Chilaka Babhitha
│   └── qr-contact.svg   # Scannable email QR code SVG
└── README.md            # Documentation
```

## 🚀 How to Run Locally

You can launch a simple local development server:

```bash
# Navigate to the project directory
cd /Users/bunnyroyal/.gemini/antigravity/scratch/babhitha-portfolio

# Start a local HTTP server
python3 -m http.server 8080
```

Then open your browser and navigate to:
```text
http://localhost:8080
```
