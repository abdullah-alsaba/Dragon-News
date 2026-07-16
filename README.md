# 📰 Dragon News

A modern and responsive news web application built with **Next.js 16**, featuring secure authentication using **Better Auth**, category-based news browsing, and a clean user interface.

## 🌐 Live Demo

🔗 https://dragon-news-fawn-one.vercel.app/

## 📂 GitHub Repository

🔗 https://github.com/abdullah-alsaba/Dragon-News

---

## ✨ Features

- 🔐 Email & Password Authentication
- 🔑 Google OAuth Login (Better Auth)
- 📰 Browse news by category
- 📖 Read detailed news articles
- 👤 User session management
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js App Router
- 🎨 Clean and modern UI

---

## 🛠️ Technologies Used

### Frontend
- Next.js 16
- React
- Tailwind CSS
- HeroUI
- React Hook Form
- React Icons
- React Toastify

### Backend & Authentication
- Better Auth
- MongoDB
- MongoDB Adapter

### Deployment
- Vercel

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/abdullah-alsaba/Dragon-News.git
```

Go to the project directory:

```bash
cd Dragon-News
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add:

```env
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000

MONGODB_URI=your_mongodb_uri

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

Run the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
src/
 ├── app/
 ├── components/
 ├── assets/
 ├── lib/
 ├── UI/
 └── proxy.js
```

---

## 🚀 Future Improvements

- GitHub Authentication
- Bookmark News
- User Profile
- Dark Mode
- Search Functionality
- Comments System

---

## 👨‍💻 Developer

**Abdullah Al Saba**

GitHub: https://github.com/abdullah-alsaba

LinkedIn: https://www.linkedin.com/in/abdullahalsaba/

---

## 📄 License

This project is licensed under the MIT License.