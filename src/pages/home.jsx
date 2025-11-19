import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white text-center px-6">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
        Smart<span className="text-indigo-500">ExamWallet</span>
      </h1>

      <p className="text-gray-700 text-lg max-w-2xl mb-8">
        Find previous year papers, get recommended questions, and take timed quizzes 
        to track your performance. Boost your preparation with SmartExamWallet 🚀
      </p>

      <div className="flex gap-6">
        <Link
          to="/papers"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-all duration-200"
        >
          Find Papers
        </Link>
        <Link
          to="/quiz"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 transition-all duration-200"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
}

