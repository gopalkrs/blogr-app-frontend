# 📝 Blogr App (Frontend)

A full-stack blogging platform built with **React**, **Zustand**, and **Tailwind CSS**, featuring user authentication, blog CRUD operations, and clean responsive design.  
The backend is developed separately and integrated via REST APIs.  
Live deployment available on **Vercel**.

---

## 🚀 Tech Stack

- **Frontend**: React.js, Zustand, Tailwind CSS, Axios
- **Backend**: Node.js, Express (separate repo)
- **Database**: MongoDB / PostgreSQL
- **Deployment**: Vercel

---

## 🔑 Key Features

- ✅ User Authentication (Login / Register)
- ✅ Blog CRUD Operations (Create, Read, Update, Delete)
- ✅ RESTful API Integration
- ✅ Global State Management with Zustand
- ✅ Fully Responsive UI (Mobile-first)
- ✅ Deployed with CI/CD on Vercel

---

## 🌐 Live Demo

> https://blogr-app-frontend.vercel.app/

---

## 🧩 Folder Structure

```bash
blogr-app-frontend/
│
├── public/             # Static files
├── src/
│   ├── components/     # UI Components
│   ├── pages/          # React Router Pages
│   ├── store/          # Zustand state management
│   ├── services/       # API calls (Axios)
│   └── utils/          # Utility functions
│
├── .env.local          # Environment variables
├── package.json
└── README.md
