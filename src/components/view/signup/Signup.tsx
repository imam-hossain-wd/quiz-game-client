/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
"use client";

import { message } from "antd";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Form from "@/components/ui/forms/From";
import FormInput from "@/components/ui/forms/InputForm";
import MyButton from "@/components/ui/button/Button";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { useCreateUserMutation } from "@/redux/api/authApi";
import { IUser } from "@/types/common";



const SingUpPage = () => {
  const router = useRouter();

  const [createUser, { error, isLoading }] = useCreateUserMutation();

  const onSubmit: SubmitHandler<IUser> = async (values: IUser) => {
    const { fullName, email, password } = values;
    const userData = {
      fullName,
      email,
      password,
    };

    try {
      const res =await createUser(userData);
      //@ts-ignore
      const result = res?.data;
      if(result?.success === true){
        message.loading("Creating User");
        message.success(result.message)
        router.push('/login')
      }
      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className=" p-5 mt-10">
      <div
        className="w-full lg:w-[30%] h-[400px] bg-white drop-shadow-2xl mx-auto  p-5 rounded-lg"
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
        }}
      >
        <div>
          <h2 className="text-center  p-2 w-full lg:w-72 mx-auto">
            Create An Account
          </h2>
          <p className="text-sm text-center w-full lg:w-72 mx-auto mb-2">
            Create an account to enjoy all the services without any ads for
            free!
          </p>
        </div>
        <Form submitHandler={onSubmit}>
          <div className="grid grid-cols-1 gap-1">
            <div className="">
              <FormInput
                name="fullName"
                type="text"
                size="large"
                placeholder="Full Name"
              />
            </div>

            <div className="">
              <FormInput
                name="email"
                type="text"
                size="large"
                placeholder="Email"
              />
               <span className="ml-3 text-sm mt-3 text-red-500">
               
                  { //@ts-ignore
                  error && error?.data?.message
                  }
                </span>
            </div>

            <div className="">
              <FormInput
                name="password"
                type="password"
                size="large"
                placeholder="Strong Password"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <MyButton name="Create Account" className="w-full mt-4 h-9" />
          </div>
          <p className="text-sm text-center mt-3 ">
            Already Have An Account?{" "}
            <Link className="text-primary" href="/login">
              Log In
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SingUpPage;
