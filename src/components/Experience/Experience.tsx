import { Col, Row } from "antd";
import React from "react";
import {
  TeamOutlined,
  SmileOutlined,
  AndroidOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";

const Experience = () => {
  const experienceDetails = [
    {
      _id: "1",
      year: "35+",
      title: "Years service",
      icon: <TeamOutlined />,
    },
    {
      _id: "2",
      year: "7000",
      title: "Happy Buyers",
      icon: <SmileOutlined />,
    },
    {
      _id: "3",
      year: "99%",
      title: "Devices Fixed",
      icon: <AndroidOutlined />,
    },
    {
      _id: "4",
      year: "1275",
      title: "National Awards",
      icon: <CodeSandboxOutlined />,
    },
  ];
  return (
    <div
      style={{
        padding: "50px 0",
      }}
    >
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          marginBottom: "40px",
        }}
      >
        <h2>Our Experience</h2>
      </Row>

      <Row
        gutter={{ xs: 20, sm: 20, md: 20, lg: 32 }}
        style={{
          paddingTop: "20px",
        }}
      >
        {experienceDetails?.map((service: any) => (
          <Col key={service?._id} xs={24} sm={24} md={12} lg={6}>
            <div
              style={{
                marginBottom: "30px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    color: "#001529",
                    marginRight: "15px",
                  }}
                >
                  {service.icon}
                </div>

                <span
                  style={{
                    width: "1px",
                    height: "40px",
                    background: "silver",
                  }}
                ></span>
                <div
                  style={{
                    marginLeft: "15px",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "35px",
                      color: "#001529",
                      marginBottom: "10px",
                    }}
                  >
                    {service?.year}
                  </h1>
                  <p
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {service?.title}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Experience;
