import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="h-40 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
        <img
          src={product.product_image}
          alt={product.product_title}
          className="h-full"
        />
      </div>
      <h2 className="text-lg font-semibold">{product.product_title}</h2>
      <p className="text-gray-700">Price: {product.price}k</p>
      <button className="mt-4 px-4 py-2 bg-purple-100 text-purple-500 font-medium rounded-lg border border-purple-500">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
