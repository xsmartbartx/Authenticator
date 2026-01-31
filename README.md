# Authenticator

A modular authentication code generator project (2FA / TOTP) designed for browser and server-side usage.

---

## 🧠 Project Description

**Authenticator** is an application for generating one-time authentication codes (such as TOTP), built with a modular architecture that separates client and server responsibilities.

It can be used as:

- A standalone 2FA application
- A security module for larger systems
- An authentication component for web platforms
- A developer-ready base for auth-related tooling

The repository is structured into two main parts:

- `client` — user interface / frontend layer
- `server` — backend API and authentication logic

---

## 🚀 Features

- One-time code generation (TOTP)
- Multi-secret / multi-account support
- Client + server modular architecture
- Easy integration with login systems
- Extensible project structure
- Security-focused design baseline

---

## 📦 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/xsmartbartx/Authenticator.git
cd Authenticator
```

### 2️⃣ Install dependencies
Backend
cd server
npm install

Frontend
cd ../client
npm install

## 🛠 Configuration

Configure environment variables using .env files.

Example:

PORT=3000
JWT_SECRET=secure_secret_here
TOKEN_EXPIRATION=300


If an example config exists:

cp .env.example .env


Then edit values as needed.

## ▶️ Running the Project
Backend
cd server
npm start


Backend default address:

http://localhost:3000

Frontend
cd client
npm start


Frontend default address:

http://localhost:5173
git clone https://github.com/xsmartbartx/Authenticator.git
cd Authenticator
