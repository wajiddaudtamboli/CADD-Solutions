# CADD Solutions Portal

A modern web application for CADD (Computer-Aided Design and Drafting) solutions, featuring course management, student portal, and administrative dashboard.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/wajiddaudtamboli/CADD-Solutions.git
cd CADD-Solutions
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Configure your Supabase credentials

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Technologies Used

This project is built with:

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Framework**: shadcn/ui components
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Clerk
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router v6
- **Animations**: Framer Motion

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features

- 📚 Course management system
- 👥 Student portal with dashboard
- 🔐 Admin panel with analytics
- 🌐 Multi-language support (English, Hindi, Marathi)
- 🌙 Dark/Light theme toggle
- 📱 Fully responsive design
- 💬 Integrated chatbot
- 📝 Contact forms and testimonials
- 🎓 Scholarship application system

## Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Application pages
├── context/           # React context providers
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── services/          # API services
├── types/             # TypeScript type definitions
└── locales/           # Internationalization files
```

## Deployment

The application can be deployed to any static hosting service like Vercel, Netlify, or AWS S3.

For production deployment:
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
