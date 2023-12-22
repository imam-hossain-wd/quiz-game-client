"use client";

import MyButton from "@/components/ui/button/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAccessToken } from "@/redux/slice/authSlice";
import { authKey } from "@/utils/auth.services";
import { getFromLocalStorage } from "@/utils/localStorage";
import { Button, message } from "antd";
import { useRouter } from "next/navigation";


const HomePage = () => {
  const {accessToken} = useAppSelector((state) => state?.auth);
  const token = getFromLocalStorage(authKey);
  const dispatch = useAppDispatch();
  dispatch(setAccessToken(token as string));

  const router = useRouter();

  const handleSubmit = ()=> {

    accessToken &&  router.push('/quiz-category')

   if(!accessToken){
    message.error("You are not Authorized ! Please login")
    router.push('/login')
   }
  
  }
  return (
    <div className="flex w-3/6 mx-auto mt-5 flex-col justify-center items-center">
      <h1
        style={{ border: "5px solid green" }}
        className="text-center mb-3 p-7 w-full"
      >
        Quiz Application
      </h1>

      <ul className="">
        <li>You will be asked 10 questions one after one</li>
        <li>10 Points is rewarded for the correct answer</li>
        <li>
          Each Question has three question. You can choose only one options
        </li>
        <li>Result will be declared at the end of the quiz</li>
      </ul>

      {/* <Link href="/quiz-category"> */}
        <Button
        onClick={handleSubmit}
        type="primary" className="mt-5">
          Start Quiz
        </Button>
      {/* </Link> */}
      {/* <Link href="/quiz-category">
        <MyButton
        
          name="Start Quiz"
          className="w-40 h-10 text-lg font-semibold mt-5"
        />
      </Link> */}
    </div>
  );
};

export default HomePage;
