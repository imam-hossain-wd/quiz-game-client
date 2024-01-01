/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Loading from "../../loading/Loading";
import { useGetSingleQuizQuery } from "@/redux/api/quizApi";
import { Button, Slider } from "antd";
import QuizResult from "./Result";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {setCurrent,setAns,setCorrect,setShowResultPage} from "@/redux/slice/quizSlice";
import { useEffect, useRef } from "react";
import { incrementTotalTime, resetQuizTime, setTimeLeft } from "@/redux/slice/timecounterSlice";


const StartQuiz = ({ category }: any) => {

  const dispatch = useAppDispatch();
  const {timeLeft,totalTime} = useAppSelector((state) => state.timeCounter);

  const { current, ans, correct, showResultPage } = useAppSelector(
    (state) => state.quiz
  );
  const { data, isLoading } = useGetSingleQuizQuery(category);
  const totalTimeIntervalRef = useRef<NodeJS.Timeout>();


  useEffect(() => {
    let intervalId: any;
    if (timeLeft > 0) {
      intervalId = setInterval(() => {
        dispatch(setTimeLeft(timeLeft - 1));
      }, 1000);
    } else if (timeLeft === 0) {
      nextQuestionHandler();
    } else if (current === 9) {
      dispatch(resetQuizTime());
      dispatch(setShowResultPage(true));
    }

    return () => clearInterval(intervalId);
  }, [timeLeft, current, dispatch]);

  useEffect(() => {
    if (!showResultPage) {
      totalTimeIntervalRef.current = setInterval(() => {
        dispatch(incrementTotalTime());
      }, 1000);
    }

    return () => {
      if (totalTimeIntervalRef.current) {
        clearInterval(totalTimeIntervalRef.current);
      }
    };
  }, [dispatch, showResultPage]);
  
  if (isLoading) {
    return <Loading />;
  }

  const resultPage = <QuizResult />;
  const quizData = data?.data[0]?.quizOptions;
  
  const saveHandler = () => {
    if (ans === quizData[current]?.correct) {
      dispatch(setCorrect(correct + 1));
    }
    nextQuestionHandler();
  };

  const nextQuestionHandler = () => {
    if (current < 9) { 
      dispatch(setCurrent(current + 1));
      dispatch(setAns(null));
      dispatch(setTimeLeft(30));
    } else {
      dispatch(setShowResultPage(true));
    }
  };

  const previousHandler = () => {
    dispatch(setCurrent(current - 1));
  };


  return !showResultPage ? (
    <div className="w-[60%] mx-auto mt-20 bg-white shadow-2xl p-10 rounded">
      <div>
        <div className="flex justify-around text-xl font-bold">
          <p>Total Time: {totalTime}</p>
         <p>Time Left:  {timeLeft}</p>
        </div>
        <Slider
        className="time-left-slider"
      min={0}
      max={30} 
      value={timeLeft}
      disabled={true}
    />
        <h2 className="h-16">
          {current + 1 + ". " + quizData[current]?.question}
        </h2>

        <div className="h-44 ">
          <div className="grid grid-cols-2 mt-3">
            <div
              className={`p-2 border ${
                ans === "a" ? "bg-blue-400 text-white" : ""
              } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
              onClick={() => dispatch(setAns("a"))}
            >
              A :{quizData[current]?.a}
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
          {current > 0 && (
            <div className="">
              <Button onClick={previousHandler}>Previous</Button>
            </div>
          )}

          {current === 9 ? (
            <div
              onClick={() => {
                saveHandler();
                dispatch(setShowResultPage(true))
              }}
              className=""
            >
              <Button>Finish</Button>
            </div>
          ) : (
            <div className="">
              <Button onClick={saveHandler}>Save And Next</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    resultPage
  );
};

export default StartQuiz;
