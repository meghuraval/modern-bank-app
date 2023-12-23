/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none hover:scale-105 rounded-lg`}
    >
      Get Started
    </button>
  );
};

export default Button;
