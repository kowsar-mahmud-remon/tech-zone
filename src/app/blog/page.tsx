"use client";

import { useGetAllBlogsQuery } from "@/redux/features/blog/blog";
import { Col, Row, Space, Spin } from "antd";

const Blog = () => {
  const { data, isLoading } = useGetAllBlogsQuery({});

  const blogDetails = data?.data;

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
    <div
      style={{
        margin: "20px 20px",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Blog Section
      </h1>

      <Row
        gutter={{ lg: 32 }}
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        {blogDetails?.map((details: any) => (
          <Col sm={24} md={24} lg={24} key={details?._id}>
            <div
              style={{
                marginBottom: "30px",
                border: "1px solid silver",
                borderRadius: "5px",
              }}
            >
              <h1
                style={{
                  fontSize: "22px",
                  borderRadius: "5px",
                  background: "#001529",
                  padding: "10px",
                  color: "#C0C0C0",
                }}
              >
                {details?.title}
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  padding: "15px",
                  color: "#4D4D4D",
                }}
              >
                {details?.description}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blog;
