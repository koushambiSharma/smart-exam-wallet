import React, { useState } from "react";

export default function ChatBot({ onRecommend }){
  const [msg, setMsg] = useState("");
  const [log, setLog] = useState([]);

  function submit(){
    if(!msg.trim()) return;
    setLog(l => [...l, { who: "you", text: msg }]);
    // very simple keyword-based recommendation simulation
    const recommendation = msg.toLowerCase().includes("tree") ? "Try questions: binary trees, traversals" : "Try questions: fundamentals & definitions";
    setTimeout(() => {
      setLog(l => [...l, { who: "bot", text: recommendation }]);
      onRecommend && onRecommend(recommendation);
    }, 300);
    setMsg("");
  }

  return (
    <div className="bg-white p-3 rounded shadow">
      <div className="h-40 overflow-auto mb-2 border rounded p-2 bg-gray-50">
        {log.map((m,i) => <div key={i} className={m.who==='bot' ? 'text-left text-sm text-gray-700' : 'text-right text-sm text-blue-700'}>{m.text}</div>)}
      </div>
      <div className="flex gap-2">
        <input value={msg} onChange={e=>setMsg(e.target.value)} className="flex-1 border rounded p-2" placeholder="Ask topic or syllabus keywords"/>
        <button onClick={submit} className="bg-indigo-600 text-white px-4 rounded">Ask</button>
      </div>
    </div>
  );
}
