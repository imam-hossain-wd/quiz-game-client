import { answerOptions } from "@/utils/global";
import FormSelectField from "../forms/FormSelectField";
import FormInput from "../forms/InputForm";

const QuizOptions = ({pageTitle}:any) => {
    return (
        <div>
            <h1 className="text-center my-2">{pageTitle}</h1>
             <div className="mb-3">
                <FormInput
                  name="question"
                  label="Question"
                  type="text"
                  size="large"
                  placeholder="Question"
                />
              </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
           <div className="mb-3">
                <FormInput
                  name="optionOne"
                  label="Option 1"
                  type="text"
                  size="large"
                  placeholder="Option 1"
                />
              </div>
              <div className="mb-3">
                <FormInput
                  name="optionTwo"
                  label="Option 2"
                  type="text"
                  size="large"
                  placeholder="Option 2"
                />
              </div>
              <div className="mb-3">
                <FormInput
                  name="optionThree"
                  label="Option 3"
                  type="text"
                  size="large"
                  placeholder="Option 3"
                />
              </div>
              <div className="mb-3">
                <FormInput
                  name="optionFour"
                  label="Option 4"
                  type="text"
                  size="large"
                  placeholder="Option 4"
                />
              </div>

           </div>
              <div>
              <FormSelectField
                  size="large"
                  name="answer"
                  options={answerOptions}
                  label="Answer"
                  placeholder="Select Answer"
                />
              </div>
        </div>
    );
};

export default QuizOptions;