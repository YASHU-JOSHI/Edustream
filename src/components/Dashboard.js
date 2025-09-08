// src/components/Dashboard.js
import React from 'react';

export default function Dashboard() {
  // Mock data
  const courseProgress = [
    { name: 'Web Development', progress: 75, status: 'In Progress' },
    { name: 'UI/UX Design', progress: 100, status: 'Completed' },
    { name: 'JavaScript Basics', progress: 30, status: 'In Progress' },
    { name: 'React Fundamentals', progress: 50, status: 'In Progress' },
  ];

  const recentActivity = [
    { action: 'Watched video', course: 'JavaScript Basics', time: '2 mins ago' },
    { action: 'Completed lesson', course: 'UI/UX Design', time: '1 hour ago' },
    { action: 'Started course', course: 'React Fundamentals', time: '3 hours ago' },
    { action: 'Scored 92% on quiz', course: 'Web Development', time: '5 hours ago' },
  ];

  const stats = {
    totalCourses: 4,
    completed: 1,
    inProgress: 3,
    totalCertificates: 1,
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* 🔥 Gradient Header */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white rounded-2xl p-6 text-center mb-8 shadow-lg border border-indigo-400">
        <h2 className="text-2xl md:text-3xl font-bold">Dashboard</h2>
        <p className="text-indigo-100 mt-2 text-sm md:text-base opacity-90">
          Your learning journey at a glance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Courses', value: stats.totalCourses },
          { label: 'Completed', value: stats.completed, highlight: true },
          { label: 'In Progress', value: stats.inProgress },
          { label: 'Certificates', value: stats.totalCertificates, highlight: true },
        ].map((stat, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl ${
              stat.highlight
                ? 'bg-gradient-to-br from-indigo-600 to-purple-700 text-white'
                : 'bg-gray-800 text-gray-100'
            } shadow-lg`}
          >
            <h3 className="text-sm font-medium opacity-90">{stat.label}</h3>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Progress */}
        <div className="lg:col-span-2 bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Course Progress</h3>
          <div className="space-y-6">
            {courseProgress.map((course, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between text-sm text-gray-200 mb-2">
                  <span>{course.name}</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2.5">
                  <div
                    className="bg-indigo-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 mt-1 block">
                  Status: {course.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
          <ul className="space-y-4">
            {recentActivity.map((activity, index) => (
              <li
                key={index}
                className="border-l-4 border-indigo-500 pl-4 py-1 text-sm text-gray-300"
              >
                <strong className="text-white">{activity.action}</strong>
                <div className="text-gray-400 text-xs mt-1">
                  {activity.course} • {activity.time}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}