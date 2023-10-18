"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useCreateServiceMutation } from "@/redux/features/service/serviceApi";
import { useCreateUserMutation } from "@/redux/features/user/userApi";
import { serviceSchema } from "@/schemas/service";
import { userSchema } from "@/schemas/user";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreatePage = () => {
  const { role } = getUserInfo() as any;

  const router = useRouter();

  const [createService] = useCreateServiceMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating...");
    try {
      const serviceData = {
        ...data,
      };

      const res: any = await createService(serviceData);

      if (res?.data?.success) {
        message.success("Service created successful");
        router.push(`/${role}/manage-service`);
      } else {
        message.error("Failed to create Service");
      }

      console.log(serviceData);
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
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
          {
            label: "create",
            link: `/${role}/manage-service/create`,
          },
        ]}
      />
      <h1>Create Service</h1>

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
        <Form submitHandler={onSubmit} resolver={yupResolver(serviceSchema)}>
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
            <Col sm={24} md={24} lg={12}>
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                <FormInput
                  name="price"
                  type="number"
                  size="large"
                  label="Service Price *"
                />
              </div>
            </Col>
          </Row>

          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
