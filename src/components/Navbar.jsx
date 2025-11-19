import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700 hover:text-indigo-600"
        >
          SmartExamWallet
        </Link>

        <div className="flex gap-6 text-gray-700 font-medium">
          <Link to="/papers" className="hover:text-blue-600">
            Papers
          </Link>
          <Link to="/quiz" className="hover:text-blue-600">
            Quiz
          </Link>
          <Link to="/performance" className="hover:text-blue-600">
            Performance
          </Link>
        </div>
      </div>
    </nav>
  );
}

