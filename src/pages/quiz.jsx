import React, { useEffect, useState } from "react";

const SAMPLE_QUESTIONS = [
  { qid:"q1", q:"Explain linked list.", marks:10 },
  { qid:"q2", q:"Difference between array and linked list.", marks:5 },
  { qid:"q3", q:"Explain BFS and DFS.", marks:10 }
];

export default function Quiz(){
  const paper = JSON.parse(localStorage.getItem("selectedPaper") || "null");
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20); // seconds per question
  const [answers, setAnswers] = useState({});
  const [running, setRunning] = useState(false);
  useEffect(()=>{
    if(!running) return;
    if(timeLeft<=0){
      // auto move next
      handleNext();
      return;
    }
    const t = setTimeout(()=> setTimeLeft(t=>t-1), 1000);
    return ()=> clearTimeout(t);
  }, [timeLeft, running]);

  function start(){
    setRunning(true);
    setIndex(0);
    setTimeLeft(20);
    setAnswers({});
  }

  function submitAnswer(text){
    setAnswers(a => ({...a, [SAMPLE_QUESTIONS[index].qid]: { text, timeTaken: 20-timeLeft }}));
    handleNext();
  }

  function handleNext(){
    if(index < SAMPLE_QUESTIONS.length - 1){
      setIndex(i => i+1);
      setTimeLeft(20);
    } else {
      setRunning(false);
      // save result in localStorage for performance page
      localStorage.setItem("lastQuiz", JSON.stringify({ paper, answers }));
      window.location.href = "/performance";
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Quiz {paper ? ` — ${paper.title}` : ""}</h2>
      {!running ? (
        <div>
          <p className="mb-2">Questions: {SAMPLE_QUESTIONS.length}</p>
          <button onClick={start} className="bg-green-600 text-white px-4 py-2 rounded">Start Timed Quiz</button>
        </div>
      ) : (
        <div className="bg-white p-4 rounded shadow">
          <div className="mb-2 font-medium">Q{index+1}. {SAMPLE_QUESTIONS[index].q}</div>
          <div className="text-sm text-gray-500 mb-2">Time left: {timeLeft}s</div>
          <div className="flex gap-2">
            <input placeholder="Type short answer" className="flex-1 border p-2 rounded" id="ans"/>
            <button onClick={()=>{ const v = document.getElementById('ans').value; submitAnswer(v); document.getElementById('ans').value=''; }} className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
