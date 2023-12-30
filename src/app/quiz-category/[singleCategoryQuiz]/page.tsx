"use client"

import SingleQuiz from "@/components/view/singleQuiz/SingleQuiz";

const SingleCategory = ({params}:any) => {

    // console.log(params.singleCategoryQuiz,'params');

    const quizCategory = params.singleCategoryQuiz
    return <SingleQuiz quizCategory={quizCategory}/>
};

export default SingleCategory;