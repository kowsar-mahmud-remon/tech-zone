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

import { Drawer, Menu } from "antd";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#001529",
        padding: "10px 0",
        position: "sticky",
        // width: "100%",
        top: "0px",
        zIndex: "100",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "auto",
          maxWidth: "1440px",
          padding: "0px 20px",
        }}
      >
        <div
          style={{
            // height: "100vh",
            // backgroundColor: "rgba(0,150,250)",
            width: "300px",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
            }}
          >
            <h1
              style={{
                color: "white",
              }}
            >
              Tech Zone
            </h1>
          </Link>
        </div>
        <div
          style={{
            // height: "100vh",
            // backgroundColor: "rgba(0,150,250)",
            width: "100%",
          }}
        >
          <div
            className="menuIcon"
            style={{
              backgroundColor: "#001529",
              height: 60,
              paddingRight: 12,
              paddingTop: 7,
              justifyContent: "end",
            }}
          >
            <MenuOutlined
              style={{
                color: "white",
                fontSize: 30,
                justifyContent: "end",
              }}
              onClick={() => {
                setOpenMenu(true);
              }}
            />
          </div>

          <span className="headerMenu">
            <AppMenu></AppMenu>
          </span>

          <Drawer
            placement="right"
            open={openMenu}
            onClose={() => {
              setOpenMenu(false);
            }}
            closable={false}
            bodyStyle={{ backgroundColor: "#001529" }}
          >
            <AppMenu isInline></AppMenu>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

function AppMenu({ isInline = false }) {
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
    <Menu
      style={{
        backgroundColor: "#001529",
        color: "white",
        fontSize: 18,
        border: "none",
        justifyContent: "end",
      }}
      mode={isInline ? "inline" : "horizontal"}
      items={[
        {
          label: <Link href="/"> Home</Link>,
          key: "home",
        },
        {
          label: <Link href="/services">Services</Link>,
          key: "service",
        },
        {
          label: <Link href="/profile">Dashboard</Link>,
          key: "profile",
        },
        {
          label: <Link href="/blog">Blog</Link>,
          key: "blog",
        },
        {
          label: (
            <Dropdown menu={{ items }}>
              <a
                style={{
                  // marginLeft: "16px",
                  color: "blue",
                }}
              >
                <Space wrap size={16}>
                  <Avatar
                    size="large"
                    style={{
                      background: "white",
                    }}
                    icon={
                      <UserOutlined
                        style={{
                          color: "#001529",
                          fontSize: "20px",
                        }}
                      />
                    }
                  />
                </Space>
              </a>
            </Dropdown>
          ),
          key: "dropdown",
        },
      ]}
    ></Menu>
  );
}

export default Navbar;
