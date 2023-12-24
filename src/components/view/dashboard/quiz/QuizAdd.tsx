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

        // const data = values.data || [];

        // const obj = { ...values };
        // const file = obj["file"];
        // delete obj["file"];
      
        // // Add the current quiz data to the array
        // data.push(obj);
      
        // // Assuming 'fileData' is an array to store all file data
        // const fileData = values.fileData || [];
        // fileData.push(file);
      
        // const formData = new FormData();
        // console.log(data, 'stepper data,,,');
        // const obj = { ...values };
        // const file = obj["file"];
        // delete obj["file"];
        // const data = JSON.stringify(obj);
        // const formData = new FormData();
        // formData.append("file", file as Blob);
        // formData.append("data", data);
        // message.loading("Creating...");
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