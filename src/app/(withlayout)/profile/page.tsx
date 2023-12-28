"use client";

import { useGetSingleUserQuery } from "@/redux/features/user/userApi";
import { getUserInfo } from "@/services/auth.service";
import { Col, Row } from "antd";
import React from "react";

const ProfilePage = () => {
  const { _id } = getUserInfo() as any;

  const { data, isLoading } = useGetSingleUserQuery(_id);

  const userInfo = data?.data;
  return (
    <div
      style={{
        marginTop: "40px",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          padding: "40px",
          // border: "1px solid red",
          color: "#001529",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>
          Name: <span style={{ fontWeight: "500" }}>{userInfo?.name}</span>
        </h1>
        <h1 style={{ marginBottom: "10px" }}>
          Email: <span style={{ fontWeight: "500" }}>{userInfo?.email}</span>
        </h1>
        <h1 style={{ marginBottom: "10px" }}>
          ContactNo:{" "}
          <span style={{ fontWeight: "500" }}>{userInfo?.contactNo}</span>
        </h1>
        <h1 style={{ marginBottom: "10px" }}>
          Address:{" "}
          <span style={{ fontWeight: "500" }}>{userInfo?.address}</span>
        </h1>
      </div>
    </div>
  );
};

export default ProfilePage;
