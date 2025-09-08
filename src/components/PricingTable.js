// src/components/PricingTable.js
import { useState } from 'react';

export default function PricingTable() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: 'Starter',
      price: '₹2,999',
      features: ['5 Courses', 'Community Access'],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '₹8,999',
      features: ['50 Courses', 'Certification', 'Live Q&A'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '₹19,999',
      features: ['Unlimited Courses', 'Priority Support', 'Team Access'],
      highlighted: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-8">
      {/* 🔥 Pro-Style Gradient Header */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white rounded-2xl p-6 md:p-8 text-center mb-10 shadow-lg border border-indigo-400">
        <h2 className="text-2xl md:text-3xl font-bold">Choose Your Plan</h2>
        <p className="text-indigo-100 mt-2 text-sm md:text-base opacity-90">
          Select the perfect plan to unlock your learning journey
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-6 md:p-8 shadow-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              plan.highlighted
                ? 'bg-gradient-to-br from-indigo-600 to-purple-700 text-white border-none'
                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
            }`}
          >
            {/* Plan Name */}
            <h3
              className={`text-xl font-bold ${
                plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
              }`}
            >
              {plan.name}
            </h3>

            {/* Price */}
            <p
              className={`text-3xl font-extrabold mt-2 ${
                plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-gray-100'
              }`}
            >
              {plan.price}
            </p>

            {/* Features */}
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-center gap-2 text-sm md:text-base ${
                    plan.highlighted
                      ? 'text-gray-100'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="text-green-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={() => setSelectedPlan(plan.name)}
              className={`mt-8 w-full py-3 px-5 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                plan.highlighted
                  ? 'bg-white text-indigo-600 hover:bg-gray-100 focus:ring-white'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'
              }`}
              aria-label={`Select ${plan.name} plan`}
            >
              Get Started
            </button>

            {/* Badge for Pro Plan */}
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  POPULAR
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Confirmation Message */}
      {selectedPlan && (
        <div
          className="mt-10 p-4 bg-green-600 dark:bg-green-700 text-white rounded-lg text-center shadow-md animate-in fade-in slide-in-from-top duration-500"
          role="alert"
        >
          You selected the{' '}
          <strong className="font-semibold">{selectedPlan}</strong> plan. Thank you!
        </div>
      )}
    </div>
  );
}