import { Col, Row } from "antd";
import React from "react";

const Experience = () => {
  const experienceDetails = [
    {
      _id: "1",
      year: "10",
      title: "Years of Success",
    },
    {
      _id: "2",
      year: "100",
      title: "Services",
    },
    {
      _id: "3",
      year: "5000",
      title: "Clients",
    },
    {
      _id: "4",
      year: "1400",
      title: "Products",
    },
  ];
  return (
    <div
      style={{
        // width: "80%",
        // margin: "0 auto",
        padding: "20px 0",
      }}
    >
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          margin: "20px",
        }}
      >
        <h2>Our Experience</h2>
      </Row>

      <Row
        gutter={{ md: 20, lg: 32 }}
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
                background: "silver",
                height: "200px",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  marginTop: "50px",
                }}
              >
                <h1
                  style={{
                    fontSize: "40px",
                    color: "#0096FF",
                    marginBottom: "20px",
                  }}
                >
                  {service?.year}+
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
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Experience;
