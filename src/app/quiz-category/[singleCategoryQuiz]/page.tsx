"use client";

import SingleQuiz from "@/components/view/singleQuiz/SingleQuiz";

const SingleCategory = ({ params }: any) => {
  const quizCategory = params.singleCategoryQuiz;
  return <SingleQuiz quizCategory={quizCategory} />;
};

export default SingleCategory;
