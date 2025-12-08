# Personal Portfolio - Jeremiah Madronio

A modern full-stack portfolio website with an AI-powered chatbot assistant.

[![Live Demo](https://img.shields.io/badge/Live-Demo-00d9ff?style=flat-square)](https://jeremiah-madronio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square)](https://www.typescriptlang.org/)

[View Live Demo](https://personal-portfolio-zeta-navy.vercel.app) • [Report Bug](https://github.com/jeremiahmadronio/personal-portfolio/issues) • [Request Feature](https://github.com/jeremiahmadronio/personal-portfolio/issues)

---

## About

Professional portfolio showcasing my journey as an aspiring Backend Software Engineer. Features a responsive design with an intelligent AI chatbot that answers questions about my skills, projects, and experience.

**Highlights:**
- AI-powered chat assistant using Google Gemini 2.0
- Modern responsive UI with dark/light mode
- Bilingual support (English & Tagalog)
- Smart contact form with spam filtering
- Optimized performance on Vercel

---

## Features

### AI Chat Assistant
- Smart question filtering to save API costs
- Bilingual responses (English/Tagalog)
- Context-aware answers about skills and projects
- Token-efficient operation

### Smart Contact Form
- AI-powered message validation
- Spam filtering before email delivery
- Gmail integration with notifications
- Automatic response to legitimate inquiries

### UI/UX
- Fully responsive design
- Dark/Light mode toggle
- Smooth animations with Framer Motion
- Filterable tech stack showcase
- Interactive project timeline

---

## Tech Stack

**Frontend:** Next.js 15, React 18, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion

**Backend & AI:** Google Gemini 2.0, Next.js API Routes, Nodemailer

**DevOps:** Vercel, Git, GitHub

---

## Getting Started

### Prerequisites
- Node.js 18+
- Google Gemini API Key ([Get one here](https://makersuite.google.com/app/apikey))
- Gmail account with App Password for contact form

### Installation

1. Clone the repository
```bash
git clone https://github.com/jeremiahmadronio/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Create `.env.local` file
```env
GEMINI_API_KEY=your_gemini_api_key_here
GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password
```

4. Run development server
```bash
npm run dev
```

5. Open http://localhost:3000

### Build for Production
```bash
npm run build
npm start
```

---

## Project Structure

```
personal-portfolio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── ai-api/route.ts       # AI chatbot endpoint
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                       # shadcn components
│   │   └── ...                       # Custom components
│   └── lib/
│       └── utils.ts
├── public/
├── screenshots/
└── package.json
```

---

## AI Chatbot

Powered by Google Gemini 2.0 Flash, the chatbot can answer questions about:
- Technical skills and expertise
- Project details and technologies
- Education and work experience
- Tech stack and tools used
- Availability for work

**Smart Filtering:** Questions are pre-validated before making API calls to reduce costs and improve response accuracy.

**Bilingual Support:** Automatically detects user language and responds accordingly.

**Example:**
```
Q: "What are Jeremiah's backend skills?"
A: "Jeremiah specializes in backend development with Java (Spring Boot), 
    Python (FastAPI), and Golang. He has experience with microservices 
    architecture, REST APIs, and databases like PostgreSQL and MongoDB."
```

---

## Smart Contact Form

The contact form uses AI to validate messages before delivery:

**Accepted Messages:**
- Job opportunities and collaboration requests
- Questions about projects or services
- Professional inquiries and networking

**Rejected Messages:**
- Spam or promotional content
- Inappropriate or offensive language
- Scam attempts or irrelevant messages

Valid messages are automatically sent to Gmail with sender details and timestamp.

---

## Featured Projects

### Budget Planner & Price Monitoring
Real-time market price tracking with microservices architecture

**Tech:** React, Spring Boot, Python, Microservices, PostgreSQL  
**Features:** Real-time scraping, budget planning, asynchronous updates, Docker containerization

### E-Commerce Platform
Full-featured online store for skincare products

**Tech:** React, Tailwind CSS, Spring Boot, Python, PostgreSQL  
**Features:** CRUD operations, inventory management, order processing, admin dashboard

### Barbershop Booking System
Appointment scheduling system for barber shops

**Tech:** React, Spring Boot, MySQL, REST APIs  
**Features:** Real-time availability, customer accounts, time slot management

---

## Screenshots

### Desktop Views

![Home Page](./screenshots/Screenshot%202025-12-07%20151359.png)
*Home page with hero section*

![About Section](./screenshots/Screenshot%202025-12-07%20151446.png)
*Background and development philosophy*

![Tech Stack](./screenshots/Screenshot%202025-12-07%20151543.png)
*Filterable technology showcase*

![Development Process](./screenshots/Screenshot%202025-12-07%20151618.png)
*4-step workflow visualization*

![Services](./screenshots/Screenshot%202025-12-07%20151731.png)
*Custom web development offerings*

![Professional Journey](./screenshots/Screenshot%202025-12-07%20151803.png)
*Timeline of experience and education*

![Featured Projects](./screenshots/Screenshot%202025-12-07%20151831.png)
*Portfolio of completed work*

### Mobile Views

![Mobile Home](./screenshots/home-mobile.png)
![Mobile About](./screenshots/about-mobile.png)
![Mobile Tech Stack](./screenshots/techstack-mobile.png)
![Mobile Process](./screenshots/how-i-work-mobile.png)
![Mobile Services](./screenshots/service-mobile.png)
![Mobile Journey](./screenshots/journey-mobile.png)
![Mobile Projects](./screenshots/projects-mobile.png)

### Features

![Dark Mode](./screenshots/darkmode.png)
*Theme toggle functionality*

![AI Chatbot](./screenshots/chatbot.png)
*Intelligent assistant in action*

---

## Roadmap

**Completed:**
- ✓ Core portfolio website
- ✓ AI chatbot integration
- ✓ Smart contact form with validation
- ✓ Gmail integration
- ✓ Dark/Light mode
- ✓ Responsive design

**Planned:**
- Blog section for technical articles
- Detailed project case studies
- Testimonials section
- Analytics dashboard
- Interactive project demos
- Chat conversation history

---

## Contact

**Jeremiah Madronio**

Portfolio: [jeremiah-madronio.vercel.app](https://jeremiah-madronio.vercel.app/)  
GitHub: [@jeremiahmadronio](https://github.com/jeremiahmadronio)  
LinkedIn: [Jeremiah Madronio](https://www.linkedin.com/in/jeremiah-madronio)  
Email: jeremiahrenzo@gmail.com

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with [Next.js](https://nextjs.org/), [shadcn/ui](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/), and [Google Gemini AI](https://ai.google.dev/)

Deployed on [Vercel](https://vercel.com/)
