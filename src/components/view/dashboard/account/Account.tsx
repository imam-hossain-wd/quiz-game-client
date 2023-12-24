
"use client"
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/utils/auth.services";
import { InstagramOutlined, LinkedinOutlined, TwitterOutlined, UserOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Loading from "../../loading/Loading";
import { useState } from "react";


const Account = () => {
  const user = getUserInfo() as any;
  const id = user?.id;
  const { data,isLoading } = useGetSingleUserQuery(id)

  if(isLoading){
    return <Loading />
  }




    return (
        <div>
            <div className="bg-white shadow-xl w-96 mx-auto mt-20 py-10 rounded flex justify-center flex-col items-center">
        <div className="">
        <Avatar size={120} icon={<UserOutlined />} />
        </div>
        
        <div>
                <p className="text-xl font-bold mt-2">{data?.data?.fullName}</p>
                <p>{data?.data?.email}</p>
              </div>
        <div className="flex my-4">
                <span className="text-2xl  border-2 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-black duration-300 p-1 text-sky-600  ml-2">
                  <LinkedinOutlined />
                </span>
                <span className="text-2xl border-2 rounded p-1 transition ease-in-out delay-150 hover:-translate-y-1 text-primary hover:scale-110  duration-300  ml-2">
                  <WhatsAppOutlined />
                </span>
                <span className="text-2xl border-2 rounded p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-black duration-300 ml-2 text-red-500">
                  <InstagramOutlined />
                </span>
                <span className="text-2xl border-2 rounded p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-black duration-300 ml-2 text-sky-500">
                  <TwitterOutlined />
                </span>
              </div>


      </div>
        </div>
    );
};

export default Account;