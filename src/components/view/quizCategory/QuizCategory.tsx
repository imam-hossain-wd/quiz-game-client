"use client";

import MyButton from "@/components/ui/button/Button";
import useAccessToken from "@/components/ui/hooks/useToken";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import Loading from "../loading/Loading";
import QuizCart from "@/components/ui/quizCart/QuizCart";
import { useGetQuizQuery } from "@/redux/api/quizApi";

const QuizCategory = () => {
  const { accessToken } = useAppSelector((state) => state?.auth);
  useAccessToken(accessToken);

  const { data, isLoading } = useGetQuizQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }
  const categoryDatas = data?.data;


  return (
    <div>
      <div className="w-[90%] mx-auto grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {categoryDatas &&
          categoryDatas.map((category: any) => (
            <div className="bg-white shadow-lg px-2 py-5" key={category.id}>
              <Image
                className="rounded w-full"
                src={category?.image}
                width={280}
                height={250}
                alt={category.name}
              />
              <p className="text-lg text-center mt-3 font-bold">
                {category.name}
              </p>
              <Link
                className="flex justify-center items-center"
                href={`/quiz-category/${category.category}`}
              >
                <MyButton
                  name="Play Quiz"
                  className="w-40  h-10 mt-4 text-[17px] font-semibold"
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default QuizCategory;
