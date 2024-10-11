import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <span className="text-xl font-semibold text-gray-800">Main App</span>
        <div className="flex items-center">
          <img
            src="./components/Ilustracao-3d-pessoa.jpg"
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="ml-3 text-gray-700">user@mail.com</span>
          <svg
            className="w-4 h-4 ml-2 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;