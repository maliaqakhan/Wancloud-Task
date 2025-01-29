# User Management System

## Project Overview

This is a **React.js** application with **Redux** for state management, allowing users to add, view, edit, and delete user records. The app consists of a structured layout with a header, sidebar navigation, content section, and footer. Users can fill out a form to add records, which are stored in the **Redux store**, and view the records in a table format with options to edit or delete them.

## Features

- **React Router** for navigation between pages
- **Redux Toolkit** for state management
- **Form validation** using React Hook Form
- **Persistent user data storage** within Redux
- **Theme toggle** (light/dark mode) using Context API
- **Toast notifications** for feedback messages
- **Custom CSS** for enhanced UI/UX

## Folder Structure

```
project-root/
│── src/
│   ├── app/
│   │   ├── store.js
│   ├── assets/
│   │   ├── userprofile.png
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.jsx
│   │   ├── UserForm/
│   │   │   ├── UserForm.jsx
│   │   ├── UserList/
│   │   │   ├── UserList.jsx
│   ├── context/
│   │   ├── ThemeContext.js
│   ├── features/
│   │   ├── users/
│   │   │   ├── usersSlice.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── Layout.css
│   │   ├── ThemeToggle.css
│   │   ├── UserForm.css
│   │   ├── UserList.css
│   ├── App.jsx
│   ├── index.js
│── public/
│── package.json
```

## Installation and Execution

1. Clone the repository:
   ```sh
   git clone https://github.com/maliaqakhan/Wancloud-Task.git
   ```
2. Navigate to the project directory:
   ```sh
   cd wancloud-task
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open in browser at `http://localhost:3000`

## Technologies & Libraries Used

- **React.js** (Frontend framework)
- **Redux Toolkit** (State management)
- **React Router** (Client-side routing)
- **React Hook Form** (Form handling & validation)
- **React Toastify** (Notifications)
- **React Icons** (Icons)
- **CSS3** (Styling)

## Challenges & Solutions

### Issue 1: State Not Updating Immediately After Submission

- **Problem:** The Redux store was not reflecting new user entries immediately.
- **Solution:** Used `useDispatch` properly to dispatch the `addUser` action and ensured Redux state updates correctly.

### Issue 2: Form Validation Errors

- **Problem:** Form fields were allowing empty submissions.
- **Solution:** Implemented `React Hook Form` with validation rules to prevent incomplete submissions.

### Issue 3: UI Design Improvements

- **Problem:** Default form styling was basic.
- **Solution:** Applied **custom CSS** to enhance layout and responsiveness.

## Additional Features Implemented

- **Dark mode toggle** using Context API
- **Live edit feature** in the user list
- **Smooth UI animations** for enhanced user experience






