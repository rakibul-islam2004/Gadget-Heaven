import React from "react";
import {
  AiOutlineLaptop,
  AiOutlineMobile,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";

const Statistics = () => {
  const statsData = [
    {
      icon: <AiOutlineLaptop size={40} />,
      label: "Top Category",
      value: "Laptops",
      color: "text-blue-500",
    },
    {
      icon: <AiOutlineMobile size={40} />,
      label: "Best-Selling Product",
      value: "iPhone 13",
      color: "text-green-500",
    },
    {
      icon: <FaChartLine size={40} />,
      label: "Monthly Sales Growth",
      value: "22%",
      color: "text-purple-500",
    },
    {
      icon: <AiOutlineClockCircle size={40} />,
      label: "Average Purchase Time",
      value: "5 min",
      color: "text-red-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-purple-500 mb-8">Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 bg-white shadow-lg rounded-lg ${stat.color}`}
          >
            <div className="mb-4">{stat.icon}</div>
            <h2 className="text-lg font-semibold text-gray-700">
              {stat.label}
            </h2>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
