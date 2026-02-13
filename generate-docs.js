const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType, BorderStyle } = require('docx');

// Document 1: Project Overview
const createProjectOverview = () => {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Title
        new Paragraph({
          text: "TUTOR DASHBOARD - PROJECT OVERVIEW",
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 }
        }),
        
        new Paragraph({
          text: "Executive Summary",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),
        
        new Paragraph({
          children: [
            new TextRun({
              text: "The Tutor Dashboard is a comprehensive educational technology platform designed to facilitate online learning through tutor-led courses. The application provides tutors with powerful tools to manage courses, track learner progress, engage with students through AI-powered assistance, and monitor learner activity in real-time.",
              break: 1
            })
          ],
          spacing: { after: 200 }
        }),

        new Paragraph({
          text: "Key Capabilities:",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),
        
        new Paragraph({ text: "• Tutor Management - Application system for tutors to join the platform", spacing: { after: 100 } }),
        new Paragraph({ text: "• Course Management - Create and manage courses with modules and topics", spacing: { after: 100 } }),
        new Paragraph({ text: "• Learner Progress Tracking - Monitor student progress across courses and cohorts", spacing: { after: 100 } }),
        new Paragraph({ text: "• AI-Powered Chatbot - RAG (Retrieval-Augmented Generation) based assistant for learners", spacing: { after: 100 } }),
        new Paragraph({ text: "• Activity Monitoring - Real-time tracking of learner engagement and friction points", spacing: { after: 100 } }),
        new Paragraph({ text: "• Email Communication - Direct communication with learners", spacing: { after: 100 } }),
        new Paragraph({ text: "• Cohort Management - Organize learners into cohorts with specific timelines", spacing: { after: 300 } }),

        new Paragraph({
          text: "Application Type & Technology Stack",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),

        new Paragraph({
          text: "Backend Technologies:",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "• Runtime: Node.js (v20+)", spacing: { after: 80 } }),
        new Paragraph({ text: "• Framework: Express.js 4.21.2", spacing: { after: 80 } }),
        new Paragraph({ text: "• Language: TypeScript 5.6.3", spacing: { after: 80 } }),
        new Paragraph({ text: "• ORM: Prisma 6.17.0", spacing: { after: 80 } }),
        new Paragraph({ text: "• Database: PostgreSQL with vector extension", spacing: { after: 80 } }),
        new Paragraph({ text: "• Authentication: JWT + Google OAuth 2.0", spacing: { after: 80 } }),
        new Paragraph({ text: "• AI/ML: OpenAI API 6.9.0", spacing: { after: 80 } }),
        new Paragraph({ text: "• Email: Nodemailer 7.0.12", spacing: { after: 200 } }),

        new Paragraph({
          text: "Frontend Technologies:",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "• Framework: React 18.3.1", spacing: { after: 80 } }),
        new Paragraph({ text: "• Language: TypeScript 5.6.3", spacing: { after: 80 } }),
        new Paragraph({ text: "• Build Tool: Vite 7.3.1", spacing: { after: 80 } }),
        new Paragraph({ text: "• State Management: TanStack Query 5.60.5", spacing: { after: 80 } }),
        new Paragraph({ text: "• UI Components: Radix UI + Custom Components", spacing: { after: 80 } }),
        new Paragraph({ text: "• Styling: Tailwind CSS 3.4.17", spacing: { after: 80 } }),
        new Paragraph({ text: "• Forms: React Hook Form 7.55.0", spacing: { after: 80 } }),
        new Paragraph({ text: "• Animations: Framer Motion 11.13.1", spacing: { after: 300 } }),

        new Paragraph({
          text: "User Roles",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),
        new Paragraph({ text: "1. Tutor - Course creators and instructors who manage content and monitor learners", spacing: { after: 100 } }),
        new Paragraph({ text: "2. Learner - Students enrolled in courses who consume content and interact with AI assistance", spacing: { after: 100 } }),
        new Paragraph({ text: "3. Admin - Platform administrators who approve tutor applications", spacing: { after: 300 } }),

        new Paragraph({
          text: "Core Features",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),

        new Paragraph({
          text: "1. Tutor Application System",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "Prospective tutors can apply through a comprehensive application form. Admins review and approve applications, automatically creating tutor accounts with appropriate permissions.", spacing: { after: 200 } }),

        new Paragraph({
          text: "2. Course & Content Management",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "Courses are structured hierarchically: Course → Modules → Topics. Topics can be lessons, quizzes, or simulation exercises with flexible JSON-based content and video integration.", spacing: { after: 200 } }),

        new Paragraph({
          text: "3. AI-Powered Chatbot (RAG)",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "Learners can ask questions about course content and receive contextual answers. The system uses OpenAI embeddings for semantic search and GPT-3.5-turbo for response generation. Chat history is preserved per topic.", spacing: { after: 200 } }),

        new Paragraph({
          text: "4. Learner Progress Tracking",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "Tutors can monitor module completion, completion percentages, and enrollment status for all learners. Progress data is displayed in sortable, filterable tables.", spacing: { after: 200 } }),

        new Paragraph({
          text: "5. Activity Monitoring & Analytics",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "The system tracks page views, video interactions, quiz attempts, and chat messages. It derives insights like 'engaged', 'attention drift', and 'content friction' to help tutors identify at-risk learners.", spacing: { after: 200 } }),

        new Paragraph({
          text: "6. Cohort-Based Learning",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "Learners can be grouped into cohorts with specific start/end dates. Tutors can filter and track progress by cohort, enabling structured, time-bound learning experiences.", spacing: { after: 200 } }),

        new Paragraph({
          text: "7. Email Communication",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "Tutors can send emails directly to individual learners from the dashboard using the integrated SMTP service.", spacing: { after: 300 } }),

        new Paragraph({
          text: "Database Schema Overview",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),
        new Paragraph({ text: "The application uses PostgreSQL with the following core entities:", spacing: { after: 100 } }),
        new Paragraph({ text: "• Users - Stores user accounts with roles (learner, tutor, admin)", spacing: { after: 80 } }),
        new Paragraph({ text: "• Courses - Course information with modules and topics", spacing: { after: 80 } }),
        new Paragraph({ text: "• Enrollments - Links users to courses with cohort assignments", spacing: { after: 80 } }),
        new Paragraph({ text: "• Module Progress - Tracks completion status per module", spacing: { after: 80 } }),
        new Paragraph({ text: "• Cohorts - Groups of learners with timelines", spacing: { after: 80 } }),
        new Paragraph({ text: "• RAG Chat Sessions - AI chatbot conversation history", spacing: { after: 80 } }),
        new Paragraph({ text: "• Activity Events - Learner engagement tracking", spacing: { after: 80 } }),
        new Paragraph({ text: "• Course Chunks - Vector embeddings for semantic search", spacing: { after: 300 } }),

        new Paragraph({
          text: "Security Features",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),
        new Paragraph({ text: "• JWT-based authentication with short-lived access tokens (15 min)", spacing: { after: 80 } }),
        new Paragraph({ text: "• Secure refresh tokens with rotation (30 day TTL)", spacing: { after: 80 } }),
        new Paragraph({ text: "• Google OAuth 2.0 integration", spacing: { after: 80 } }),
        new Paragraph({ text: "• Role-based authorization (tutor, learner, admin)", spacing: { after: 80 } }),
        new Paragraph({ text: "• CORS protection with origin validation", spacing: { after: 80 } }),
        new Paragraph({ text: "• PII filtering in AI responses", spacing: { after: 80 } }),
        new Paragraph({ text: "• Rate limiting on sensitive endpoints", spacing: { after: 300 } }),

        new Paragraph({
          text: "Deployment Status",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),
        new Paragraph({ text: "The application is production-ready with:", spacing: { after: 100 } }),
        new Paragraph({ text: "• Verified backend and frontend functionality", spacing: { after: 80 } }),
        new Paragraph({ text: "• Database connectivity confirmed", spacing: { after: 80 } }),
        new Paragraph({ text: "• All dependencies installed and tested", spacing: { after: 80 } }),
        new Paragraph({ text: "• Standard file structure implemented", spacing: { after: 80 } }),
        new Paragraph({ text: "• Docker support available", spacing: { after: 80 } }),
        new Paragraph({ text: "• Environment configuration documented", spacing: { after: 300 } }),
      ]
    }]
  });
  
  return doc;
};

// Document 2: Technical Architecture
const createTechnicalArchitecture = () => {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          text: "TUTOR DASHBOARD - TECHNICAL ARCHITECTURE",
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 }
        }),

        new Paragraph({
          text: "System Architecture Overview",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),
        new Paragraph({ text: "The Tutor Dashboard follows a modern three-tier architecture:", spacing: { after: 100 } }),
        new Paragraph({ text: "1. Presentation Layer - React SPA (Single Page Application)", spacing: { after: 80 } }),
        new Paragraph({ text: "2. Application Layer - Express.js RESTful API", spacing: { after: 80 } }),
        new Paragraph({ text: "3. Data Layer - PostgreSQL with Prisma ORM", spacing: { after: 300 } }),

        new Paragraph({
          text: "Backend Architecture",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),

        new Paragraph({
          text: "Project Structure",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "backend-tutor/", spacing: { after: 80 } }),
        new Paragraph({ text: "  ├── src/", spacing: { after: 80 } }),
        new Paragraph({ text: "  │   ├── config/ - Environment configuration", spacing: { after: 80 } }),
        new Paragraph({ text: "  │   ├── middleware/ - Auth and role-based access", spacing: { after: 80 } }),
        new Paragraph({ text: "  │   ├── routes/ - API endpoints", spacing: { after: 80 } }),
        new Paragraph({ text: "  │   ├── services/ - Business logic", spacing: { after: 80 } }),
        new Paragraph({ text: "  │   ├── rag/ - AI/RAG implementation", spacing: { after: 80 } }),
        new Paragraph({ text: "  │   └── utils/ - Helper functions", spacing: { after: 80 } }),
        new Paragraph({ text: "  ├── prisma/ - Database schema and migrations", spacing: { after: 80 } }),
        new Paragraph({ text: "  └── scripts/ - Utility scripts", spacing: { after: 200 } }),

        new Paragraph({
          text: "Key Backend Components",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),

        new Paragraph({ text: "Authentication System:", spacing: { after: 80, before: 100 }, bold: true }),
        new Paragraph({ text: "• Google OAuth 2.0 for primary authentication", spacing: { after: 80 } }),
        new Paragraph({ text: "• JWT access tokens (15 min TTL)", spacing: { after: 80 } }),
        new Paragraph({ text: "• Refresh tokens (30 day TTL) with rotation", spacing: { after: 80 } }),
        new Paragraph({ text: "• Database-backed session management", spacing: { after: 80 } }),
        new Paragraph({ text: "• Secure HTTP-only cookies", spacing: { after: 200 } }),

        new Paragraph({ text: "RAG (Retrieval-Augmented Generation) Service:", spacing: { after: 80, before: 100 }, bold: true }),
        new Paragraph({ text: "• Text Chunker - Splits course content into semantic chunks", spacing: { after: 80 } }),
        new Paragraph({ text: "• Embedding Generation - Uses OpenAI text-embedding-3-small", spacing: { after: 80 } }),
        new Paragraph({ text: "• Semantic Search - PostgreSQL pgvector for similarity search", spacing: { after: 80 } }),
        new Paragraph({ text: "• Context Assembly - Retrieves top-K relevant chunks", spacing: { after: 80 } }),
        new Paragraph({ text: "• LLM Generation - GPT-3.5-turbo for response generation", spacing: { after: 80 } }),
        new Paragraph({ text: "• PII Protection - Filters personally identifiable information", spacing: { after: 80 } }),
        new Paragraph({ text: "• Rate Limiting - Prevents API abuse", spacing: { after: 200 } }),

        new Paragraph({ text: "Activity Tracking System:", spacing: { after: 80, before: 100 }, bold: true }),
        new Paragraph({ text: "Event Types: page_view, quiz_start, quiz_submit, chat_message, video_play, video_pause", spacing: { after: 80 } }),
        new Paragraph({ text: "Derived Statuses:", spacing: { after: 80 } }),
        new Paragraph({ text: "  • engaged - Active learning behavior", spacing: { after: 80 } }),
        new Paragraph({ text: "  • attention_drift - Repeated views without progress", spacing: { after: 80 } }),
        new Paragraph({ text: "  • content_friction - Multiple failures, excessive chat", spacing: { after: 300 } }),

        new Paragraph({
          text: "Frontend Architecture",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),

        new Paragraph({
          text: "Project Structure",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "frontend-tutor/", spacing: { after: 80 } }),
        new Paragraph({ text: "  ├── src/", spacing: { after: 80 } }),
        new Paragraph({ text: "  │   ├── components/ - Reusable UI components", spacing: { after: 80 } }),
        new Paragraph({ text: "  │   ├── pages/ - Route components", spacing: { after: 80 } }),
        new Paragraph({ text: "  │   ├── hooks/ - Custom React hooks", spacing: { after: 80 } }),
        new Paragraph({ text: "  │   ├── lib/ - API client and utilities", spacing: { after: 80 } }),
        new Paragraph({ text: "  │   ├── types/ - TypeScript definitions", spacing: { after: 80 } }),
        new Paragraph({ text: "  │   ├── utils/ - Helper functions", spacing: { after: 80 } }),
        new Paragraph({ text: "  │   └── constants/ - App constants", spacing: { after: 200 } }),

        new Paragraph({
          text: "Key Frontend Features",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "• Tutor Dashboard - Course selection, learner progress, activity monitoring", spacing: { after: 80 } }),
        new Paragraph({ text: "• AI Tutor Assistant - Chat interface with RAG service", spacing: { after: 80 } }),
        new Paragraph({ text: "• Become Tutor Page - Application form for prospective tutors", spacing: { after: 80 } }),
        new Paragraph({ text: "• Session Management - Auto-logout, heartbeat, visibility handling", spacing: { after: 80 } }),
        new Paragraph({ text: "• API Client - React Query for caching and state management", spacing: { after: 300 } }),

        new Paragraph({
          text: "Database Architecture",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),

        new Paragraph({ text: "Core Tables:", spacing: { after: 100 } }),
        new Paragraph({ text: "• users - User accounts with authentication data", spacing: { after: 80 } }),
        new Paragraph({ text: "• courses - Course metadata and structure", spacing: { after: 80 } }),
        new Paragraph({ text: "• modules - Course modules with ordering", spacing: { after: 80 } }),
        new Paragraph({ text: "• topics - Individual lessons, quizzes, simulations", spacing: { after: 80 } }),
        new Paragraph({ text: "• enrollments - User-course relationships", spacing: { after: 80 } }),
        new Paragraph({ text: "• module_progress - Completion tracking", spacing: { after: 80 } }),
        new Paragraph({ text: "• cohorts - Learner groups with timelines", spacing: { after: 80 } }),
        new Paragraph({ text: "• cohort_members - Cohort membership", spacing: { after: 80 } }),
        new Paragraph({ text: "• tutors - Tutor profiles", spacing: { after: 80 } }),
        new Paragraph({ text: "• course_tutors - Course-tutor assignments", spacing: { after: 80 } }),
        new Paragraph({ text: "• rag_chat_sessions - AI chat sessions", spacing: { after: 80 } }),
        new Paragraph({ text: "• rag_chat_messages - Chat message history", spacing: { after: 80 } }),
        new Paragraph({ text: "• course_chunks - Vector embeddings for RAG", spacing: { after: 80 } }),
        new Paragraph({ text: "• learner_activity_events - Activity tracking", spacing: { after: 200 } }),

        new Paragraph({
          text: "Key Database Features:",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "• UUID primary keys for distributed compatibility", spacing: { after: 80 } }),
        new Paragraph({ text: "• PostgreSQL pgvector extension for semantic search", spacing: { after: 80 } }),
        new Paragraph({ text: "• Strategic indexes on foreign keys and query fields", spacing: { after: 80 } }),
        new Paragraph({ text: "• Automatic createdAt and updatedAt timestamps", spacing: { after: 80 } }),
        new Paragraph({ text: "• Cascade deletes for data integrity", spacing: { after: 300 } }),

        new Paragraph({
          text: "API Endpoints",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),

        new Paragraph({ text: "Authentication (/auth):", spacing: { after: 80, before: 100 }, bold: true }),
        new Paragraph({ text: "• GET /auth/google - Initiate OAuth flow", spacing: { after: 80 } }),
        new Paragraph({ text: "• GET /auth/google/callback - OAuth callback", spacing: { after: 80 } }),
        new Paragraph({ text: "• POST /auth/refresh - Refresh access token", spacing: { after: 80 } }),
        new Paragraph({ text: "• POST /auth/logout - Logout and invalidate session", spacing: { after: 80 } }),
        new Paragraph({ text: "• GET /auth/me - Get current user info", spacing: { after: 200 } }),

        new Paragraph({ text: "Tutors (/tutors):", spacing: { after: 80, before: 100 }, bold: true }),
        new Paragraph({ text: "• GET /tutors/dashboard/courses - Get tutor's courses", spacing: { after: 80 } }),
        new Paragraph({ text: "• GET /tutors/dashboard/courses/:id/enrollments - Course enrollments", spacing: { after: 80 } }),
        new Paragraph({ text: "• GET /tutors/dashboard/courses/:id/progress - Learner progress", spacing: { after: 80 } }),
        new Paragraph({ text: "• GET /tutors/dashboard/courses/:id/activity - Activity events", spacing: { after: 80 } }),
        new Paragraph({ text: "• POST /tutors/dashboard/send-email - Send email to learner", spacing: { after: 80 } }),
        new Paragraph({ text: "• POST /tutors/dashboard/assistant - Chat with AI assistant", spacing: { after: 200 } }),

        new Paragraph({ text: "Courses (/courses):", spacing: { after: 80, before: 100 }, bold: true }),
        new Paragraph({ text: "• GET /courses - List all courses", spacing: { after: 80 } }),
        new Paragraph({ text: "• GET /courses/:slug - Get course details", spacing: { after: 80 } }),
        new Paragraph({ text: "• GET /courses/:id/modules - Get course modules", spacing: { after: 80 } }),
        new Paragraph({ text: "• POST /courses/:id/enroll - Enroll in course", spacing: { after: 200 } }),

        new Paragraph({ text: "Lessons (/lessons):", spacing: { after: 80, before: 100 }, bold: true }),
        new Paragraph({ text: "• GET /lessons/topics/:id - Get topic content", spacing: { after: 80 } }),
        new Paragraph({ text: "• POST /lessons/topics/:id/complete - Mark topic complete", spacing: { after: 80 } }),
        new Paragraph({ text: "• GET /lessons/topics/:id/chat - Get chat history", spacing: { after: 80 } }),
        new Paragraph({ text: "• POST /lessons/topics/:id/chat - Send chat message (RAG)", spacing: { after: 300 } }),

        new Paragraph({
          text: "Data Flow - Learner Learning",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),
        new Paragraph({ text: "1. Learner logs in via Google OAuth", spacing: { after: 80 } }),
        new Paragraph({ text: "2. Backend validates with Google and creates session", spacing: { after: 80 } }),
        new Paragraph({ text: "3. JWT tokens issued and stored in cookies", spacing: { after: 80 } }),
        new Paragraph({ text: "4. Learner enrolls in course", spacing: { after: 80 } }),
        new Paragraph({ text: "5. Backend creates enrollment record", spacing: { after: 80 } }),
        new Paragraph({ text: "6. Learner views lesson content", spacing: { after: 80 } }),
        new Paragraph({ text: "7. Learner asks question in AI chat", spacing: { after: 80 } }),
        new Paragraph({ text: "8. Backend generates embedding for question", spacing: { after: 80 } }),
        new Paragraph({ text: "9. Vector similarity search finds relevant content", spacing: { after: 80 } }),
        new Paragraph({ text: "10. OpenAI generates contextual response", spacing: { after: 80 } }),
        new Paragraph({ text: "11. Response saved and displayed to learner", spacing: { after: 80 } }),
        new Paragraph({ text: "12. Learner completes topic, progress updated", spacing: { after: 300 } }),

        new Paragraph({
          text: "Data Flow - Tutor Monitoring",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),
        new Paragraph({ text: "1. Tutor logs in and accesses dashboard", spacing: { after: 80 } }),
        new Paragraph({ text: "2. Selects course from dropdown", spacing: { after: 80 } }),
        new Paragraph({ text: "3. Backend queries enrollments and progress", spacing: { after: 80 } }),
        new Paragraph({ text: "4. Progress table displayed with completion percentages", spacing: { after: 80 } }),
        new Paragraph({ text: "5. Tutor views activity feed", spacing: { after: 80 } }),
        new Paragraph({ text: "6. Backend queries activity events with derived status", spacing: { after: 80 } }),
        new Paragraph({ text: "7. Tutor asks AI assistant about learner", spacing: { after: 80 } }),
        new Paragraph({ text: "8. Backend builds data snapshot for course", spacing: { after: 80 } }),
        new Paragraph({ text: "9. AI analyzes data and generates insights", spacing: { after: 80 } }),
        new Paragraph({ text: "10. Insights displayed to tutor", spacing: { after: 300 } }),

        new Paragraph({
          text: "External Integrations",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),

        new Paragraph({ text: "OpenAI API:", spacing: { after: 80, before: 100 }, bold: true }),
        new Paragraph({ text: "• GPT-3.5-turbo for chat completions", spacing: { after: 80 } }),
        new Paragraph({ text: "• text-embedding-3-small for embeddings", spacing: { after: 80 } }),
        new Paragraph({ text: "• Custom rate limiting to prevent abuse", spacing: { after: 200 } }),

        new Paragraph({ text: "Google OAuth 2.0:", spacing: { after: 80, before: 100 }, bold: true }),
        new Paragraph({ text: "• Client ID and Secret from Google Cloud Console", spacing: { after: 80 } }),
        new Paragraph({ text: "• Scopes: profile, email", spacing: { after: 80 } }),
        new Paragraph({ text: "• Redirect URI configured in OAuth consent", spacing: { after: 200 } }),

        new Paragraph({ text: "Email (SMTP):", spacing: { after: 80, before: 100 }, bold: true }),
        new Paragraph({ text: "• Nodemailer for email sending", spacing: { after: 80 } }),
        new Paragraph({ text: "• Configurable SMTP server", spacing: { after: 80 } }),
        new Paragraph({ text: "• Rate limiting on email endpoint", spacing: { after: 300 } }),

        new Paragraph({
          text: "Deployment Architecture",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),

        new Paragraph({ text: "Backend Deployment:", spacing: { after: 80, before: 100 }, bold: true }),
        new Paragraph({ text: "• Node.js runtime environment", spacing: { after: 80 } }),
        new Paragraph({ text: "• TypeScript compiled to JavaScript", spacing: { after: 80 } }),
        new Paragraph({ text: "• Prisma migrations for database schema", spacing: { after: 80 } }),
        new Paragraph({ text: "• Environment variables for configuration", spacing: { after: 80 } }),
        new Paragraph({ text: "• Docker support available", spacing: { after: 200 } }),

        new Paragraph({ text: "Frontend Deployment:", spacing: { after: 80, before: 100 }, bold: true }),
        new Paragraph({ text: "• Vite build for production", spacing: { after: 80 } }),
        new Paragraph({ text: "• Static file hosting (Vercel, Netlify)", spacing: { after: 80 } }),
        new Paragraph({ text: "• Nginx configuration for SPA routing", spacing: { after: 80 } }),
        new Paragraph({ text: "• Environment variable for API base URL", spacing: { after: 200 } }),

        new Paragraph({ text: "Database:", spacing: { after: 80, before: 100 }, bold: true }),
        new Paragraph({ text: "• PostgreSQL with pgvector extension", spacing: { after: 80 } }),
        new Paragraph({ text: "• Connection pooling via Prisma", spacing: { after: 80 } }),
        new Paragraph({ text: "• Automated backups recommended", spacing: { after: 300 } }),

        new Paragraph({
          text: "Performance Optimizations",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),
        new Paragraph({ text: "• Database indexing on foreign keys and query fields", spacing: { after: 80 } }),
        new Paragraph({ text: "• React Query caching for API responses", spacing: { after: 80 } }),
        new Paragraph({ text: "• Vite code splitting for faster loads", spacing: { after: 80 } }),
        new Paragraph({ text: "• Vector indexing for fast semantic search", spacing: { after: 80 } }),
        new Paragraph({ text: "• Rate limiting to prevent abuse", spacing: { after: 80 } }),
        new Paragraph({ text: "• Async operations for non-blocking I/O", spacing: { after: 300 } }),

        new Paragraph({
          text: "Security Measures",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 }
        }),
        new Paragraph({ text: "• JWT with short-lived access tokens", spacing: { after: 80 } }),
        new Paragraph({ text: "• Secure refresh token rotation", spacing: { after: 80 } }),
        new Paragraph({ text: "• HTTP-only cookies for token storage", spacing: { after: 80 } }),
        new Paragraph({ text: "• CORS with strict origin validation", spacing: { after: 80 } }),
        new Paragraph({ text: "• Prisma ORM prevents SQL injection", spacing: { after: 80 } }),
        new Paragraph({ text: "• Zod schema validation for inputs", spacing: { after: 80 } }),
        new Paragraph({ text: "• PII filtering in AI responses", spacing: { after: 80 } }),
        new Paragraph({ text: "• Role-based authorization middleware", spacing: { after: 300 } }),
      ]
    }]
  });
  
  return doc;
};

// Generate both documents
async function generateDocuments() {
  try {
    const doc1 = createProjectOverview();
    const doc2 = createTechnicalArchitecture();
    
    const buffer1 = await Packer.toBuffer(doc1);
    const buffer2 = await Packer.toBuffer(doc2);
    
    fs.writeFileSync('Tutor_Dashboard_Project_Overview.docx', buffer1);
    fs.writeFileSync('Tutor_Dashboard_Technical_Architecture.docx', buffer2);
    
    console.log('✅ Successfully created both Word documents:');
    console.log('   1. Tutor_Dashboard_Project_Overview.docx');
    console.log('   2. Tutor_Dashboard_Technical_Architecture.docx');
  } catch (error) {
    console.error('❌ Error generating documents:', error);
    process.exit(1);
  }
}

generateDocuments();
