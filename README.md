# My project name : DevStack

## 📌 Description
DevStack is a developer tool explorer where users can browse frontend, backend, database, and tooling technologies, compare them side by side, and build their own ideal development stack by adding or removing tools from a personalized list — all in a clean, modern interface.

## 🛠️ Tech Stack
- React (with TypeScript)
- Vite – build tool & dev server
- Tailwind CSS – styling
- React use() hook + Suspense – async data fetching

## ✨ Features
- Explore & Build Your Stack
- Live Toast Notifications
- Fully Responsive Design

---

## 🧠 React Q&A

### 1. What is JSX, and why is it used in React?
**Answer:** JSX lets you write HTML-like code inside JavaScript. It makes writing UI structure and logic easier and cleaner in one place.

---

### 2. Difference between Props and State
* **Props:** Read-only data passed from a parent component to a child component.
* **State:** Private data managed inside a component that changes over time and triggers a re-render when updated.

---

### 3. What useState does and where it was used
**Answer:** `useState` creates and updates reactive data inside a component. In this project, it was used in `App.tsx` to store selected tech stack items (`stack`) and notification messages (`toast`), as well as in `Navbar.tsx` to toggle the mobile menu (`menuOpen`).

---

### 4. What useEffect does and how JSON data was loaded
**Answer:** `useEffect` runs side effects after a component renders, such as fetching API data. In this project, instead of `useEffect`, React's new `use()` hook and `<Suspense>` were used to fetch and handle `/alldata.json`.

---

### 5. Why unique key props are needed in .map()
**Answer:** The `key` prop helps React identify which items changed, were added, or were removed. It keeps list updates fast and prevents rendering bugs.

---

### 6. What Conditional Rendering is and an example
**Answer:** Conditional rendering shows different UI elements based on a condition. For example, showing "No technologies selected" in `Readlist.tsx` when `stack.length === 0`, and showing the item count when items exist.

---

### 7. Passing data between Parent and Child
* **Parent to Child:** The parent passes data to the child using **props**.
* **Child to Parent:** The parent passes a **callback function** as a prop, which the child calls to send data back.