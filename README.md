# CADD Solutions Training Portal

## Project Overview
This project is a production-style training institute portal for CADD Solutions. It combines a marketing website, course discovery experience, inquiry flows, scholarship information, and internal dashboards (admin/student mock modules) in one responsive React application.

The focus of this build is practical usability: fast navigation, clear CTAs, multilingual support, and mobile-first accessibility for students and working professionals.

## Key Features
- Route-based multi-page experience with section-aware navigation
- Fully functional homepage anchors (Home, Services, Software Courses, Projects, Contact)
- Course listing with search/filter and detail pages
- Scholarship page with direct inquiry action
- Contact form flow with WhatsApp message handoff
- Admin dashboard module with local/mock API behavior
- Student portal module with sidebar navigation
- Dark/light theme support
- Multi-language context integration (English, Hindi, Marathi)

## Tech Stack
- Frontend: React 18, TypeScript, Vite
- UI: Tailwind CSS, shadcn/ui, Framer Motion, Lucide Icons
- State & Data: TanStack React Query, Context API
- Routing: React Router v6
- Auth Integration: Clerk (optional via environment variable)
- Dev Tools: ESLint, PostCSS

## Project Architecture / Folder Structure
```text
src/
   components/
      layout/       # Navigation, footer, shared layout blocks
      sections/     # Landing page sections
      ui/           # Reusable UI components
      admin/        # Admin dashboard modules
   context/        # Theme and language providers
   pages/          # Route-level screens
   services/       # Local/mock API service layer
   hooks/          # Shared hooks
   types/          # TypeScript interfaces
   locales/        # Translation dictionaries
```

## Setup & Installation Guide
1. Clone the repository.
2. Install dependencies.
3. Configure environment variables.
4. Start the development server.

```bash
git clone https://github.com/wajiddaudtamboli/CADD-Solutions.git
cd CADD-Solutions
npm install
```

Create/update `.env`:

```bash
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Usage Instructions
- Open the app and navigate via top navbar or footer quick links.
- Browse courses from the courses page and open detailed course views.
- Use scholarship and course CTAs to jump directly to contact/inquiry flow.
- Submit contact details to launch pre-filled WhatsApp inquiry.
- Access admin and student modules from their dedicated routes:
   - `/admin`
   - `/student-portal`

## Screenshots or UI Highlights
- Home page hero with animated sections and responsive navigation
- Service grids for CAD and software tracks
- Project showcase gallery
- Contact center with map embed and inquiry form
- Admin dashboard and student portal mock workflows

If you want to include image previews in this README, you can place them under a `docs/screenshots/` directory and reference them here.

## Future Improvements
- Replace mock API layer with production backend endpoints
- Add form submission persistence and lead tracking dashboard
- Add role-based route guards for admin/student areas
- Add automated component and route-level tests
- Improve Lighthouse performance score with media optimization

## Developer Information
Developer:
Wajid Daud Tamboli  
Full Stack Developer  
Phone: +91 9667033839  
Email: wajiddaudtamboli123@gmail.com  

Development Portfolio: https://tech-world-ai.vercel.app/  
UI/UX Portfolio (Figma): https://jargon-savant-75370195.figma.site/  
Framer Portfolio: https://portfolio-wajid-daud-tamboli.framer.website/  

LinkedIn: https://www.linkedin.com/in/wajid-daud-tamboli-3217b031a/  
GitHub: https://github.com/wajiddaudtamboli  
