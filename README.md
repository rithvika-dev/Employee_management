# Employee Management System

A full-stack web application designed for managing employees efficiently. It provides a robust backend API and a responsive, modern frontend interface.

## 🚀 Technologies Used

### Backend
- **Node.js & Express.js**: Server framework and runtime environment.
- **MongoDB & Mongoose**: NoSQL database and Object Data Modeling (ODM).
- **Authentication**: `jsonwebtoken` (JWT) for secure routing and `bcrypt/bcryptjs` for password hashing.
- **Environment**: `dotenv` for managing environment variables.
- **Middleware**: `cors` for Cross-Origin Resource Sharing, `cookie-parser` for handling cookies.

### Frontend
- **React.js (Vite)**: Lightning-fast development framework for building user interfaces.
- **State Management**: `zustand` for a small, fast, and scalable bearbones state-management solution.
- **Routing**: `react-router-dom` for dynamic routing.
- **Form Handling**: `react-hook-form` for performant, flexible, and extensible forms with easy-to-use validation.
- **Styling**: `tailwindcss` via `@tailwindcss/vite` for rapid, utility-first CSS styling.
- **HTTP Client**: `axios` for making API requests.

---

## 📁 Project Structure

The project is divided into two main directories:

### `backend/`
Contains the server-side logic, API routes, and database models.
- `/API`: Contains route handlers and controllers for processing incoming API requests.
- `/model`: Contains Mongoose schemas and database models.
- `server.js`: The main entry point for the backend server.
- `.env`: (Needs to be created) Contains environment variables such as Database URIs, JWT secrets, and port configurations.

### `frontend/`
Contains the client-side React application.
- `/src`: Holds the application source code.
  - `/components`: Reusable React components.
  - *(other standard React/Vite folders like pages, assets, store, etc.)*
- `index.html`: Main HTML template.
- `vite.config.js`: Configuration file for the Vite bundler.
- `package.json`: Frontend dependency list and scripts.

---

## ⚙️ Setup and Installation

Follow these steps to get the project running locally.

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v16 or higher recommended).
- [MongoDB](https://www.mongodb.com/) installed and running locally, or a MongoDB Atlas URI.

### 1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd employee_management
\`\`\`

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
\`\`\`bash
cd backend
npm install
\`\`\`

Create a `.env` file in the `backend/` directory and configure the necessary variables:
\`\`\`env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
\`\`\`

Start the backend server:
\`\`\`bash
npm start
\`\`\`
*(The server typically runs on `http://localhost:5000`)*

### 3. Frontend Setup
Open a new terminal window, navigate to the frontend directory, and install dependencies:
\`\`\`bash
cd frontend
npm install
\`\`\`

Start the frontend development server:
\`\`\`bash
npm run dev
\`\`\`
*(The React app will be served by Vite, usually at `http://localhost:5173`)*

---

## 🛠️ Scripts Overview

### Backend (`backend/package.json`)
- `npm start`: Starts the Express server using Node.

### Frontend (`frontend/package.json`)
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Runs ESLint to analyze the code for potential errors.
- `npm run preview`: Locally previews the production build.

---

## 📄 License
This project is licensed under the ISC License.
