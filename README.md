# AI Chatbot Project 🤖

An intelligent AI-powered chatbot application with a modern React frontend and a robust Node.js backend leveraging the OpenAI API for natural language processing. This project demonstrates full-stack development skills and integration with advanced AI services.

---

## 🚀 Features

- **Interactive Chat Interface:** Clean and responsive React UI for smooth user experience.
- **Express Backend:** Secure and efficient API server handling chatbot requests.
- **OpenAI Integration:** Uses OpenAI’s powerful language models to generate human-like responses.
- **Real-time Communication:** Fast asynchronous messaging between frontend and backend.
- **Modular and Scalable:** Easily extendable architecture for future enhancements.
- **Cross-Origin Support:** CORS enabled for seamless frontend-backend communication.

---

## 📂 Project Structure

      ```plaintext
      ai-chatbot/
      ├── backend/            # Node.js backend server code
      │   ├── server.js       # Express server with OpenAI API integration
      │   ├── package.json    # Backend dependencies and scripts
      │   └── .env            # Environment variables (API keys etc.)
      │
      ├── frontend/           # React frontend application
      │   ├── src/            # React components and styles
      │   ├── public/         # Static assets
      │   ├── package.json    # Frontend dependencies and scripts
      │   └── README.md       # React app README
      │
      └── README.md           # Project overview and instructions


---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v16 or above recommended)
- npm or yarn
- OpenAI API key (sign up at [OpenAI](https://platform.openai.com/))

---

### Steps to run locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Bajrang007/ai-chatbot.git
   cd ai-chatbot
2. **Setup backend:**

   ```bash
   cd backend
   npm install

3. **Add your OpenAI API key in a .env file inside backend folder:**

   ```bash
   OPENAI_API_KEY=your_api_key_here
   PORT=5000


4. **Start backend server:**

   ```bash
   npm start

5. **Setup frontend (in a new terminal):**

   ```bash
   cd frontend
   npm install
   npm start

6. Open [http://localhost:3000](http://localhost:3000) and chat away!


## Tech Stack

| Technology | Purpose                 |
|------------|-------------------------|
| React      | Frontend UI             |
| Node.js    | Backend runtime         |
| Express    | Backend web framework   |
| OpenAI API | AI language model       |
| npm        | Package management      |
| CORS       | Cross-origin handling   |

## Author

- Name: Bajrang Kumar  
- GitHub: [https://github.com/Bajrang007](https://github.com/Bajrang007)


