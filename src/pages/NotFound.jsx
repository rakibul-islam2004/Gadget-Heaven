import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-950 to-purple-950">
      <div className="max-w-lg p-12 bg-white rounded-3xl shadow-2xl text-center">
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <p className="mt-4 text-2xl font-medium text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2 text-lg text-gray-500">
          It looks like you've followed a broken link or entered a URL that
          doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block px-8 py-4 bg-purple-400 text-white font-semibold text-xl rounded-xl hover:bg-purple-800 transition duration-300"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
