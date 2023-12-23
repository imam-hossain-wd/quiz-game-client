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
        {
          title: "",
          content: <QuizOptions pageTitle={"Quiz 1"} />,
        },
        {
          title: "",
          content: <QuizOptions pageTitle={"Quiz 2"} />,
        },
        {
          title: "",
          content: <QuizOptions pageTitle={"Quiz 3"} />,
        },
        {
          title: "",
          content: <QuizOptions pageTitle={"Quiz 4"} />,
        },
        {
          title: "",
          content: <QuizOptions pageTitle={"Quiz 5"} />,
        },
        {
          title: "",
          content: <QuizOptions pageTitle={"Quiz 6"} />,
        },
        {
          title: "",
          content: <QuizOptions pageTitle={"Quiz 7"} />,
        },
        {
          title: "",
          content: <QuizOptions pageTitle={"Quiz 8"} />,
        },
        {
          title: "",
          content: <QuizOptions pageTitle={"Quiz 9"} />,
        },
        {
          title: "",
          content: <QuizOptions pageTitle={"Quiz 10"} />,
        },
      ];
    
      const handleStudentSubmit = async (values: any) => {
        console.log(values, 'values');
        const obj = { ...values };
        const file = obj["file"];
        delete obj["file"];
        const data = JSON.stringify(obj);
        const formData = new FormData();
        formData.append("file", file as Blob);
        formData.append("data", data);
        message.loading("Creating...");
        try {
        //   const res = await addStudentWithFormData(formData);
        //   if (!!res) {
        //     message.success("Student created successfully!");
        //   }
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