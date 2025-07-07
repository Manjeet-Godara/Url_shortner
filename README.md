# 🔗 URL Shortener

A simple and functional URL Shortener built with **Node.js**, **Express**, **MongoDB**, and **Vanilla JavaScript** for the frontend.

---

## 📁 Project Structure
Url_shortner/
├── Frontend/
│ ├── index.js # Frontend JS (handles user input and fetch)
│ ├── url_shortner1.html # Main UI page
│ └── url_shortner1.css # Basic styling
│
├── models/
│ └── model.js # MongoDB Schemas (User + Counter)
│
├── index_back.js # Backend server (Express + MongoDB)
├── package.json # Dependencies and scripts
├── package-lock.json # Lock file
└── README.md # You're here!


---

## 🚀 Features

- 🔗 Shortens long URLs into simple ID-based URLs.
- 🔁 Prevents duplicate short links for already shortened URLs.
- 📦 Persists data using MongoDB.
- ↪️ Redirects short links to the original full URLs.
- 🧠 Smart ID generation using a MongoDB `counter` document.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Database:** MongoDB (local instance)

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/url_shortner.git
cd url_shortner
