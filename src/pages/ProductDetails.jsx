import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((products) => {
        const foundProduct = products.find(
          (item) => item.product_id === parseInt(productId)
        );
        setProduct(foundProduct);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, [productId]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.some((item) => item.product_id === product.product_id)) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Added to cart!");
    } else {
      toast.error("Product already in cart.");
    }
  };

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((item) => item.product_id === product.product_id)) {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      toast.success("Added to wishlist!");
    } else {
      toast.error("Product already in wishlist.");
    }
  };

  if (!product) {
    return <p>Loading or product not found.</p>;
  }

  return (
    <>
      <ToastContainer />
      <div className="bg-purple-500 py-16 md:pb-64 px-8 md:px-16 flex flex-col items-center relative">
        <h1 className="text-3xl font-bold text-center mb-4 text-white">
          Product Details
        </h1>
        <p className="text-center mb-8 text-gray-200">
          Explore the latest gadgets that will take your experience to the next
          level.
        </p>
        <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg md:mb-20 w-full max-w-[1100px] h-auto md:h-[444px] relative md:bottom-[-320px] md:absolute">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img
              src={product.product_image}
              alt={product.product_title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-semibold mb-4">
              {product.product_title}
            </h2>
            <p className="text-xl font-bold mb-2">Price: ${product.price}</p>
            <p className="text-gray-700 mb-2">
              {product.in_stock ? (
                <span className="text-green-500 font-semibold">In Stock</span>
              ) : (
                <span className="text-red-500 font-semibold">Out of Stock</span>
              )}
            </p>
            <p className="flex items-center text-yellow-500 mb-4">
              Rating:{" "}
              {Array.from({ length: Math.round(product.rating) }, (_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
            </p>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <ul className="mb-4">
              <h3 className="font-semibold mb-2">Specifications:</h3>
              {product.specifications.map((spec, index) => (
                <li key={index} className="text-gray-700">
                  - {spec}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <button
                onClick={addToCart}
                className="btn btn-primary flex items-center mb-4 sm:mb-0"
              >
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
              <button
                onClick={addToFavorites}
                className="btn btn-outline flex items-center"
              >
                <FaHeart className="mr-2" /> Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-60 bg-base-200 hidden md:block"></div>
    </>
  );
};

export default ProductDetails;
