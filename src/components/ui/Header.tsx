"use client";

import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Layout,
  MenuProps,
  Row,
  Space,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from "@/services/auth.service";
const { Header: AntHeader } = Layout;
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const userLoggedIn = isLoggedIn();

  const router = useRouter();

  const logOut = () => {
    removeUserInfo("accessToken");
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: userLoggedIn ? (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ) : (
        <Link href="/login">
          <Button type="text" danger>
            Login
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <AntHeader
      style={
        {
          // background: "#fff",
        }
      }
    >
      <Row
        // justify="end"
        // align="middle"
        style={{
          height: "100%",
        }}
      >
        <Col sm={24} md={12} lg={12}>
          <h1
            style={{
              fontSize: "30px",
              color: "white",
            }}
          >
            Tech Zone
          </h1>
        </Col>
        <Col
          sm={24}
          md={12}
          lg={12}
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Link
            href="/"
            style={{
              marginLeft: "16px",
            }}
          >
            <Button type="primary">Home</Button>
          </Link>

          <Link
            href="/services"
            style={{
              marginLeft: "16px",
            }}
          >
            <Button type="primary">Services</Button>
          </Link>
          <Link
            href="/profile"
            style={{
              marginLeft: "16px",
            }}
          >
            <Button type="primary">Dashboard</Button>
          </Link>
          <Link
            href="/blog"
            style={{
              marginLeft: "16px",
            }}
          >
            <Button type="primary">Blog</Button>
          </Link>
          {/* <p
            style={{
              margin: "0px 5px",
              color: "white",
            }}
          >
            {role}
          </p> */}

          <Dropdown menu={{ items }}>
            <a
              style={{
                marginLeft: "16px",
                color: "blue",
              }}
            >
              <Space wrap size={16}>
                <Avatar size="large" icon={<UserOutlined />} />
              </Space>
            </a>
          </Dropdown>
        </Col>
      </Row>
    </AntHeader>
  );
};

export default Header;
