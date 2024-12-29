import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const location = useLocation();

  const updateCounts = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setCartCount(cart.length);
    setFavoriteCount(favorites.length);
  };

  useEffect(() => {
    updateCounts();

    const handleStorageChange = () => {
      updateCounts();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div
      className={`navbar ${
        location.pathname === "/"
          ? "bg-purple-500 text-white"
          : "bg-base-100 text-gray-800"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-gray-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className=" hover:text-blue-600">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/statistics" className=" hover:text-blue-600">
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className=" hover:text-blue-600">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/history" className=" hover:text-blue-600">
                Purchase History
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink to="/" className=" hover:text-blue-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" className=" hover:text-blue-600">
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className=" hover:text-blue-600">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" className=" hover:text-blue-600">
              Purchase History
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <button className="btn rounded-full relative">
          <AiOutlineShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
              {cartCount}
            </span>
          )}
        </button>
        <button className="btn rounded-full relative">
          <AiOutlineHeart size={24} />
          {favoriteCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
              {favoriteCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
