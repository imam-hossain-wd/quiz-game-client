import StartQuiz from "@/components/view/dashboard/quiz/StartQuiz";


const page = ({params}:any) => {
    // console.log(params, 'hellow params...');
    const category= params?.singleCategoryQuiz;
    return <StartQuiz category={category}  />
};

export default page;