# 🐱 Fatcat — AI Chatbot

A lightweight, serverless AI chatbot web app powered by **Google Gemini** and deployed on **Vercel**. The UI presents a clean chat interface (also branded as **Rabit**) where users can send messages and receive real-time AI responses.

https://rabit-rosy.vercel.app/

---

## ✨ Features

- 💬 Real-time chat interface with user and AI message bubbles
- 🤖 Powered by **Google Gemini 1.5 Flash** via the Generative Language API
- ⚡ Serverless backend using a **Vercel API Route** (`/api/chat`)
- 🎨 Minimal, responsive UI styled with plain CSS
- 🔒 API key stored securely as a **Vercel environment variable**

---

## 📁 Project Structure

```
Fatcat-main/
├── index.html      # Main chat UI
├── style.css       # Styling for the chatbox and messages
├── script.js       # Frontend logic — sends messages, renders replies
└── chat.js         # Vercel serverless function — calls the Gemini API
```

---

## 🚀 Getting Started

### Prerequisites

- A [Vercel](https://vercel.com) account
- A [Google Gemini API key](https://aistudio.google.com/app/apikey)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Fatcat.git
cd Fatcat
```

### 2. Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts to link/create a Vercel project.

### 3. Set the environment variable

In your Vercel dashboard, go to **Project → Settings → Environment Variables** and add:

| Name              | Value                   |
|-------------------|-------------------------|
| `GEMINI_API_KEY`  | `your_gemini_api_key`   |

Or via the CLI:

```bash
vercel env add GEMINI_API_KEY
```

### 4. Redeploy

```bash
vercel --prod
```

---

## 🔌 How It Works

1. The user types a message in the chat input and clicks **Send**.
2. `script.js` sends a `POST` request to `/api/chat` with the message body.
3. The Vercel serverless function in `chat.js` forwards the message to the **Gemini 1.5 Flash** API.
4. The AI response is extracted and returned as JSON `{ reply: "..." }`.
5. The frontend renders the reply in the chat window.

---

## 🛠️ Local Development

Vercel's dev server handles the API routes locally:

```bash
vercel dev
```

Then open `http://localhost:3000` in your browser.

> **Note:** Make sure your `GEMINI_API_KEY` is set in a `.env` file or via `vercel env pull` before running locally.

---

## 📦 Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | HTML, CSS, Vanilla JavaScript     |
| Backend   | Vercel Serverless Functions (Node)|
| AI Model  | Google Gemini 1.5 Flash           |
| Hosting   | Vercel                            |

---


## 📄 License

MIT License. Feel free to fork and customize!
