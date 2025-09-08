// src/components/ProductList.js
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cartSlice';
import ProductCard from './ProductCard';
import FilterControls from './FilterControls';

const products = [
  {
    id: 1,
    name: 'Web Development Bootcamp',
    category: 'Web Development',
    price: '₹8,999',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'UI/UX Design Masterclass',
    category: 'Design',
    price: '₹7,499',
    image: 'https://images.unsplash.com/photo-1613588718956-c2e80305bf61?w=500&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'JavaScript for Beginners',
    category: 'Web Development',
    price: '₹4,999',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop',
  },
  {
    id: 4,
    name: 'Data Science with Python',
    category: 'Data Science',
    price: '₹12,999',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
  },
];

export default function ProductList() {
  const [activeFilter, setActiveFilter] = useState('All');
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter((product) => product.category === activeFilter);

  const cartItemCount = cart.length;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* 🔥 Gradient Header with Cart Badge */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white rounded-2xl p-6 text-center mb-8 shadow-lg relative overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold">Courses</h2>
        <p className="text-indigo-100 mt-2 text-sm md:text-base opacity-90">
          Explore our interactive learning programs
        </p>

        {/* Cart Badge - Inside header, top-right */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8">
          <div className="relative inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m-1.6 0L13 13"
              />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {cartItemCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Filters */}
      <FilterControls activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Cart Sidebar */}
      {cart.length > 0 && (
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md mx-auto border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Your Cart ({cartItemCount})</h3>
          <ul className="mt-4 space-y-3">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span className="text-gray-800 dark:text-gray-200">{item.name}</span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-400 ml-2"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}