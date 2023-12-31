"use client";

import MyButton from "@/components/ui/button/Button";
import Form from "@/components/ui/forms/From";
import FormInput from "@/components/ui/forms/InputForm";
import { useLogInUserMutation } from "@/redux/api/authApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAccessToken } from "@/redux/slice/authSlice";
import { ILogInData } from "@/types/common";
import { storeUserInto } from "@/utils/auth.services";
import { message } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

const Login = () => {

  const dispatch = useAppDispatch();
  const [logInUser, {error}] = useLogInUserMutation();

  const router = useRouter();


  const onSubmit: SubmitHandler<ILogInData> = async (data: any) => {
    const loginData = {
      email: data?.email,
      password: data?.password,
    };

    const redirectAfterLogin = sessionStorage.getItem('redirectAfterLogin');

    try {
      const res = await logInUser(loginData);
      //@ts-ignore
      const result = res?.data;
      console.log(result, 'login')
      if (result?.success === true && result?.token) {
        message.success(result.message);
        storeUserInto({ accessToken: result.token });
        dispatch(setAccessToken(result.token));
        router.push("/")
      }
     
    } catch (error: any) {
      console.error(error.message);
    }
  };

//@ts-ignore
  const ErrorMesage = error && error?.data?.message


  return (
    <div className="bg-white border-2 border-gray-200 mt-24">
      <div className="">
        <div
          className="w-full lg:w-[30%] mx-auto bg-white drop-shadow-2xl p-5 rounded-lg"
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <h3 className="text-center text-lg  py-1 rounded mx-auto mb-3 ">
            Welcome Back
          </h3>
          <p className="text-center mb-2 mb-1">
            Please Login into your account
          </p>
          <Form submitHandler={onSubmit}>
            <div className="">
              <div className="mb-3">
                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  placeholder="Email"
                />

                <span className="text-sm text-red-500 mt-2">{ErrorMesage && 
                ErrorMesage === "User not found" && ErrorMesage }</span>
              </div>

              <div className="mb-5">
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  placeholder="Strong Password"
                />
                <span className="text-sm text-red-500 mt-2">{ErrorMesage && 
                ErrorMesage === "Password is incorrect" && ErrorMesage }</span>
              </div>
            </div>
            <div className="flex justify-center">
              <MyButton
                name="Log In"
                className="text-md h-8 flex justify-center items-center w-full bg-primary"
              />
            </div>
            <div className="mt-5 flex justify-center">
              <p className="text-[12px] font-semibold">
                New to CarDev?{" "}
                <Link href="/signup" className="text-primary underline">
                  Register
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
