# Gemini Chatbot API

Aplikasi chatbot sederhana yang mengintegrasikan **Google Gemini AI** dengan backend **Node.js (Express)** dan frontend **Vanilla JavaScript**.

## 🚀 Fitur

- **Chat Interface**: Antarmuka web sederhana untuk berinteraksi dengan chatbot.
- **Gemini Integration**: Menggunakan model `gemini-2.5-flash` untuk respon yang cepat dan akurat.
- **Context Aware**: Mendukung percakapan multi-turn (konteks percakapan dikirim ke API).
- **Responsive UI**: Tampilan chat bubble yang rapi dan responsif.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **AI Model**: Google Gemini 2.5 Flash via `@google/genai` SDK
- **Utilities**: dotenv, cors

## 📋 Prasyarat

- [Node.js](https://nodejs.org/) (v18 atau lebih baru)
- API Key dari [Google AI Studio](https://aistudio.google.com/)

## 📦 Instalasi

1. **Clone repository ini** (atau masuk ke direktori project):
   ```bash
   cd Sesi5/gemini-chatbot-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Konfigurasi Environment**:
   Buat file `.env` di root direktori project dan tambahkan API Key Anda:
   ```env
   GEMINI_API_KEY=api_key_gemini_kamu_disini
   PORT=3000
   ```

## ▶️ Menjalankan Aplikasi

1. **Jalankan server**:
   ```bash
   node index.js
   ```

2. **Buka aplikasi**:
   Buka browser dan akses: `http://localhost:3000`

## 🔌 API Endpoints

### `POST /api/chat`

Endpoint utama untuk mengirim pesan ke Gemini.

**Request Body:**
```json
{
  "conversation": [
    {
      "role": "user",
      "text": "Halo, siapa kamu?"
    }
  ]
}
```

**Response:**
```json
{
  "result": "Halo! Saya adalah model bahasa besar yang dilatih oleh Google..."
}
```

## 📂 Struktur Project

```
gemini-chatbot-api/
├── public/             # File frontend statis
│   ├── index.html      # Halaman utama
│   ├── style.css       # Styling
│   └── script.js       # Logika frontend
├── .env                # Variabel lingkungan (API Key)
├── .gitignore          # File yang diabaikan git
├── index.js            # Entry point server backend
├── package.json        # Manifest project & dependencies
└── README.md           # Dokumentasi project
```

## 📝 Catatan

- Pastikan API Key Anda valid. Jika muncul error `403 PERMISSION_DENIED`, kemungkinan API Key sudah expired atau diblokir.
- Aplikasi ini menggunakan model `gemini-2.5-flash` yang cepat dan efisien untuk penggunaan umum.
