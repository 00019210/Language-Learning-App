# Language-Learning-App

This web application was created to fulfill Web Technology module’s requirements and does not represent an actual company or service.

## 📘 About the App

Language Learning App is a dynamic language learning web application that enables users to create, view, update, and delete vocabulary flashcards. Each flashcard includes a word, its translation, a sample sentence, and an optional category (e.g., travel, business, food).

This application demonstrates the core principles of client-server architecture using **Express.js/Node.js**, with structured routing, controller logic, and dynamic views using Pug. It was built as coursework for the **Web Technologies (4BUIS011C)** module at **Westminster International University in Tashkent**.

---

## 🚀 How to Run the App Locally

Follow these steps to run the application on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/00019210/Language-Learning-App.git

# 2. Navigate to the project folder
cd Language-Learning-App

# 3. Install dependencies
npm install

# 4. Start the server
npm start

# 5. Open your browser and go to:
http://localhost:3000

📦 Application Dependencies

express – Web framework for handling routing and server logic

pug – Template engine for dynamic HTML rendering

express-validator – Middleware for input validation

body-parser – Parses incoming JSON/form data

uuid – Generates unique IDs for flashcards

nodemon – Auto-restarts server during development (dev only)

To install all dependencies, run:

npm install
npm i express express-validator pug body-parser nodemon

🌐 Live App and Source Code

🔗 GitHub Repository: https://github.com/00019210/Language-Learning-App

🌍 Live App: https://language-learning-app-1-qxuw.onrender.com

📁 Project Structure
/Language Learning App
├── app.js
├── package-lock.json              
├── package.json
├── .gitignore
├── /data         
│   └── flashcard.json
├── /public
│   ├── /js
│       └── script.js
│   └── /css
│       └── styles.css
│
├── /routes
│   ├── /web
│   │    ├── index.js
│   │    └── /home
│   │        └── index.js  
│   └── /api
│        ├── index.js
│        └── /flashcard
│          └── index.js  
│
├── /controllers
│   ├── /web
│   │   └── /home
│   │       └── index.js  
│   └── /api
│       └── /flashcard
│           └── index.js
│
├── /services
│   └── /flashcard
│       └── index.js
├── /validators
│   └── /flashcard
│       └── index.js
├── /views
│   ├── head.pug
│   └── /home
│       ├── add_update.pug
│       ├── index.pug


📝 Author
Name: Gulmira

Module: Web Technologies – 4BUIS011C

University: Westminster International University in Tashkent

Instructor: Jakhongir Karimov – jkarimov@wiut.uz
