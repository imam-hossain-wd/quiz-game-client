import MyButton from "@/components/ui/button/Button";
import Image from "next/image";

const QuizCategory = () => {
    // Category(frontend, fullstack, react.js, javascript,
   
    

    const quizCategories = [
        {
            name: "Front End",
            image: "https://i.ibb.co/z40MJwC/frontend-quiz.webp",
        },
        {
            name: "Full Stack",
            image: "https://i.ibb.co/FxXHC8p/full-stack.png",
        },
        {
            name: "React",
            image: "https://i.ibb.co/dQ854CD/react.png",
        },
        {
            name: "Javascript",
            image: "https://i.ibb.co/WkC1HFX/javascript.png",
        },
    ]
    return (
        <div>
            <h1>Quiz category page...</h1>
            <div className="w-[90%] mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    quizCategories.map((category, index)=> (
                        <div key={index}>
                            <div >
                                <Image width={300} height={300} src={category.image} alt="category image" />

                            </div>
                            <div className="flex flex-col items-center mt-3 justify-center">
                                <p>{category.name}</p>
                                <MyButton name="Play Quiz" className="w-40 h-10 mt-2" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default QuizCategory;