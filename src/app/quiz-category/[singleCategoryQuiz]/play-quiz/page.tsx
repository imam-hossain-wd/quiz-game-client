import StartQuiz from "@/components/view/dashboard/quiz/StartQuiz";


const page = ({params}:any) => {
    const category= params?.singleCategoryQuiz;
    return <StartQuiz category={category}  />
};

export default page;