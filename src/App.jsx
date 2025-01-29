import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./context/ThemeContext";
import { store } from "./app/store";
import Layout from "./components/Layout/Layout";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <div className="app-container">
            {/* Toast Notifications */}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<UserForm />} />
                <Route path="users" element={<UserList />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
