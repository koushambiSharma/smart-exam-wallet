import React from "react";

export default function QuestionCard({ paper, onStartQuiz }){
  return (
    <div className="bg-white rounded shadow p-4 border">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{paper.title}</h3>
          <p className="text-sm text-gray-500">{paper.branch} • {paper.subject} • Sem {paper.semester}</p>
        </div>
        <div className="text-sm text-gray-400">{paper.year}</div>
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={() => onStartQuiz && onStartQuiz(paper)}
                className="px-3 py-1 bg-green-600 text-white rounded">Start Quiz</button>
        <a href={paper.link || '#'} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded">View Paper</a>
      </div>
    </div>
  );
}
