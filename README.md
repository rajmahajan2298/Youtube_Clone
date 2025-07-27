🎥 YouTube Clone (React + Redux)
A fully responsive YouTube clone built using React, Redux, Tailwind CSS, and modern web development practices. This project replicates core features of YouTube such as search, live chat, video playback, theme toggling, and a collapsible sidebar — optimized for performance and user experience.

🚀 Features
✅ 1. Collapsible Sidebar
A dynamic sidebar that collapses/expands based on screen size or route.

On the Watch Page, the sidebar is auto-collapsed by default.

In collapsed mode, only icons (e.g., Home, Shorts, Subscriptions) are shown for compact navigation.

✅ 2. Comment Section
Structured using dummy data to simulate nested comment threads.

Styled with Tailwind CSS for layout consistency with YouTube.

✅ 3. Live Chat Functionality
Simulates real-time messaging using API polling.

Integrated with Redux slices for managing chat state.

Auto-refreshing messages to provide a dynamic user experience.

✅ 4. Optimized Search Functionality
Debounced input to minimize API calls.

Result caching using Redux to prevent unnecessary re-fetching.

Highlighted search keywords in the result list.

✅ 5. Tech Stack Highlights
React Router DOM for client-side routing

Redux Toolkit for centralized state management

Tailwind CSS for responsive and modern UI

Custom Hooks including:

useSearchParams

useLocation

Custom debounce and caching logic

✅ 6. Dark Mode / Light Mode Toggle
Seamless theme switching using Tailwind’s dark mode utility.

Uses a toggle button to switch between dark and light themes.

Tailwind classes conditionally applied using dark: variant for color consistency.

Theme preference persists across pages for improved UX.