import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { setCurrent, setShowResultPage} from "@/redux/slice/quizSlice";
import { useAppDispatch } from "@/redux/hooks";

const QuizResult = () => {
  const dispatch = useAppDispatch();
  
  return (
    <Result
      icon={<SmileOutlined />}
      title="Great, we have done all the operations!"
      extra={ <Button onClick={() => {
        dispatch(setShowResultPage(false));
        dispatch(setCurrent(0));
    }} type="primary">Play Agin</Button>}
    />

  );
};

export default QuizResult;
