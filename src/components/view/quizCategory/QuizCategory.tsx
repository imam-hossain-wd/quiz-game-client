"use client"

import MyButton from "@/components/ui/button/Button";
import useAccessToken from "@/components/ui/hooks/useToken";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";

const QuizCategory = () => {
    const {accessToken} = useAppSelector((state) => state?.auth);
    useAccessToken(accessToken)
    const quizCategories = [
        {
            name: "Front End",
            image: "https://i.ibb.co/z40MJwC/frontend-quiz.webp",
            category:"front-end"
        },
        {
            name: "Full Stack",
            image: "https://i.ibb.co/FxXHC8p/full-stack.png",
            category:"full-stack"
        },
        {
            name: "React",
            image: "https://i.ibb.co/dQ854CD/react.png",
            category:"react"
        },
        {
            name: "Javascript",
            image: "https://i.ibb.co/WkC1HFX/javascript.png",
            category:"javascript"
        },
    ]
    return (
        <div className="mt-10">

            <div className="w-[90%] mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    quizCategories.map((category, index)=> (
                        <div key={index}>
                            <div >
                                <Image width={300} height={300} src={category.image} alt="category image" />

                            </div>
                            <div className="flex flex-col items-center mt-3 justify-center">
                                <p className="text-lg">{category.name}</p>
                               <Link href={`/quiz-category/${category.category}`}>
                               <MyButton name="Play Quiz" className="w-40 h-10 mt-2 text-[17px] font-semibold" />
                               </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default QuizCategory;