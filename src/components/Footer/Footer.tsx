"use client";

import { Col, Layout, Row } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const FooterPage = () => {
  return (
    <div
      style={{
        padding: "40px 0",
        background: "#001529",
      }}
    >
      <Row
        gutter={{ lg: 32 }}
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0 20px",
        }}
      >
        <Col sm={24} md={12} lg={14}>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontSize: "40px",
                color: "white",
              }}
            >
              Tech Zone
            </h1>
          </div>
        </Col>
        <Col sm={24} md={12} lg={10}>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <FacebookOutlined
              style={{
                fontSize: "30px",
                marginLeft: "10px",
              }}
            />
            <TwitterOutlined
              style={{
                fontSize: "30px",
                marginLeft: "10px",
              }}
            />
            <InstagramOutlined
              style={{
                fontSize: "30px",
                marginLeft: "10px",
              }}
            />
            <LinkedinOutlined
              style={{
                fontSize: "30px",
                marginLeft: "10px",
              }}
            />
          </div>
        </Col>
      </Row>
      <Footer
        style={{
          textAlign: "center",
          fontSize: "18px",
          background: "#001529",
          color: "white",
        }}
      >
        Tech Zone ©2023 Created by ME
      </Footer>
    </div>
  );
};

export default FooterPage;