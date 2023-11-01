"use client";

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
            width: "200px",
          }}
        >
          <h1
            style={{
              color: "white",
            }}
          >
            TechZone
          </h1>
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
          label: "Contect Us",
          key: "contact",
        },
        {
          label: "About Us",
          key: "about",
        },
        {
          label: "Login",
          key: "login",
        },
      ]}
    ></Menu>
  );
}

export default Navbar;
