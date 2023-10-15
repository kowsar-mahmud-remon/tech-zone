"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import {
  useDeleteAdminMutation,
  useGetAllAdminsQuery,
} from "@/redux/features/admin/adminApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, message } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const ManageAdmin = () => {
  const { role } = getUserInfo() as any;

  const { data, isLoading } = useGetAllAdminsQuery({});

  const [deleteAdmin] = useDeleteAdminMutation();

  const admins = data?.data;

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
            <Button onClick={() => removeAdmin(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const removeAdmin = async (id: any) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this admin?"
    );

    if (confirmation) {
      await deleteAdmin(id);

      message.success("Admin Deleted Successfully");
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
            label: "manage-admin",
            link: `/${role}/manage-admin`,
          },
        ]}
      />

      <ActionBar title="Admin List">
        <Link href="/super_admin/manage-admin/create">
          <Button type="primary">Create Admin</Button>
        </Link>
      </ActionBar>

      <UMTable
        columns={columns}
        dataSource={admins}
        loading={isLoading}
      ></UMTable>
    </div>
  );
};

export default ManageAdmin;
