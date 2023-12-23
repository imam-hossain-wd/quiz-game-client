"use client"

import { EyeOutlined, FolderAddOutlined } from "@ant-design/icons";
import Link from "next/link";

const Quiz = () => {
    return (
        <div className="flex flex-col mt-10 justify-items-center lg:flex-row justify-around">
            <Link href="/dashboard/admin/quiz/view" className="w-full md:w-80 lg:w-80 h-44 rounded bg-green-400 ">
               
               <div className="text-white flex justify-center flex-col items-center mt-8">
                   <p className="text-4xl"><EyeOutlined /></p>
                   <p className="font-bold mt-3 text-3xl">View Quiz</p>
               </div>
           </Link>
            <Link href="/dashboard/admin/quiz/add" className="w-full md:w-80 lg:w-80 mt-5 lg:mt-0 h-44 rounded bg-sky-400 ">
               
               <div className="text-white flex justify-center flex-col items-center mt-8">
                   <p className="text-4xl"><FolderAddOutlined /></p>
                   <p className="font-bold mt-3 text-3xl">Add Quiz</p>
               </div>
           </Link>
        </div>
    );
};

export default Quiz;