import type { MenuProps } from "antd";
import { TableOutlined, ProfileOutlined } from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}`}>Account Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/edit-profile`}>Edit Profile</Link>,
          key: `/${role}/edit-profile`,
        },
      ],
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/manage-booking`}>Manage Booking</Link>,
      key: `/${role}/manage-booking`,
      icon: <TableOutlined />,
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-user`}>Manage User</Link>,
      key: `/${role}/manage-user`,
      icon: <TableOutlined />,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    // {
    //   label: <Link href={`${role}/manage-user`}>Manage User</Link>,
    //   key: `${role}/manage-user`,
    //   icon: <TableOutlined />,
    // },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: <Link href={`/${role}/manage-admin`}>Manage Admin</Link>,
      key: `/${role}/manage-admin`,
      icon: <TableOutlined />,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else return defaultSidebarItems;
};
