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
        }}
      >
        Admin Information
      </h1>
      <h1>Name: {userInfo?.name}</h1>
      <h1>Email: {userInfo?.email}</h1>
      <h1>ContactNo: {userInfo?.contactNo}</h1>
      <h1>Address: {userInfo?.address}</h1>
    </div>
  );
};

export default SuperAdminPage;
