// src/components/SignupForm.js
import { useState, useRef } from 'react';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Re-validate on change
    validateField(name, value);
  };

  // Validate individual field
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'name':
        if (!value) newErrors.name = 'Name is required';
        else if (value.length < 2) newErrors.name = 'Name must be at least 2 characters';
        else delete newErrors.name;
        break;

      case 'email':
        if (!value) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(value)) newErrors.email = 'Email is invalid';
        else delete newErrors.email;
        break;

      case 'password':
        if (!value) newErrors.password = 'Password is required';
        else if (value.length < 6) newErrors.password = 'Password must be at least 6 characters';
        else delete newErrors.password;
        break;

      case 'confirmPassword':
        if (value !== formData.password) newErrors.confirmPassword = 'Passwords do not match';
        else delete newErrors.confirmPassword;
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation
    const form = formRef.current;
    if (!form.checkValidity()) {
      // Force browser to show native validation UI
      form.reportValidity();
      return;
    }

    // Custom validation passed
    alert('Form submitted successfully!');
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Sign Up</h2>

      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
              errors.name
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:ring-indigo-200'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
          />
          {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
              errors.email
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:ring-indigo-200'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
          />
          {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength="6"
            required
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
              errors.password
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:ring-indigo-200'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
          />
          {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 dark:text-gray-300 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
              errors.confirmPassword
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:ring-indigo-200'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}