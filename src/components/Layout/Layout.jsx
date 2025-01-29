import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FiUsers, FiUserPlus, FiMoon, FiSun } from 'react-icons/fi';
import '../../styles/Layout.css';

const Layout = () => {
  const { isDark, setIsDark } = useTheme();
  const location = useLocation();

  return (
    <div className="layout">
      <header className="header">
        <h1>User Management</h1>
        <div className="theme-toggle" onClick={() => setIsDark(!isDark)}>
          <div className="theme-icons">
            <FiSun />
            <FiMoon />
          </div>
          <div className={`toggle-thumb ${isDark ? 'dark' : ''}`} />
        </div>
      </header>
      
      <div className="main-container">
        <aside className="sidebar">
          <nav>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              <FiUserPlus />
              Add User
            </Link>
            <Link 
              to="/users" 
              className={`nav-link ${location.pathname === '/users' ? 'active' : ''}`}
            >
              <FiUsers />
              View Users
            </Link>
          </nav>
        </aside>
        
        <main className="main-content">
          <Outlet />
        </main>
      </div>

      <footer className="footer">
        <p>&copy; 2025 User Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;