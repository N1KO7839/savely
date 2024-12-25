import React, { useState } from 'react';

const HamburgerMenu = () => {
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
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-900 transition-all duration-300 ease-in-out">
              + Add Expense
            </a>
          </li>
          <li className="border-b border-[#111827]">
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-900 transition-all duration-300 ease-in-out">
              Login/Logout
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
