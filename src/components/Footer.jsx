import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col bg-gray-800 text-amber-50 p-4">
      <div className="flex flex-row gap-10 justify-around items-center">
        <div className="flex flex-col items-center space-y-4 mb-4">
          <h2 className="font-bold text-md md:text-xl">Help</h2>
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-sm sm:text-md">Help Center</h3>
            <h3 className="text-sm sm:text-md">Help Forum</h3>
            <h3 className="text-sm sm:text-md">Video Tutorials</h3>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 mb-4">
          <h2 className="font-bold text-md md:text-xl">About</h2>
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-sm sm:text-md">About Us</h3>
            <h3 className="text-sm sm:text-md">Contact Us</h3>
            <h3 className="text-sm sm:text-md">Privacy Policy</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 mb-4 space-y-2">
        <h3 className="text-sm sm:text-md text-center mt-4">
          © 2023 All rights reserved. 
        </h3>
        <p className="text-sm">Made with ❤️ by{" "}
        <a className="text-blue-200 hover:text-blue-300" href="https://www.linkedin.com/in/gopalkrs">Gopal</a></p>
      </div>
    </div>
  );
};

export default Footer;
