export type IUser = {
    fullName: string;
    email: string;
    password: string;
};

export type ILogInData = {
    email: string;
    password: string;
}

export type IQuiz = {
    name:string;
    category:string;
    image:string;
    question:string;
    mark:number;
    optionOne:string;
    optionTwo:string;
    optionThree:string;
    optionFour:string;
    answer:string
}


export interface ISteps {
    title?: string;
    content?: React.ReactElement | React.ReactNode;
  }
  
export interface IStepsProps {
    steps: ISteps[];
    persistKey: string;
    submitHandler: (el: any) => void;
    navigateLink?: string;
  }