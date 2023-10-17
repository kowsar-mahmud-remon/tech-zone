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
import {
  useDeleteBookingMutation,
  useGetSingleBookingQuery,
} from "@/redux/features/booking/bookingApi";

const ManageBookingPage = () => {
  const { _id, role } = getUserInfo() as any;

  const { data, isLoading } = useGetSingleBookingQuery(_id);

  const [deleteBooking] = useDeleteBookingMutation();

  const bookings = data?.data;

  const columns = [
    // {
    //   title: "Id",
    //   dataIndex: "id",
    //   sorter: true,
    // },
    {
      title: "Name",
      dataIndex: "serviceName",
    },
    {
      title: "Service Id",
      dataIndex: "serviceId",
    },
    {
      title: "Booking Time",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Price",
      dataIndex: "servicePrice",
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
            <Button onClick={() => removeBooking(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const removeBooking = async (id: any) => {
    const confirmation = window.confirm(
      "Are you sure you want to Cancel this Booking?"
    );

    if (confirmation) {
      await deleteBooking(id);

      message.success("Booking Cancelled Successfully");
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
            label: "manage-booking",
            link: `/${role}/manage-booking`,
          },
        ]}
      />

      <UMTable
        columns={columns}
        dataSource={bookings}
        loading={isLoading}
      ></UMTable>
    </div>
  );
};

export default ManageBookingPage;
