"use client";

const QuizContent = ({ quizData }: any) => {
// console.log(quizData, 'quizData quizDataquizData');
const {a,b,c,d, correct,question} = quizData

  return (
    <div className="mt-10 mx-auto h-[200px] w-[700px]">

        <h3>{question}</h3>
        <p>{a}</p>
        <p>{b}</p>
        <p>{c}</p>
        <p>{d}</p>
        <p>{correct}</p>

    </div>
  );
};

export default QuizContent;
