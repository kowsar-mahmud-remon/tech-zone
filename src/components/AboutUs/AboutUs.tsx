import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import img from "../../assets/aboutus.jpg";
import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";

const AboutUs = () => {
  return (
    <div
      style={{
        margin: "50px 0",
      }}
    >
      <Row
        gutter={{ md: 24, lg: 42 }}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col sm={24} md={12} lg={10}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: "100%",
                // height: "125px",
                borderRadius: "10px",
                // marginBottom: "20px",
              }}
              alt="service img"
              width={1000}
              height={400}
              src={img}
            />
          </div>
        </Col>
        <Col sm={24} md={12} lg={14}>
          <div
            style={{
              // marginBottom: "40px",
              // boxShadow: "0 0 1rem silver",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h1
              style={{
                fontSize: "20px",
                display: "flex",
                color: "#001529",
              }}
            >
              About Us
            </h1>

            <h1
              style={{
                fontSize: "40px",
                display: "flex",
                marginTop: "10px",
              }}
            >
              Top Repair Service
            </h1>

            <div>
              <p
                style={{
                  fontSize: "18px",
                  marginTop: "30px",
                  color: "#4D4D4D",
                }}
              >
                We’re focused on delivering excellent levels of service with
                fast and reliable web servers, along with helpful and friendly
                customer support.
                <br />
                <br />
                Provide your mobile users with the best experience by sharing
                the most detailed images
              </p>
            </div>

            <div
              style={{
                marginTop: "30px",
              }}
            >
              <Link href="/services">
                <Button
                  size="large"
                  style={{
                    // padding: "0 20px",
                    width: "130px",
                    height: "45px",
                    background: "#04294d",
                    border: "0",
                    color: "white",
                  }}
                >
                  READ MORE
                  <RightOutlined />
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
