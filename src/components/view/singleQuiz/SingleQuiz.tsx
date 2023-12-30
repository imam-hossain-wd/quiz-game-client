"use client";
import MyButton from "@/components/ui/button/Button";
import { useGetSingleQuizQuery } from "@/redux/api/quizApi";
import Loading from "../loading/Loading";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setQuizData } from "@/redux/slice/quizSlice";

const SingleQuiz = ({ quizCategory }: any) => {
  // console.log(quizCategory, 'quizCategory name');

  const dispatch = useAppDispatch();
  const quizData = useAppSelector((state) => state?.quiz?.quizData);
  console.log(quizData, "hello wuiz datas..");

  const { data, isLoading } = useGetSingleQuizQuery(quizCategory);
  if (isLoading) {
    return <Loading />;
  }
  // console.log(data?.data[0]?.quizOptions, 'single category data..');

  const singleQuizData = data.data[0];

  const question = data?.data[0]?.quizOptions;

  const handleSetQuestion = async () => {
    dispatch(setQuizData(question));
  };

  return (
    <div>
      <div className="flex flex-col mt-10 justify-center items-center">
        <div>
          <Image
            src={singleQuizData?.image}
            width={330}
            height={270}
            alt={singleQuizData?.name}
          />
        </div>
        <h1 className="text-4xl mb-2">{singleQuizData?.name} Quiz</h1>
        <h2>Put your knowledge to the test</h2>

        <p className=" mt-3">
          Choose the number of <br /> questions to automatically <br /> start
          the game
        </p>
      </div>

      <Link
       
        href={`/quiz-category/${singleQuizData?.category}/play-quiz`}
        className="flex justify-center mt-8"
        onClick={handleSetQuestion}
      >
        <MyButton
          name="Start Quiz"
          className="w-40 font-bold text-lg h-10"
        ></MyButton>
        {/* <div >
                <MyButton name="Start Quiz" className="w-40 font-bold text-lg h-10"/>
                </div> */}
      </Link>

      {/* <div className="flex  justify-between w-60 mx-auto mt-8">
                <MyButton name="5" className="w-16 h-10"/>
                <MyButton name="10" className="w-16 h-10"/>
                <MyButton name="15" className="w-16 h-10"/>
            </div> */}
    </div>
  );
};

export default SingleQuiz;
