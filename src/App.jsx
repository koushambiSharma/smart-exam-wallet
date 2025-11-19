import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home.jsx";
import Papers from "./pages/paper.jsx";
import Quiz from "./pages/quiz.jsx";
import Performance from "./pages/performance.jsx";

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/performance" element={<Performance />} />
        </Routes> 
      </main>
    </div>
  );
}
