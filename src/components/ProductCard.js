// src/components/ProductCard.js
export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white dark:bg-gray-800">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{product.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{product.category}</p>
        <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-2">{product.price}</p>
        <button
          onClick={() => onAddToCart(product)}
          disabled={product.inCart}
          className={`mt-4 w-full py-2 px-4 rounded-lg font-medium transition ${
            product.inCart
              ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
          {product.inCart ? 'In Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}