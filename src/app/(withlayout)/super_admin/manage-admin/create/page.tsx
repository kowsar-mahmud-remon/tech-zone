"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import React from "react";

const CreatePage = () => {
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
          {
            label: "create",
            link: `/${role}/manage-admin/create`,
          },
        ]}
      />
      <h1>This is admin create page</h1>
    </div>
  );
};

export default CreatePage;
