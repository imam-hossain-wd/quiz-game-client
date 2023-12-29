"use client"

import QuizInfo from "@/components/ui/quizForm/QuizInfo";
import QuizOptions from "@/components/ui/quizForm/QuizOptions";
import StepperForm from "@/components/ui/stepperForm/StepperForm";
import { message } from "antd";


const QuizAdd = () => {

  
  const steps = [
    {
      title: "",
      content: <QuizInfo pageTitle={"Quiz Information"} />,
    },
    ...Array.from({ length: 10 }, (_, index) => ({
      title: "",
      content: <QuizOptions pageTitle={`Quiz ${index + 1}`} step={index} />,
    })),
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
        </div>
    );
};

export default QuizAdd;