// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-8 py-12">
      {/* 🔥 Gradient Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white rounded-2xl p-8 text-center mb-12 shadow-lg border border-indigo-400">
        <h1 className="text-3xl md:text-4xl font-bold">Welcome to <span className="text-white">EduStream</span></h1>
        <p className="mt-4 text-indigo-100 text-lg opacity-90">
          Your journey to mastering new skills starts here.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">🎥 Media Gallery</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Watch video lessons and listen to audio lectures with real-time playback.
          </p>
          <Link
            to="/media"
            className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Explore Media
          </Link>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">📚 Courses</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Enroll in interactive courses and track your progress.
          </p>
          <Link
            to="/courses"
            className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            View Courses
          </Link>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">💰 Pricing</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Choose a plan that fits your learning goals.
          </p>
          <Link
            to="/pricing"
            className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            See Plans
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 p-8 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold">Ready to Start Learning?</h2>
        <p className="mt-2 opacity-90">Join thousands of students already mastering new skills.</p>
        <Link
          to="/signup"
          className="mt-6 inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Sign Up Now
        </Link>
      </div>
    </div>
  );
}