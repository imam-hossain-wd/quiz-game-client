import type { MenuProps } from "antd";
import {
    DashboardOutlined,
  ScheduleOutlined,
  UserOutlined,
  UsergroupAddOutlined
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
      label: <Link href={`/dashboard/${role}/perfomer`}>Perfomer</Link>,
      key: `/dashboard/${role}/perfomer`,
      icon: <UsergroupAddOutlined />
    },
    {
      label: <Link href={`/dashboard/admin/quiz`}>Quiz</Link>,
      icon: <ScheduleOutlined />,
      key: `/dashboard/${role}/quiz`,
    },
    {
      label: <Link href={`/dashboard/${role}/perfomer`}>Score</Link>,
      key: `/dashboard/${role}/score`,
      icon: <UsergroupAddOutlined />
    },
     
  ];

  const PerfomerSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
        label: <Link href={`/dashboard/admin/quiz`}>Quiz</Link>,
        icon: <ScheduleOutlined />,
        key: `/dashboard/${role}/quiz`,
      },
      {
        label: <Link href={`/dashboard/${role}/perfomer`}>Perfomer</Link>,
        key: `/dashboard/${role}/perfomer`,
        icon: <UsergroupAddOutlined />
      },
      {
        label: <Link href={`/dashboard/${role}/perfomer`}>Score</Link>,
        key: `/dashboard/${role}/perfomer`,
        icon: <UsergroupAddOutlined />
      },
  ];

  if (role === "admin") return adminSidebarItems;
  else if (role === "perfomer") return PerfomerSidebarItems;
  else {
    return defaultSidebarItems;
  }
};