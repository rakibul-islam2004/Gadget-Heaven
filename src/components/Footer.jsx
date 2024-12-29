import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-20 bg-base-200 md:px-40">
      <div className="text-center">
        <h2 className="btn btn-ghost normal-case text-xl">Gadget Heaven</h2>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="text-center md:text-left">
          <span className="footer-title">Services</span>
          <p>Product Support</p>
          <p>Order Tracking</p>
          <p>Shipping & Delivery</p>
          <p>Returns</p>
        </div>
        <div className="text-center md:text-left">
          <span className="footer-title">Company</span>
          <p>About Us</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className="text-center md:text-left">
          <span className="footer-title">Legal</span>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
