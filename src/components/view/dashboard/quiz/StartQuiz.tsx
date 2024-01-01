"use client";

import Loading from "../../loading/Loading";
import { useGetSingleQuizQuery } from "@/redux/api/quizApi";
import { Button } from "antd";
import QuizResult from "./Result";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {   setCurrent,
  setAns,
  setCorrect,
  setShowResultPage, } from "@/redux/slice/quizSlice";

const StartQuiz = ({ category }: any) => {
  // const [showResultPage, setShowResultPage] = useState(false)
  // const [current, setCurrent] = useState(0);
  // const [ans, setAns] = useState("");
  // const [correct, setCorrect]= useState(0)
  const dispatch = useAppDispatch();
  const { current, ans, correct, showResultPage } = useAppSelector((state) => state.quiz);
  const { data, isLoading } = useGetSingleQuizQuery(category);

  if (isLoading) {
    return <Loading />;
  }

  const resultPage = <QuizResult />

  const quizData = data?.data[0]?.quizOptions;

  console.log( quizData[current]?.correct, 'ans');
console.log( correct, 'total correct');

  const saveHandler = () => {
    if(ans === quizData[current]?.correct){
      dispatch(setCorrect(correct + 1));
    }

    dispatch(setCurrent(current + 1));
  };
  const previousHandler = () => {
    dispatch(setCurrent(current - 1));
  };


  return ( 
    !showResultPage ? <div className="w-[60%] mx-auto mt-20 bg-white shadow-2xl p-10 rounded">
    <div>
      <h2 className="h-16">{current + 1 + ". " + quizData[current]?.question}</h2>
      <div className="h-44 ">
        <div className="grid grid-cols-2 mt-3">
          <div
            className={`p-2 border ${
              ans === "a" ? "bg-blue-400 text-white" : ""
            } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
            onClick={() => dispatch(setAns("a"))}
          >A :
            {quizData[current]?.a}
          </div>
          <div
            className={`p-2 border ${
              ans === "b" ? "bg-blue-400 text-white" : ""
            } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
            onClick={() => dispatch(setAns("b"))}
          >
            B : {quizData[current]?.b}
          </div>
          <div
            className={`p-2 border ${
              ans === "c" ? "bg-blue-400 text-white" : ""
            } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
            onClick={() => dispatch(setAns("c"))}
          >
            C : {quizData[current]?.c}
          </div>
          <div
            className={`p-2 border ${
              ans === "d" ? "bg-blue-400 text-white" : ""
            } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
            onClick={() => dispatch(setAns("d"))}
          >
            D :{quizData[current]?.d}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      { current > 0 && <div className="">
          <Button onClick={previousHandler}>Previous</Button>
        </div>}
       
        {current === 9 ?  <div onClick={()=>dispatch(setShowResultPage(true)) } className="">
        <Button>Finish</Button>
          </div> :<div className="">
          <Button onClick={saveHandler}>Save And Next</Button>
        </div> 
         
        }
      </div>
    </div>
  </div> : resultPage
  
  );
};

export default StartQuiz;
