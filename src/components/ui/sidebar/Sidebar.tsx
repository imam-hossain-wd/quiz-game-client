"use client";

import { useEffect, useState } from "react";
import { Avatar, Layout, Menu } from "antd";
import Image from "next/image";
import {
  LeftSquareOutlined,
  RightSquareOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { sidebarItems } from "./SidebarItems";
import { getUserInfo } from "@/utils/auth.services";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  console.log(collapsed, 'clpse');
  const { role } = getUserInfo() as any;
  return (
    <Sider
      className="bg-white text-black "
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={230}
      collapsedWidth={70}
      theme="light"
      trigger={
        <div className="trigger text-3xl">
          {collapsed ? <RightSquareOutlined /> :
          !collapsed ? <div className="ml-20"><LeftSquareOutlined  /></div> : <LeftSquareOutlined  />}
        </div>
      }
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      {!collapsed && <div className="-mb-16 lg:flex flex flex-col justify-center items-center font-bold mb-2 py-3">
        <Avatar size={80} icon={<UserOutlined />} />
        <p className="text-xl  mt-3">Imam Hossain</p>
      </div>}
      <Menu
      className="mt-16"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
