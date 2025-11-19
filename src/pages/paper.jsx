import React, { useState } from "react";
import QuestionCard from "/components/QuestionCard";
import ChatBot from "/components/ChatBot";

/* SAMPLE DATA - replace with real API later */
const SAMPLE = [
  { id:1, title:"Data Structures - May 2024", semester:"4", branch:"CSE", subject:"Data Structures", year:2024, link:"#"},
  { id:2, title:"Algorithms - Nov 2023", semester:"6", branch:"CSE", subject:"Algorithms", year:2023, link:"#"},
  { id:3, title:"Signals - May 2024", semester:"6", branch:"ECE", subject:"Signals", year:2024, link:"#"}
];

export default function Papers(){
  const [semester, setSemester] = useState("");
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");
  const [results, setResults] = useState([]);

  function search(){
    const r = SAMPLE.filter(p =>
      (!semester || p.semester===semester) &&
      (!branch || p.branch.toLowerCase()===branch.toLowerCase()) &&
      (!subject || p.subject.toLowerCase().includes(subject.toLowerCase()))
    );
    setResults(r);
  }

  function startQuizFromPaper(paper){
    // navigate to quiz or trigger quiz start logic
    // For now we pass info via localStorage or route in future
    localStorage.setItem("selectedPaper", JSON.stringify(paper));
    window.location.href = "/quiz";
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-3">Find Papers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input value={semester} onChange={e=>setSemester(e.target.value)} placeholder="Semester" className="p-2 border rounded"/>
            <input value={branch} onChange={e=>setBranch(e.target.value)} placeholder="Branch (e.g. CSE)" className="p-2 border rounded"/>
            <input value={subject} onChange={e=>setSubject(e.target.value)} placeholder="Subject" className="p-2 border rounded"/>
          </div>
          <div className="mt-3">
            <button onClick={search} className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
          </div>
        </div>

        <div className="space-y-3">
          {results.length ? results.map(p => (
            <QuestionCard key={p.id} paper={p} onStartQuiz={startQuizFromPaper} />
          )) : <div className="text-gray-500">No results yet. Try searching.</div>}
        </div>
      </div>

      <aside>
        <ChatBot onRecommend={(txt)=>alert("Bot suggested: "+txt)} />
      </aside>
    </div>
  );
}
