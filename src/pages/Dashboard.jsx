import React, { useEffect, useState } from "react";
import { FaTimes, FaShoppingCart } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import group from "../assets/Group.png";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadItems = () => {
    setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
    setWishlistItems(JSON.parse(localStorage.getItem("favorites")) || []);
  };

  useEffect(() => {
    loadItems();
    const handleStorageChange = () => loadItems();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const removeItem = (id, type) => {
    const items = type === "cart" ? cartItems : wishlistItems;
    const updatedItems = items.filter((item) => item.product_id !== id);
    localStorage.setItem(type, JSON.stringify(updatedItems));
    window.dispatchEvent(new Event("storage"));
  };

  const addToCartFromWishlist = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.some((item) => item.product_id === product.product_id)) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartItems(cart);
      toast.success("Product added to cart!");

      const updatedWishlist = wishlistItems.filter(
        (item) => item.product_id !== product.product_id
      );
      setWishlistItems(updatedWishlist);
      localStorage.setItem("favorites", JSON.stringify(updatedWishlist));
      window.dispatchEvent(new Event("storage"));
    } else {
      toast.error("Product already in cart.");
    }
  };

  const totalCost = cartItems.reduce((acc, item) => acc + item.price, 0);

  const sortByPrice = () => {
    const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(sortedItems);
  };

  const handlePurchase = () => {
    setIsModalOpen(true);

    const history = JSON.parse(localStorage.getItem("purchaseHistory")) || [];
    const updatedHistory = [...history, ...cartItems];
    localStorage.setItem("purchaseHistory", JSON.stringify(updatedHistory));

    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
    window.dispatchEvent(new Event("storage"));
  };

  const renderItems = (items, type) => (
    <div>
      {items.map((item) => (
        <div
          key={item.product_id}
          className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4"
        >
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4"></div>
            <div>
              <h3 className="font-bold">{item.product_title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="font-bold">Price: ${item.price}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {type === "favorites" && (
              <button
                className="text-blue-500 flex items-center"
                onClick={() => addToCartFromWishlist(item)}
              >
                <FaShoppingCart className="mr-1" /> Add to Cart
              </button>
            )}
            <button
              className="text-red-500"
              onClick={() => removeItem(item.product_id, type)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <ToastContainer />
      <div className="bg-purple-500 py-16 text-center">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-200">
          Explore the latest gadgets that will take your experience to the next
          level.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "cart"
                ? "bg-white text-purple-500"
                : "bg-purple-700 text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "wishlist"
                ? "bg-white text-purple-500"
                : "bg-purple-700 text-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        {activeTab === "cart" ? (
          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-bold text-xl">
                Total cost: ${totalCost.toFixed(2)}
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={sortByPrice}
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg"
                >
                  Sort by Price (High to Low)
                </button>
                <button
                  onClick={handlePurchase}
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg"
                >
                  Purchase
                </button>
              </div>
            </div>
            {renderItems(cartItems, "cart")}
          </div>
        ) : (
          renderItems(wishlistItems, "favorites")
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg text-center flex flex-col items-center">
            <img className="" src={group} alt="" />
            <br />
            <h2 className="text-2xl font-bold mb-4">Payment Successfully</h2>
            <br />
            <p>Your purchase was successful.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
