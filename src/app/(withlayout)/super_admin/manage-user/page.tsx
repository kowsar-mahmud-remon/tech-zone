"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import React from "react";

const ManageUser = () => {
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
            label: "manage-user",
            link: `/${role}/manage-user`,
          },
        ]}
      />
      <h1>manage user page</h1>
    </div>
  );
};

export default ManageUser;
