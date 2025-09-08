// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Components
import MediaGallery from './components/MediaGallery';
import Dashboard from './components/Dashboard';
import PricingTable from './components/PricingTable';
import SignupForm from './components/SignupForm';
import ProductList from './components/ProductList';
import Home from './components/Home'; // ✅ Import added
import './output.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100'
          : 'bg-white text-gray-900'
      }`}
    >
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left: Logo (Now Clickable) */}
          <Link
            to="/"
            className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
          >
            EduStream
          </Link>

          {/* Center: Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/media"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Media Gallery
            </Link>
            
            
            
            <Link
              to="/courses"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Courses
            </Link>
            <Link
              to="/pricing"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/dashboard"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/signup"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Sign Up
            </Link>
          </nav>

          {/* Right: Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 
              ${
                darkMode
                  ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                  : 'bg-blue-600 text-white hover:bg-blue-500'
              }`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} /> {/* ✅ Home route */}
          <Route path="/media" element={<MediaGallery />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<PricingTable />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/courses" element={<ProductList />} />
        </Routes>
      </main>

      <footer className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400 py-4">
        © {new Date().getFullYear()} EduStream. All rights reserved.
      </footer>
    </div>
  );
}

export default App;