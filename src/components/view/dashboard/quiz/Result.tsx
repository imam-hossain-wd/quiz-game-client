
"use client";

import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { setAns, setCorrect, setCurrent, setShowResultPage } from "@/redux/slice/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { resetQuizTime } from "@/redux/slice/timecounterSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

const QuizResult = () => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const { correct } = useAppSelector((state) => state.quiz);
  const { totalTime } = useAppSelector((state) => state.timeCounter);

  const resetHandler = () => {
    dispatch(setShowResultPage(false));
    dispatch(setCurrent(0));
    dispatch(setCorrect(0));
    dispatch(resetQuizTime());
    dispatch(setAns(''));
  };
  const categoryHandler = ()=> {
    router.push("/quiz-category");
    dispatch(setShowResultPage(false));
    dispatch(setAns(''));
    dispatch(setCurrent(0));
    dispatch(setCorrect(0));
    dispatch(resetQuizTime());
  }

  const showButton = <div>
    <Button onClick={resetHandler} type="primary">Play Again</Button>
    <Button onClick={categoryHandler} className="ml-5" type="primary"> Play other Category</Button>
  </div>

  return (
    <div className="mt-10">
      <h1 className="text-center mb-2"> Total Taking Time : {totalTime}</h1>
      <h1 className="text-center ">Total Score : {correct}</h1>
      <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations!"
        extra={showButton}
      />
    </div>
  );
};

export default QuizResult;
