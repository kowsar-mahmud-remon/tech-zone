"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useCreateAdminMutation } from "@/redux/features/admin/adminApi";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/features/user/userApi";
import { adminSchema } from "@/schemas/admin";
import { editAdminSchema } from "@/schemas/editAdminSchema";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, Space, Spin, message } from "antd";
import { useRouter } from "next/navigation";

const EditProfile = () => {
  const { _id, role } = getUserInfo() as any;

  const router = useRouter();

  const { data: superAdminData, isLoading } = useGetSingleUserQuery(_id);
  // console.log(superAdminData?.data);

  const [updateUser, { data: userData }] = useUpdateUserMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating...");
    try {
      const updatedData = {
        id: _id,
        data,
      };

      const res: any = await updateUser(updatedData);

      if (res?.data?.success) {
        message.success("Admin Updated successful");
        router.push(`/${role}`);
      } else {
        message.error("Failed to update admin");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    name: superAdminData?.data?.name || "",
    imgUrl: superAdminData?.data?.imgUrl || "",
    email: superAdminData?.data?.email || "",
    contactNo: superAdminData?.data?.contactNo || "",
    address: superAdminData?.data?.address || "",
  };

  if (isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }

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
      <h1>Update profile</h1>

      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          margin: "15px 0px",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            marginBottom: "15px",
          }}
        >
          Super Admin Information
        </p>
        <Form
          submitHandler={onSubmit}
          defaultValues={defaultValues}
          resolver={yupResolver(editAdminSchema)}
        >
          <Row gutter={{ lg: 32 }}>
            <Col sm={24} md={24} lg={12}>
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                <FormInput
                  name="name"
                  type="text"
                  size="large"
                  label="Super Admin Name *"
                />
              </div>
            </Col>
            <Col sm={24} md={24} lg={12}>
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                <FormInput
                  name="imgUrl"
                  type="text"
                  size="large"
                  label="Super Admin ImgUrl *"
                />
              </div>
            </Col>
            <Col sm={24} md={24} lg={12}>
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  label="Super Admin Email *"
                />
              </div>
            </Col>
            {/* <Col sm={24} md={24} lg={12}>
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="Admin Password"
                />
              </div>
            </Col> */}
            <Col sm={24} md={24} lg={12}>
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                <FormInput
                  name="contactNo"
                  type="text"
                  size="large"
                  label="Super Admin ContactNo *"
                />
              </div>
            </Col>
            <Col sm={24} md={24} lg={12}>
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                <FormInput
                  name="address"
                  type="text"
                  size="large"
                  label="Super Admin Address *"
                />
              </div>
            </Col>
          </Row>

          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;
