"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useGetSingleUserQuery } from "@/redux/features/user/userApi";
import { getUserInfo } from "@/services/auth.service";
import React from "react";

const SuperAdminPage = () => {
  const { _id, role } = getUserInfo() as any;

  const { data, isLoading } = useGetSingleUserQuery(_id);

  const userInfo = data?.data;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <h1
        style={{
          marginBottom: "20px",
          color: "green",
          textAlign: "center",
        }}
      >
        Super Admin Information
      </h1>

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
    </div>
  );
};

export default SuperAdminPage;
