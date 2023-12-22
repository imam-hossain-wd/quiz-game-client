"use client"

import SingleQuiz from "@/components/view/singleQuiz/SingleQuiz";

const SingleCategory = ({params}:any) => {

    console.log(params.singleCategoryQuiz[0],'params');
    return <SingleQuiz />
};

export default SingleCategory;