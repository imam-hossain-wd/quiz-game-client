import { answerOptions } from "@/utils/global";
import FormSelectField from "../forms/FormSelectField";
import FormInput from "../forms/InputForm";


const QuizOptions = ({ pageTitle, step }: any) => {
  return (
    <div>
      <h1 className="text-center my-2">{pageTitle}</h1>
      <div className="mb-3">
        <FormInput
          name={`question_${step}`}
          label="Question"
          type="text"
          size="large"
          placeholder="Question"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
 
        <div className="">
          <FormInput
            name={`optionOne_${step}`}
            label="Option 1"
            type="text"
            size="large"
            placeholder="Option 1"
          />
        </div>
        <div className="">
          <FormInput
            name={`optionTwo_${step}`}
            label="Option 2"
            type="text"
            size="large"
            placeholder="Option 2"
          />
        </div>
        <div className="">
          <FormInput
            name={`optionThree_${step}`}
            label="Option 3"
            type="text"
            size="large"
            placeholder="Option 3"
          />
        </div>
        <div className="">
          <FormInput
            name={`optionFour_${step}`}
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
          name={`answer_${step}`}
          options={answerOptions}
          label="Answer"
          placeholder="Select Answer"
        />
      </div>
    </div>
  );
};

export default QuizOptions;