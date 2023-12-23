"use client"

import { ContainerOutlined, IdcardOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const Dashboard = () => {
    return (
        <div className="flex flex-col mt-20 lg:flex-row justify-around items-center">
           

            <Link href={`/dashboar`} className="w-80 h-44 rounded bg-sky-400 ">
               
                <div className="text-white flex justify-center flex-col items-center mt-8">
                    <p className="text-4xl"><UserOutlined /></p>
                    <p className="font-bold mt-3 text-3xl">Account</p>
                </div>
            </Link>
            <Link href={`/dashboar`} className="w-80 h-44 rounded bg-sky-400 ">
               
                <div className="text-white flex justify-center flex-col items-center mt-8">
                    <p className="text-4xl"><IdcardOutlined /></p>
                    <p className="font-bold mt-3 text-3xl">Total Perfomers</p>
                </div>
            </Link>
            <Link href={`/dashboar`} className="w-80 h-44 rounded bg-sky-400 ">
               
                <div className="text-white flex justify-center flex-col items-center mt-8">
                    <p className="text-4xl"><IdcardOutlined /></p>
                    <p className="font-bold mt-3 text-3xl">Total Score</p>
                </div>
            </Link>
            <Link href={`/dashboar`} className="w-80 h-44 rounded bg-sky-400 ">
               
                <div className="text-white flex justify-center flex-col items-center mt-8">
                    <p className="text-4xl"><ContainerOutlined /></p>
                    <p className="font-bold mt-3 text-3xl">Total Quiz</p>
                </div>
            </Link>
            
        </div>
    );
};

export default Dashboard;