"use client";

import { useState } from "react";

const QuizContent = ({ quizData }: any) => {
  // const [start, setStart] = useState(false);
  // const [exit, setExit] = useState(false);
  // const [correct,setCorrect] = useState(0);
  const [ans, setAns] = useState("");
// console.log(quizData, 'quizData quizDataquizData');
const {a,b,c,d, correct,question} = quizData

console.log(ans, 'ans');

  return (
    <div className="mt-10 mx-auto h-[300px] w-[700px]">

        <h2>{question}</h2>
        <div>
        <div className='grid grid-cols-2 mt-3'>
                <div className={`p-2 border ${ans === "a" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("a")}>{a}</div>
                <div className={`p-2 border ${ans === "b" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("b")}>{b}</div>
                <div className={`p-2 border ${ans === "c" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("c")}>{c}</div>
                <div className={`p-2 border ${ans === "d" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("d")}>{d}</div>
            </div>
        </div>
    </div>
  );
};

export default QuizContent;
