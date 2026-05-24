# Steam App Store - Home Assignment 🎮

Welcome to the **Steam App Store** Full-Stack home assignment! 
This project is designed to test your front-end development skills using **React** and **Vite**, and your ability to integrate with a simple **Express** backend.

---

## 📂 Project Structure

The project is structured as a monorepo-style workspace split into two main parts under the `src/` directory:

```text
steam-app-store/
├── src/
│   ├── server/       # Express.js backend
│   └── client/       # React + Vite frontend
├── package.json      # Global scripts for managing the workspace
└── README.md         # You are here!
```

## 🚀 Getting Started

### 1. Install Dependencies
Run the following command in the root folder to install all required packages for both the server and the client:

```bash
npm run install-all
```

### 2. Run the Server
To start the Express backend, run the following command (keep this terminal window open):

```bash
npm run start-server
```

- Backend API: `http://localhost:5000/api/games`


### 3. Run the Client
To start the Vite development server, **open a new terminal window/tab**, and run:

```bash
npm run start-client
```

- Frontend UI: `http://localhost:5173`

### ⚠️ Before moving forward: 
Please make sure that both the server and the client are up & running, and that you can successfully access them in your browser before proceeding to the next step.

---

## 🛠️ Your Mission
Your challenge is to build a functional **Steam App Store** dashboard on the client side, fetching data dynamically from the provided backend API.

### Provided Backend API
The server exposes a single endpoint that returns a list of games:

- GET `http://localhost:5000/api/games`

### Technical Specifications & Requirements
1. **Header & Branding**:
   - Display a prominent dashboard title: `"Steam App Store"`.

2. **Advanced OS Filtering (Dropdown)**:
   - Implement a dropdown/select component that filters the visible games based on their supported Operating System.
   - Available options: **Windows**, **Mac**, **Linux**, and **All**.
   - ⚠️ **Critical Requirement**: The filter must support **multi-selection** (e.g., a user should be able to select both *Windows* and *Mac* concurrently to view games that support either or both platforms).

3. **Games Display & Layout**:
   - Render an intuitive, user-friendly layout displaying all games that match the active OS filter criteria.
   - Each game card **must** clearly present the following information extracted from the API:
     - **Game Thumbnail Image** (`thumb` property)
     - **Game Title** (`title`)
     - **Original Price** (`normalPrice`)
     - **Discounted Price** (`salePrice`)
  
---

## 🌟 Bonus Challenge (Optional)

**Interactive Game Detail Modal:**
Clicking on a game's thumbnail image should open a centered modal overlay.

**Requirements:**
- **Content**: Display the game's **Title** and its full-sized banner image (`image` property).
- **Close Triggers**: Clicking a clear close button (e.g., `×`) and/or clicking *outside* the modal content (on the dark backdrop) should close it.
- **Event Handling**: Clicking *inside* the modal content must **not** close it.

---

### 💡 What We Look For
- **Code Quality & Architecture**: How you structure your component logic, manage your application state, and ensure readability.
- **Attention to UI/UX**: An intuitive, user-friendly interface that looks good and polished (feel free to use any UI library you prefer).
- **Production-Ready Mindset**: How you handle real-world asynchronous data flow and edge cases to ensure a seamless end-user experience.

**Good Luck! We can't wait to see what you build!** 🚀