# 🚀 Mini Client Dashboard

A **frontend-focused mini client dashboard** built using **React**, inspired by real-world SaaS admin panels.  
The application displays a list of users, supports search and pagination, and shows detailed user information in a clean, responsive UI.

---

## 🛠️ Setup Steps

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/KislaySatyaj/client-dashboard
2.  Navigate to the project folder:
    ```bash
    cd client-dashboard
3. Install dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm start
5. Open the browser and visit:
   ```bash
   http://localhost:3000

🧠 Approach & Assumptions

🔹 Approach
   - Built using React functional components and hooks (useState, useEffect).
   - Followed a component-based architecture for better readability and reusability.
   - Integrated a public API and handled all major UI states:
      - ⏳ Loading (using skeleton loaders)
      - ❌ Error state
      - 📭 Empty state
   - Implemented client-side search and pagination for smooth user experience.
   - Used a modal-based design to show user details without page navigation.
   - Focused on clean UI, consistent spacing, readable typography, and subtle hover effects.

🔹 Assumptions
      - The API does not provide user status, so Active / Inactive status is generated randomly for display.
      - Since the dataset is small, client-side pagination is sufficient.
      - No heavy UI libraries were used to keep the code lightweight and easy to understand.

✨ Features
  - 📋 User dashboard with card-based layout
  - 🔍 Search users by name
  - 📄 Client-side pagination
  - 👤 User details modal
  - 🦴 Skeleton loader while fetching data
  - ⚠️ Error & empty state handling
  - 📱 Responsive design (mobile + desktop)

🔮 What I Would Improve With More Time
 If given more time, I would:
  - 🎨 Move inline styles to a scalable styling solution (Tailwind CSS / CSS Modules)
  - 🔃 Add sorting options (by name or status)
  - ♿ Improve accessibility (keyboard navigation, ARIA labels)
  - 🧪 Add unit tests for key components
  - 🌐 Implement server-side pagination for large datasets
  - ✨ Add smoother animations for modal transitions


🛠 Tech Stack
  
  - React
  - JavaScript (ES6)
  - HTML & CSS
  - JSONPlaceholder Public API

📌 Notes
This project was built as part of a Frontend / Full Stack Intern assignment, with a focus on:

  - Clean UI
  - Good UX
  - Maintainable code
  - Real-world dashboard behavior





