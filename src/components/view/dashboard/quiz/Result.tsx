
"use client";

import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { setCorrect, setCurrent, setShowResultPage } from "@/redux/slice/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { resetQuizTime } from "@/redux/slice/timecounterSlice";

const QuizResult = () => {
  const dispatch = useAppDispatch();
  const { correct } = useAppSelector((state) => state.quiz);
  const { totalTime } = useAppSelector((state) => state.timeCounter);

  const resetHandler = () => {
    dispatch(setShowResultPage(false));
    dispatch(setCurrent(0));
    dispatch(setCorrect(0));
    dispatch(resetQuizTime());
  };

  return (
    <div>
      <h1> Total Taking Time : {totalTime}</h1>
      <h1 className="text-center mt-10">Total Score : {correct}</h1>
      <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations!"
        extra={<Button onClick={resetHandler} type="primary">Play Again</Button>}
      />
    </div>
  );
};

export default QuizResult;
