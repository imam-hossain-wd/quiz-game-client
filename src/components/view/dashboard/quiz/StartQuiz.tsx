"use client"

import StepperForm from "@/components/ui/stepperForm/StepperForm";
import { useAppSelector } from "@/redux/hooks";

import QuizContent from './QuizContent'
import Loading from "../../loading/Loading";
import { useGetSingleQuizQuery } from "@/redux/api/quizApi";
const StartQuiz = () => {
    
  const {data, isLoading}= useGetSingleQuizQuery('full-stack')
  // console.log(data?.data[0]?.questions
  //   , 'category data...');

    const quizData = data?.data[0]?.questions;
    if(isLoading){
      <Loading />
    }
  // const quizState  = useAppSelector((state)=> state.quiz)

  // const quizzes = quizState?.quizData;

 quizData?.map((quiz: any) => (console.log(quiz)))
// let steps = quizData && quizData?.length > 0
//   ? 
//       title: ``,
//       content: <QuizContent quizData={quiz} />,
//     }))
//   : <Loading />;
//   console.log(steps, 'steps');

        // const handleStudentSubmit = async (values: any) => {
        //   console.log(values, 'values form....');
        //   try {
   
        //   } catch (err: any) {
        //     console.error(err.message);
        //   }
        // };
  
      return (
          <div>
              {/* <StepperForm     persistKey="student-create-form"
          submitHandler={(value) => {
            handleStudentSubmit(value);
          }}
          steps={steps}/> */}
          quizzzzdess

          </div>
      );
    };

    export default StartQuiz;
   
