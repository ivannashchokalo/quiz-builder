# Quiz Builder

A full-stack web application for creating and managing custom quizzes.

## Tech Stack

### Frontend

- Next.js
- TypeScript
- TanStack Query
- Axios
- CSS Modules

### Backend

- Node.js
- Express
- TypeScript
- Prisma ORM
- SQLite

---

# Getting Started

## 1. Clone the repository

```bash
git clone <repository-url>
cd quiz-builder
```

---

## Backend

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL="file:./dev.db"
PORT=3000
```

Generate the Prisma Client:

```bash
npx prisma generate
```

Create the SQLite database:

```bash
npx prisma db push
```

Start the backend server:

```bash
npm run dev
```

The backend will run on:

```
http://localhost:3000
```

---

## Frontend

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

The frontend will run on:

```
http://localhost:3001
```

(or the port shown in the terminal)

---

# Database Setup

The project uses **SQLite** with **Prisma ORM**.

To initialize the database:

```bash
npx prisma generate
npx prisma db push
```

SQLite will automatically create the `dev.db` file.

---

# Creating a Test Quiz

You can create a quiz from the application UI or by sending a POST request.

Example request:

```json
{
  "title": "JavaScript Basics",
  "questions": [
    {
      "text": "JavaScript is a programming language?",
      "type": "boolean"
    },
    {
      "text": "Which company developed JavaScript?",
      "type": "input"
    },
    {
      "text": "Which of these are JavaScript frameworks?",
      "type": "checkbox",
      "options": [
        "React",
        "Vue",
        "Angular",
        "Laravel"
      ],
      "correctAnswers": [
        "React",
        "Vue",
        "Angular"
      ]
    }
  ]
}
```