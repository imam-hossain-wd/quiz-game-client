"use client"

import SingleQuiz from "@/components/view/singleQuiz/SingleQuiz";

const SingleCategory = ({params}:any) => {

    // console.log(params.singleCategoryQuiz[0],'params');

    const quizCategory = params.singleCategoryQuiz[0]
    return <SingleQuiz quizCategory={quizCategory}/>
};

export default SingleCategory;