import React from "react";
import banner from "../assets/banner.jpg";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="bg-purple-500 text-white py-16 pb-52 md:pb-64 px-8 md:px-40 flex flex-col items-center relative">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      <p className="text-center mb-6">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>

      <Link to="/dashboard">
        <button className="bg-white text-purple-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
          Shop Now
        </button>
      </Link>
      <div className="bottom-[-300px] md:bottom-[-320px] mb-20 w-full max-w-[1100px] h-96 md:h-[444px] absolute">
        <img
          src={banner}
          alt="VR Headset"
          className="rounded-lg border-4 border-purple-200 w-full h-full"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
