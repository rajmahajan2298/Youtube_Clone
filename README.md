# 🎥 YouTube Clone (React + Redux)

A fully responsive YouTube clone built using **React**, **Redux**, **Tailwind CSS**, and modern web development practices. This project replicates core features of YouTube such as search, live chat, video playback, and a collapsible sidebar — optimized for performance and user experience.

## 🚀 Features

### ✅ 1. Collapsible Sidebar
- A dynamic sidebar that collapses/expands based on the screen size or route.
- On the **Watch Page**, the sidebar is **auto-collapsed** by default.
- In collapsed mode, only the icons (e.g., Home, Shorts, Subscriptions) are shown, preserving navigation with minimal UI.

### ✅ 2. Comment Section
- Comment section built with **dummy data** to simulate real comment threads.
- Styled using Tailwind CSS to match YouTube’s layout and hierarchy.

### ✅ 3. Live Chat Functionality
- Built using **API polling** to simulate real-time chat messages.
- Messages are handled using **Redux slices**, ensuring efficient state management.
- Continuously updates the chat window to mimic a real-time experience.

### ✅ 4. Optimized Search Functionality
- **Search Debouncing** to reduce API calls and improve performance.
- **Search Result Caching** using Redux to avoid duplicate requests.
- **Filtering and Highlighting** of search terms in the result list.

### ✅ 5. Tech Stack Highlights
- **React Router DOM** for route management
- **Redux Toolkit** for state management (search & chat)
- **Tailwind CSS** for clean and responsive UI
- **Custom Hooks** such as:
  - `useSearchParams`
  - `useLocation`
  - Debounce and caching logic for search optimization

## 🛠️ Installation

```bash
git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone
npm install
npm start

Debouncing 
  ---- Debouncing means a function will run once after event stopped firing.
  ---- If we type very fast the difference between the keystrokes is very less. And we type slow it is very high.

Debouncing is Performance Optimize

Debouncing is 200ms
 ----If it is less than 200ms don't make API Call
 ---- If it is more than 200ms call API Call.

 HOC
  ---- HOC Is a function which takes a component and returns a Component.
  ---- HOC Will take input has a component updates it and return the component.
  ---- HOC is a Pure Component which means it will not make any changes to its parent component.