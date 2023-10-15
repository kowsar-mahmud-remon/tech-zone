"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import React from "react";

const ManageAdmin = () => {
  const { role } = getUserInfo() as any;

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: "manage-admin",
            link: `/${role}/manage-admin`,
          },
        ]}
      />
      <h1>Manage Admin Page</h1>
    </div>
  );
};

export default ManageAdmin;
