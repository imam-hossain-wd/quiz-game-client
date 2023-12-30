"use client";

import { useGetQuizQuery } from "@/redux/api/quizApi";
import Link from "next/link";
import Loading from "../../loading/Loading";
import Image from "next/image";
import QuizCart from "@/components/ui/quizCart/QuizCart";
import { Button } from "antd";
import MyButton from "@/components/ui/button/Button";

const Quiz = () => {
  const { data, isLoading } = useGetQuizQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }
  const categoryDatas = data?.data;
  console.log(categoryDatas, 'qdata');

  return (
    <div>
      <Link href="/dashboard/admin/quiz/add"><MyButton name="Create Quiz" className="w-40 " /></Link>

      <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {categoryDatas &&
          categoryDatas.map((category: any) => (
            <QuizCart key={category.id} category={category} />
            
          ))}

      </div>
    </div>
  );
};

export default Quiz;
