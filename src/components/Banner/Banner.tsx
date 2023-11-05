"use client";

import React from "react";
import styles from "../../app/page.module.css";
import Link from "next/link";
import { Button } from "antd";

const Banner = () => {
  return (
    <div
      className={styles.bgImg}
      style={{
        marginTop: "16px",
      }}
    >
      <div
        className="mainBanner"
        style={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        <h1
          className="bannerFont"
          // className={styles.bannerFont}
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white",
          }}
        >
          PC Laptop Repair
        </h1>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
            color: "white",
            padding: "10px 10px",
          }}
        >
          Repair guides and disassembly information for PC laptops of all
          shapes, sizes, and colors.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link href="/services">
            <Button
              size="large"
              style={{
                // padding: "0 20px",
                width: "160px",
                height: "45px",
                background: "#04294d",
                border: "0",
                color: "white",
              }}
            >
              GET STARTED NOW
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
