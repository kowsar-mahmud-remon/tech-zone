"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useCreateBlogMutation } from "@/redux/features/blog/blog";
import { blogSchema } from "@/schemas/blog";
import { userSchema } from "@/schemas/user";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateBlogPage = () => {
  const { role } = getUserInfo() as any;

  const router = useRouter();

  const [createBlog] = useCreateBlogMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating...");
    try {
      const blogData = {
        ...data,
      };

      const res: any = await createBlog(blogData);

      if (res?.data?.success) {
        message.success("Blog created successful");
        router.push(`/blog`);
      } else {
        message.error("Failed to create Blog");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div>
      <h1>Create Blog</h1>

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
          Blog Information
        </p>
        <Form submitHandler={onSubmit} resolver={yupResolver(blogSchema)}>
          <Row gutter={{ lg: 32 }}>
            <Col sm={24} md={24} lg={24}>
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                <FormInput
                  name="title"
                  type="text"
                  size="large"
                  label="Blog Title *"
                />
              </div>
            </Col>

            <Col sm={24} md={24} lg={24}>
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                <FormTextArea
                  name="description"
                  label="Blog Description *"
                  rows={4}
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

export default CreateBlogPage;
