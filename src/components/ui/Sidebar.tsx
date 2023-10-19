"use client";

import { Layout, Menu } from "antd";
import { useState } from "react";
const { Sider } = Layout;

import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  // const role = USER_ROLE.USER;
  const userInfo: any = getUserInfo();
  console.log(userInfo);
  const role = userInfo.role;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
