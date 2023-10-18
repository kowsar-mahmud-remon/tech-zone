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
import ActionBar from "@/components/ui/ActionBar";
import {
  useDeleteServiceMutation,
  useGetAllServicesQuery,
} from "@/redux/features/service/serviceApi";

const ManageServicePage = () => {
  const { role } = getUserInfo() as any;

  const { data, isLoading } = useGetAllServicesQuery({});

  const [deleteService] = useDeleteServiceMutation();

  const services = data?.data;

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
      title: "Price",
      dataIndex: "price",
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
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            {/* <Link href={`/super_admin/admin/details/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link> */}
            <Link href={`/admin/manage-service/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                // onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button onClick={() => removeService(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const removeService = async (id: any) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (confirmation) {
      await deleteService(id);

      message.success("Service Deleted Successfully");
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
            label: "manage-service",
            link: `/${role}/manage-service`,
          },
        ]}
      />

      <ActionBar title="Service List">
        <Link href="/admin/manage-service/create">
          <Button type="primary">Create Service</Button>
        </Link>
      </ActionBar>

      <UMTable
        columns={columns}
        dataSource={services}
        loading={isLoading}
      ></UMTable>
    </div>
  );
};

export default ManageServicePage;
