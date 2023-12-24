"use client";

import { useGetQuizQuery } from "@/redux/api/quizApi";
import { EyeOutlined, FolderAddOutlined } from "@ant-design/icons";
import Link from "next/link";
import Loading from "../../loading/Loading";
import Image from "next/image";
import QuizCart from "@/components/ui/quizCart/QuizCart";
import { Button } from "antd";

const Quiz = () => {
  const { data, isLoading } = useGetQuizQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }
  const categoryDatas = data?.data;

  return (
    <div>
      <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {categoryDatas &&
          categoryDatas.map((category: any) => (
            <QuizCart key={category.id} category={category} />
            
          ))}

      </div>
    </div>
    // <div className="flex flex-col mt-10 justify-items-center lg:flex-row justify-around">
    //     <Link href="/dashboard/admin/quiz/view" className="w-full md:w-80 lg:w-80 h-44 rounded bg-green-400 ">

    //        <div className="text-white flex justify-center flex-col items-center mt-8">
    //            <p className="text-4xl"><EyeOutlined /></p>
    //            <p className="font-bold mt-3 text-3xl">View Quiz</p>
    //        </div>
    //    </Link>
    //     <Link href="/dashboard/admin/quiz/add" className="w-full md:w-80 lg:w-80 mt-5 lg:mt-0 h-44 rounded bg-sky-400 ">

    //        <div className="text-white flex justify-center flex-col items-center mt-8">
    //            <p className="text-4xl"><FolderAddOutlined /></p>
    //            <p className="font-bold mt-3 text-3xl">Add Quiz</p>
    //        </div>
    //    </Link>
    // </div>
  );
};

export default Quiz;
