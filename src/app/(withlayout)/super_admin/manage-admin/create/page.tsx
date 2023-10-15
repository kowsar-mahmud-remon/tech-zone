"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";

const CreatePage = () => {
  const { role } = getUserInfo() as any;

  const onSubmit = async (data: any) => {
    try {
      const userData = {
        ...data,
        role: "user",
      };
      console.log(userData);
    } catch (err: any) {
      console.error(err.message);
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
          {
            label: "create",
            link: `/${role}/manage-admin/create`,
          },
        ]}
      />
      <h1>Create Admin</h1>

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
          Admin Information
        </p>
        <Form submitHandler={onSubmit}>
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
                  label="Admin Name"
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
                  label="Admin ImgUrl"
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
                  label="Admin Email"
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
                  name="password"
                  type="password"
                  size="large"
                  label="Admin Password"
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
                  name="contactNo"
                  type="text"
                  size="large"
                  label="Admin ContactNo"
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
                  label="Admin Address"
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
