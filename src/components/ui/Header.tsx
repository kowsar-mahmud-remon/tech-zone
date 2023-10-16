"use client";

import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
const { Header: AntHeader } = Layout;
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [role, setRole] = useState("");

  const logOut = () => {
    removeUserInfo("accessToken");
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];

  useEffect(() => {
    const { role } = getUserInfo() as any;
    setRole(role);
  }, []);

  return (
    <AntHeader
      style={
        {
          // background: "#fff",
        }
      }
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <Link href="/">
          <Button type="primary">Home</Button>
        </Link>

        <Link href="/profile">
          <Button type="primary">Dashboard</Button>
        </Link>
        <p
          style={{
            margin: "0px 5px",
            color: "white",
          }}
        >
          {role}
        </p>

        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
