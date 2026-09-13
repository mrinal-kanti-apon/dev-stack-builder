# 🚀 Dev Stack Builder

> **Explore technologies. Build your stack. Start building.**

Dev Stack Builder is a modern, responsive React application designed to help developers explore popular web technologies and create a personalized development stack.

The project presents technology information through clean, reusable UI components and allows users to interactively add, remove, and manage technologies in their own stack.

---

## 🌐 Project Links

- - **Live Website:** https://ideal-development-stack.netlify.app/
- **GitHub Repository:** `https://github.com/mrinal-kanti-apon/dev-stack-builder`

---

## ✨ Key Features

### 🧭 Responsive Navigation

- Sticky navigation bar
- Home, Technologies, Projects, About and Contact sections
- Responsive mobile navigation
- Sign In and Sign Up actions
- Smooth section-based navigation

### 🎯 Hero Section

- Modern two-tone heading
- Shared orange → pink → violet brand gradient
- Responsive developer-focused banner
- Primary and secondary call-to-action buttons
- Technology and category highlights

### 🧩 Technology Explorer

Technology information is loaded dynamically from a JSON file instead of being hardcoded inside the component.

Each technology contains:

- Technology name
- Category
- Description
- Icon
- Rating
- Difficulty level
- Badge

### 🛠️ Stack Builder

Users can create their own technology stack by:

- Adding technologies
- Preventing duplicate selections
- Removing individual technologies
- Removing the complete stack
- Viewing the total selected technology count
- Seeing the selected technologies in a dedicated stack panel

### 🔔 Interactive Feedback

React Toastify provides feedback for important user actions:

- Technology added
- Duplicate technology attempt
- Technology removed
- Stack cleared

### ⏳ Loading & Error States

The application handles asynchronous JSON loading with:

- Loading spinner
- Loading message
- Error state
- Graceful UI fallback

### 📱 Responsive UI

The interface adapts across:

- Mobile devices
- Tablets
- Desktop screens

Technology cards use responsive grid layouts while the stack panel adapts to the available screen space.

---

## 🛠️ Technology Stack

| Technology     | Purpose                               |
| -------------- | ------------------------------------- |
| React          | Building the user interface           |
| TypeScript     | Type-safe development                 |
| Vite           | Development and production build tool |
| Tailwind CSS   | Utility-first styling                 |
| DaisyUI        | UI utilities and components           |
| React Toastify | User notifications                    |
| Lucide React   | Interface icons                       |
| JSON           | Technology data source                |
| Git            | Version control                       |
| GitHub         | Source code hosting                   |
| Netlify        | Deployment                            |

---

## 🏗️ Project Architecture

The application is organized using reusable React components rather than placing the entire interface inside a single component.

```text
IDEAL-DEVELOPMENT-STACK/
│
├── public/
│   └── data/
│       └── technologies-data.json
│
├── src/
│   ├── assets/
│   │   ├── banner-stack.png
│   │   └── logo-text.png
│   │
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── StackItem.tsx
│   │   ├── StackSidebar.tsx
│   │   ├── TechnologyCard.tsx
│   │   ├── TechnologyGrid.tsx
│   │   └── TechnologySection.tsx
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── type.ts
│
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

---

## 📊 Technology Data

The technology catalog is maintained separately in:

```text
public/data/technologies-data.json
```

Example data structure:

```json
{
  "id": "react",
  "name": "React",
  "category": "Frontend",
  "description": "A component-based library for building modern user interfaces.",
  "icon": "https://...",
  "rating": 4.9,
  "difficulty": "Beginner-Friendly",
  "badge": "Popular"
}
```

The application fetches this data when the Technology section loads.

This keeps the data separate from the UI and makes the technology list easier to maintain or extend.

---

## ⚛️ React Concepts Demonstrated

This project demonstrates several core React concepts:

- Functional components
- JSX
- Props
- State management
- `useState`
- `useEffect`
- Event handling
- Conditional rendering
- `.map()` rendering
- Unique React keys
- Component composition
- Parent-child communication
- TypeScript props typing
- Reusable components

---

## 🧠 React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like UI inside JavaScript or TypeScript.

It makes React components easier to understand because the UI structure and component logic can be written together.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed by a component that can change during the application's lifetime.

### 3. What does the `useState` hook do, and where did you use it?

`useState` allows a React component to store and update changing data.

In this project, it is used for technology data, selected technologies, loading state, error state, and navigation state.

### 4. What does the `useEffect` hook do, and why did you need it?

`useEffect` is used for side effects that happen after a component renders.

It is used in this project to fetch the technology data from the JSON file when the Technology section loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify individual items in a list.

A unique key helps React efficiently understand which item changed, was added, or was removed.

### 6. What is conditional rendering?

Conditional rendering means displaying different UI depending on a condition.

For example, the project displays an empty-stack message when no technology has been selected and displays stack items when technologies have been added.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back?

A parent sends data to a child through props.

A child can communicate with the parent by receiving a callback function through props and calling that function when an event happens.

In this project, `TechnologySection` passes technology information and an `onAdd` callback to `TechnologyCard`.

---

## 🎨 Design System

The project uses a consistent visual identity based on a shared gradient:

**Orange → Pink → Violet**

The gradient is reused for:

- Brand elements
- Hero heading
- Primary buttons
- Stack actions

The theme variables are centralized so the visual identity can be changed without modifying every individual component.

The interface also uses:

- Rounded cards
- Soft borders
- Subtle shadows
- Responsive spacing
- Clear typography hierarchy
- Accessible button labels
- Consistent category and difficulty badges

---

## 📱 Responsive Layout

The application follows a responsive, mobile-first approach.

### Mobile

- Single-column technology cards
- Mobile navigation menu
- Stacked content sections
- Responsive buttons and typography

### Tablet

- Two-column technology grid
- Adaptive spacing
- Flexible content widths

### Desktop

- Three-column technology grid
- Dedicated stack sidebar
- Two-column hero layout
- Wider navigation and content areas

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- Node.js installed
- npm installed
- Git installed

### Clone the repository

```bash
git clone https://github.com/mrinal-kanti-apon/dev-stack-builder.git
```

### Enter the project directory

```bash
cd dev-stack-builder
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will then be available through the local development URL provided by Vite.

### Create a production build

```bash
npm run build
```

---

## 📦 Production Build

The project uses Vite for production builds.

The production files are generated in:

```text
dist/
```

The project can be deployed to platforms such as Netlify, Vercel, or other static hosting services.

---

## 🔮 Future Improvements

Possible future improvements include:

- 🔎 Technology search
- 🏷️ Category filtering
- 💾 Local Storage persistence
- 🔗 Shareable technology stacks
- 📋 Technology details modal
- 🔐 Authentication
- ☁️ Backend API integration
- 🗄️ Database-backed technology management

These features are intentionally outside the current assignment scope.

---

## 📚 Learning Outcome

This project was built to practice the concepts learned throughout the React milestone, including:

- Component-based architecture
- Props and state
- Hooks
- Event handling
- Conditional rendering
- Array methods
- JSON data handling
- TypeScript with React
- Responsive Tailwind CSS
- Reusable UI components
- Git and GitHub workflow

---

## 👨‍💻 Project

**Dev Stack Builder**

Built as part of the **MY WEBSITE DEVELOPMENT LEARNING JOURNEY**.

---

## 📄 License

This project is created for educational purposes as part of a course assignment.
