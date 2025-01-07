import React, { useState } from 'react';

const HamburgerMenu = ({setShowed}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex justify-center p-1 bg-gray-800 text-center align-center text-[#818cf8] text-3xl rounded-lg focus:outline-none hover:bg-gray-700/25"
      >
        ☰
      </button>
      
      {menuOpen && (
        <ul className="absolute right-8 top-8 mt-2 w-60 bg-[#1f2937] rounded-lg shadow-lg border border-[#111827]">
          <li className="border-b border-[#111827]">
            <button
              onClick={() => setShowed(true)}
              className="block w-full text-left px-4 py-2 font-SignikaNegative font-medium text-gray-500 hover:bg-gray-900 transition-all duration-300 ease-in-out"
            >
              + Add Expense
            </button>
          </li>
          <li className="border-b border-[#111827]">
            <button
              onClick={() => {window.location.replace("/login")}}
              className="block w-full text-left px-4 py-2 font-SignikaNegative font-medium text-gray-500 hover:bg-gray-900 transition-all duration-300 ease-in-out"
            >
              Login/Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
