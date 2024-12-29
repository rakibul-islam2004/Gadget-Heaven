import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";

const Home = () => {
  const products = useLoaderData();
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredProducts =
    activeCategory === "All"
      ? products
      : activeCategory === "" && window.innerWidth >= 768
      ? products.slice(0, 9)
      : activeCategory === ""
      ? products.slice(0, 6)
      : products.filter((product) => product.category === activeCategory);

  const categories = [
    "All",
    "Laptops",
    "Phones",
    "Accessories",
    "Smart Watches",
    "MacBook",
    "iPhone",
  ];

  return (
    <div>
      <HomeBanner />
      <div className="pt-60 bg-base-200"></div>

      <div className="pt-20 bg-base-200 px-10">
        <h2 className="text-2xl font-bold text-center mb-8">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex flex-col md:flex-row">
          {/* Sidebar for Category Buttons */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <ul className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <li key={category} className="w-full">
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className={`py-2 px-4 w-full rounded ${
                      activeCategory === category
                        ? "bg-purple-600 text-white font-semibold"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.product_id}
                  className="card bg-white shadow-lg rounded-lg p-4"
                >
                  <img
                    src={product.product_image}
                    alt={product.product_title}
                    className="w-full h-48 object-cover rounded"
                  />
                  <h3 className="text-lg font-semibold">
                    {product.product_title}
                  </h3>
                  <p className="text-gray-700">Price: ${product.price}</p>
                  <p className="text-gray-600">Rating: {product.rating}</p>
                  <Link to={`/productDetails/${product.product_id}`}>
                    <button className="btn btn-outline btn-primary mt-4">
                      View Details
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-purple-500 font-extrabold mt-16 text-2xl">
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
