import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Performance(){
  const last = JSON.parse(localStorage.getItem("lastQuiz") || "null");
  if(!last) return <div className="text-gray-600">No recent quiz results</div>;

  // transform answers to chart data
  const answers = last.answers || {};
  const data = Object.entries(answers).map(([qid, val], i)=>({ name: qid, time: val.timeTaken || 0, len: (val.text||"").length }));

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Performance Analysis</h2>
      <div className="bg-white p-4 rounded shadow">
        <p>Paper: {last.paper ? last.paper.title : "N/A"}</p>
        <p>Questions answered: {data.length}</p>
        <div style={{ height: 220 }} className="mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="time" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
