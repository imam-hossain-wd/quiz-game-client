import {  quizCategoryOptions } from "@/utils/global";
import FormSelectField from "../forms/FormSelectField";
import FormInput from "../forms/InputForm";
import ImageUploader from "../forms/ImageUploader";

const QuizInfo = ({pageTitle}:any) => {
    return (
        <div className="">
            <h1 className="text-center my-2">{pageTitle}</h1>
            <div className="mb-3">
                <FormInput
                  name="name"
                  label="Name"
                  type="text"
                  size="large"
                  placeholder="Name"
                />
              </div>
              <div>
              <FormSelectField
                  size="large"
                  name="category"
                  options={quizCategoryOptions}
                  label="Category"
                  placeholder="Select Answer"
                />
              </div>
             
              <div className="mb-3">
                <FormInput
                  name="mark"
                  label="Mark"
                  type="text"
                  size="large"
                  placeholder="Mark"
                />
              </div>
              
              <div>
                <ImageUploader
                name="file"
                />
              </div>
        </div>
    );
};

export default QuizInfo;