# Report Incident - Secure & Anonymous Reporting

> **Protect Identity. Make your community safer without compromising your safety.**

## 📖 General Overview

**Report Incident** is a next-generation platform designed to bridge the gap between citizens and law enforcement. It enables users to submit incident reports securely and anonymously, ensuring that their identity remains protected while providing vital information to authorities. With military-grade encryption and real-time processing, the platform empowers communities to take action against crime without fear of retaliation.

## 🎯 System Goals & Objectives

- **Anonymity First**: To provide a safe environment where whistleblowers and witnesses can report incidents without revealing their personal identity.
- **Real-Time Action**: To facilitate the instant verification and routing of reports to the appropriate authorities for faster response times.
- **Secure Evidence Management**: To ensure that all submitted data, including images and descriptions, is encrypted and tamper-proof.
- **Accessibility**: To offer a user-friendly interface that works seamlessly across devices, making reporting accessible to everyone.

## ✨ Key Features

- **Anonymous Reporting Wizard**: A step-by-step interface for submitting reports with categories (Emergency/Non-Emergency), descriptions, and image uploads.
- **Report Tracking**: Users can track the status of their submitted reports using a unique Report ID, ensuring transparency without requiring a login.
- **Admin Dashboard**: A centralized hub for law enforcement/moderators to view, filter, and manage incoming reports.
- **AI-Powered Analysis**: Integrated with Google Gemini to analyze uploaded images and assess incident severity automatically.
- **Real-Time Status Updates**: Reports can be updated to "Pending", "In Progress", or "Resolved", with changes reflected instantly.
- **Role-Based Access Control**: Secure authentication for admins and moderators to prevent unauthorized access to sensitive data.

## 🛠 Tech Stack

### Frontend

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/)
- **Animations**: `tailwindcss-animate`

### Backend

- **Runtime**: Next.js Server Actions & API Routes
- **Database**: [PostgreSQL](https://www.postgresql.org/) (via [Neon](https://neon.tech/))
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (v4)
- **AI Integration**: Google Generative AI SDK (Gemini)

### Tools & DevOps

- **Language**: TypeScript
- **Linting**: ESLint
- **Package Manager**: npm/pnpm/yarn

## 🗄 Database Schema (High-Level)

The application uses a relational database schema managed by Prisma. Key models include:

- **Report**: The core entity storing incident details.
  - `reportId`: Unique public identifier for tracking.
  - `type`: Emergency vs. Non-Emergency.
  - `status`: Current state (PENDING, IN_PROGRESS, DISMISSED, RESOLVED).
  - `image`: URL to the encrypted evidence image.
  - `analysis`: AI-generated insights (optional).
- **User**: Internal system users (Admins/Moderators).
  - `role`: ADMIN, MODERATOR, or USER.
  - `email`: Unique identifier for login.

## 🚀 Prerequisites & Installation

Follow these steps to get the project running locally.

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud like Neon)
- Google Gemini API Key

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/your-username/report-incident.git
    cd report-incident
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up Environment Variables**
    Create a `.env` file in the root directory and add the following:

    ```env
    DATABASE_URL="postgresql://user:password@host:port/db_name"
    NEXTAUTH_SECRET="your-super-secret-key"
    NEXTAUTH_URL="http://localhost:3000"
    GOOGLE_API_KEY="your-gemini-api-key"
    ```

4.  **Initialize Database**
    Push the Prisma schema to your database:

    ```bash
    npx prisma generate
    npx prisma db push
    ```

5.  **Run Development Server**

    ```bash
    npm run dev
    ```

6.  **Access the App**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

_Verified for Next.js 15+ compatibility._
