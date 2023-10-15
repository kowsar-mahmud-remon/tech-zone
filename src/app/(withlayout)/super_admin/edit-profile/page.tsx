"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import React from "react";

const EditProfile = () => {
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
            label: "edit-profile",
            link: `/${role}/edit-profile`,
          },
        ]}
      />
      <h1>Edit profile page</h1>
    </div>
  );
};

export default EditProfile;
