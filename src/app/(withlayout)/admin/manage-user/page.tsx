"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";

import { getUserInfo } from "@/services/auth.service";
import { Button, message } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "@/redux/features/user/userApi";

const ManageUser = () => {
  const { role } = getUserInfo() as any;

  const { data, isLoading } = useGetAllUsersQuery({});
  console.log({ data });

  const [deleteUser] = useDeleteUserMutation();

  const users = data?.data;

  const columns = [
    // {
    //   title: "Id",
    //   dataIndex: "id",
    //   sorter: true,
    // },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Contact no.",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            {/* <Link href={`/super_admin/admin/details/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/super_admin/admin/edit/${data.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link> */}
            <Button onClick={() => removeUser(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const removeUser = async (id: any) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmation) {
      await deleteUser(id);

      message.success("User Deleted Successfully");
    }
  };

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

      <h1>User List</h1>

      <UMTable
        columns={columns}
        dataSource={users}
        loading={isLoading}
      ></UMTable>
    </div>
  );
};

export default ManageUser;
