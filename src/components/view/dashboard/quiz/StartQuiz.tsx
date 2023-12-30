"use client";

import StepperForm from "@/components/ui/stepperForm/StepperForm";
import { useAppSelector } from "@/redux/hooks";

import QuizContent from "./QuizContent";
import Loading from "../../loading/Loading";
import { useGetSingleQuizQuery } from "@/redux/api/quizApi";

const StartQuiz = ({ category }: any) => {

  const { data, isLoading } = useGetSingleQuizQuery(category);
  

  if (isLoading) {
    return <Loading />;
  }

  const quizData = data?.data[0]?.quizOptions;
  
    const quizSteps = quizData?.map((quizItem:any, index:number) => ({
      title: ``,
      content: <QuizContent quizData={quizItem} />
    })) || [];
  
    const steps = [
      ...quizSteps,
    ];



  const handleStudentSubmit = async (values: any) => {
    console.log(values, 'values form....');
    try {

    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <StepperForm     persistKey="student-create-form"
          submitHandler={(value) => {
            handleStudentSubmit(value);
          }}
          steps={steps}/>
      quizzzzdess
      {category}
    </div>
  );
};

export default StartQuiz;
