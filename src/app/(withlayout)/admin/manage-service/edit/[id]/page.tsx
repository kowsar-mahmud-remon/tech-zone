"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/features/service/serviceApi";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/features/user/userApi";
import { editAdminSchema } from "@/schemas/editAdminSchema";
import { editServiceSchema } from "@/schemas/editServiceSchems";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, Space, Spin, message } from "antd";
import { useRouter } from "next/navigation";

const EditProfile = ({ params }: any) => {
  const { _id, role } = getUserInfo() as any;
  const { id: serviceId } = params;

  const router = useRouter();

  const { data: serviceData, isLoading } = useGetSingleServiceQuery(serviceId);

  const [updateService, { data: userData }] = useUpdateServiceMutation();

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      const updatedData = {
        id: serviceId,
        data,
      };
      const res: any = await updateService(updatedData);

      if (res?.data?.success) {
        message.success("Service Updated successful");
        router.push(`/${role}/manage-service`);
      } else {
        message.error("Failed to update Service");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    name: serviceData?.data?.name || "",
    imgUrl: serviceData?.data?.imgUrl || "",
    price: serviceData?.data?.price || "",
    description: serviceData?.data?.description || "",
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
      <h1>Update Service</h1>

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
          Service Information
        </p>
        <Form
          submitHandler={onSubmit}
          defaultValues={defaultValues}
          resolver={yupResolver(editServiceSchema)}
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
                  label="Service Name *"
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
                  label="Service ImgUrl *"
                />
              </div>
            </Col>
            <Col sm={24} md={24} lg={12}>
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                <FormTextArea
                  name="description"
                  label="Service Description *"
                  rows={4}
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
                  label="Service Password *"
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
                  name="price"
                  type="text"
                  size="large"
                  label="Service Price *"
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
