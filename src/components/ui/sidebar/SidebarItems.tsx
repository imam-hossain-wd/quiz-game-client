import type { MenuProps } from "antd";
import {
    DashboardOutlined,
  ScheduleOutlined,
  UserOutlined
} from "@ant-design/icons";
import Link from "next/link";


export const sidebarItems = (role: string) => {

  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/dashboard`}>Dashboard</Link>,
      key: `/${role}/dashboard`,
      icon: <DashboardOutlined />
    },
    {
      label: <Link href={`/dashboard/${role}/account`}>Account</Link>,
      key: `/${role}/account`,
      icon: <UserOutlined />
    },
  ];


  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
        label: <Link href={`/${role}/profile`}>Perfomer</Link>,
        key: `/${role}/account`,
        icon: <UserOutlined />
      },
     
  ];

  const PerfomerSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
        label: <Link href={`/dashboard/admin/quiz`}>Quiz</Link>,
        icon: <ScheduleOutlined />,
        key: `/dashboard/${role}/quiz`,
      }
  ];

  if (role === "admin") return adminSidebarItems;
  else if (role === "perfomer") return PerfomerSidebarItems;
  else {
    return defaultSidebarItems;
  }
};