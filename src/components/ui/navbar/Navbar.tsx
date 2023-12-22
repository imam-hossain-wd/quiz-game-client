"use client";
import {
  CloseOutlined,
  LoginOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import MyButton from "../button/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearAccessToken } from "@/redux/slice/authSlice";
import Link from "next/link";
import { authKey, getUserInfo, removeUserInfo } from "@/utils/auth.services";

const Navbar = () => {
  //@ts-ignore
  const {accessToken} = useAppSelector((state) => state?.auth);
  const { role } = getUserInfo() as any;
  const dispatch = useAppDispatch();

  const items = [
    {
      key: "1",
      label: (
        <div>
          <div className="flex flex-col">
            <Button type="text">
              <Link href={`/dashboard/account`}> Account</Link>
            </Button>
            <Button
              onClick={() => {
                removeUserInfo(authKey);
                dispatch(clearAccessToken());
              }}
              danger
              type="text"
            >
              Log out
            </Button>
          </div>
        </div>
      ),
    },
  ];
  return (
    <nav>
      <div className="flex justify-end items-center mr-10 mt-5">
       {!accessToken ? <Button
          name="login"
          className="bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border text-lg text-white w-24 h-10 flex justify-center items-center rounded-lg mr-5  "
        >
          <Link href="/login">
            {" "}
            <LoginOutlined className="mr-1" />
            Login
          </Link>
        </Button> :

        <Dropdown menu={{ items }} className="">
          <MyButton
            name={<UserOutlined />}
            className="w-10 h-10 rounded-full text-2xl flex justify-center items-center"
          />
        </Dropdown>}
      </div>
    </nav>
  );
};

export default Navbar;
