import MyButton from "@/components/ui/button/Button";

const SingleQuiz = () => {
    return (
        <div>
            <div className="flex flex-col mt-20 justify-center items-center">
            <h1 className="text-4xl mb-2">Front End Quiz</h1>
            <h2>Put your knowledge to the test</h2>
           
                <p className=" mt-3">Choose the number of <br /> questions to automatically <br/> start the game</p>
            </div>

            <div className="flex  justify-between w-60 mx-auto mt-8">
                <MyButton name="5" className="w-16 h-10"/>
                <MyButton name="10" className="w-16 h-10"/>
                <MyButton name="15" className="w-16 h-10"/>
            </div>
          
        </div>
    );
};

export default SingleQuiz;