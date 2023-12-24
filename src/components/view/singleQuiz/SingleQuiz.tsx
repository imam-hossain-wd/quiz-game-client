"use client"
import MyButton from "@/components/ui/button/Button";
import { useGetSingleQuizQuery } from "@/redux/api/quizApi";
import Loading from "../loading/Loading";
import Image from "next/image";

const SingleQuiz = ({quizCategory}:any) => {
    console.log(quizCategory, 'quizCategory');

    const {data, isLoading}= useGetSingleQuizQuery(quizCategory)
    if(isLoading){
        return <Loading />
    }
    console.log(data.data[0], 'single category quiz data...');
    const singleQuizData = data.data[0];
    // singleQuizData?.questions?.map((qs:any) => console.log(qs, 'qs'))
    return (
        <div>
            <div className="flex flex-col mt-10 justify-center items-center">
            
            <div>
                <Image src={singleQuizData.image} width={330} height={270} alt={singleQuizData.name}/>
            </div>
            <h1 className="text-4xl mb-2">{singleQuizData.name} Quiz</h1>
            <h2>Put your knowledge to the test</h2>
           
                <p className=" mt-3">Choose the number of <br /> questions to automatically <br/> start the game</p>
            </div>

            <div className=" w-60 mx-auto mt-8">
                <MyButton name="Start Quiz" className="w-40 font-bold text-lg h-10"/>
            </div>
            {/* <div className="flex  justify-between w-60 mx-auto mt-8">
                <MyButton name="5" className="w-16 h-10"/>
                <MyButton name="10" className="w-16 h-10"/>
                <MyButton name="15" className="w-16 h-10"/>
            </div> */}
          
        </div>
    );
};

export default SingleQuiz;