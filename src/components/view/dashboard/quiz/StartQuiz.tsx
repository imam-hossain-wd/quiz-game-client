/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Loading from "../../loading/Loading";
import { useGetSingleQuizQuery } from "@/redux/api/quizApi";
import { Button, Slider, message } from "antd";
import QuizResult from "./Result";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setCurrent,
  setAns,
  setCorrect,
  setShowResultPage,
} from "@/redux/slice/quizSlice";
import { useEffect, useRef } from "react";
import {
  incrementTotalTime,
  resetQuizTime,
  setTimeLeft,
} from "@/redux/slice/timecounterSlice";

const StartQuiz = ({ category }: any) => {
  const dispatch = useAppDispatch();
  const { timeLeft, totalTime } = useAppSelector((state) => state.timeCounter);

  const { current, ans, correct, showResultPage } =
    useAppSelector((state) => state.quiz);
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


  const quizData = data?.data[0]?.quizOptions;
  const QuizName = data?.data[0]?.name;
  const resultPage = <QuizResult />;

  //save button handler 
  const saveHandler = () => {
    if (ans !== null ) {
      if (ans === quizData[current]?.correct) {
        dispatch(setCorrect(correct + 1));
      }
      nextQuestionHandler();
    } else {
      message.error("Please select an answer");
      return;
    }
  };

  // next Question button handler 
  const nextQuestionHandler = () => {
    if (current < 9) {
      dispatch(setCurrent(current + 1));
      dispatch(setAns(null));
      dispatch(setTimeLeft(30));
    } else {
      dispatch(setShowResultPage(true));
    }
  };

  // previous button handler 
  const previousHandler = () => {
    dispatch(setCurrent(current - 1));
  };


  // finish button handler 
  const finishHandler = () => {
    if (ans !== null) {
      saveHandler();
      dispatch(setShowResultPage(true));
    } else {
      message.error("Please select an answer");
    }
  };

  //loading 
  if (isLoading) {
    return <Loading />;
  }


  return !showResultPage ? (
    <div className="flex justify-center items-center h-screen -mt-10">
      <div className="w-full md:w-[80%] lg:w-[60%] bg-white shadow-2xl p-10 rounded">
        <div>
          <div className=" -mt-2 flex justify-between text-xl p-3 rounded">
            <p>{QuizName} Quiz</p>
            <p>Total Quiz : {quizData?.length} </p>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <p>Total Time: {totalTime}</p>
            <p>Time Left: {timeLeft}</p>
          </div>
          <Slider
            className="time-left-slider"
            min={0}
            max={30}
            value={timeLeft}
            disabled={true}
          />
          <h3 className="h-full lg:h-16">
            {current + 1 + ". " + quizData[current]?.question}
          </h3>

          <div className="h-44 ">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
              <div
                style={{ border: "1px solid gray", padding: "10px" }}
                className={`${
                  ans === "a" ? "bg-blue-400 text-white" : ""
                } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
                onClick={() => dispatch(setAns("a"))}
              >
                A : {quizData[current]?.a}
              </div>
              <div
                style={{ border: "1px solid gray", padding: "10px" }}
                className={`${
                  ans === "b" ? "bg-blue-400 text-white" : ""
                } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
                onClick={() => dispatch(setAns("b"))}
              >
                B : {quizData[current]?.b}
              </div>
              <div
                style={{ border: "1px solid gray", padding: "10px" }}
                className={`${
                  ans === "c" ? "bg-blue-400 text-white" : ""
                } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
                onClick={() => dispatch(setAns("c"))}
              >
                C : {quizData[current]?.c}
              </div>
              <div
                style={{ border: "1px solid gray", padding: "10px" }}
                className={`${
                  ans === "d" ? "bg-blue-400 text-white" : ""
                } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
                onClick={() => dispatch(setAns("d"))}
              >
                D : {quizData[current]?.d}
              </div>
            </div>
          </div>
          <div className="flex justify-end -mt-2">
            {current > 0 && (
              <div className="mr-5">
                <Button onClick={previousHandler}>Previous</Button>
              </div>
            )}

            {current === 9 ? (
              <div onClick={finishHandler} className="">
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
    </div>
  ) : (
    resultPage
  );
};

export default StartQuiz;
