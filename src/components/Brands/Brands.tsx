import { Col, Row } from "antd";
import React from "react";
import img1 from "../../assets/barnd1.png";
import img2 from "../../assets/barnd2.png";
import img3 from "../../assets/barnd3.png";
import img4 from "../../assets/barnd4.png";
import Image from "next/image";

const Brands = () => {
  const BrandDetails = [
    {
      _id: "1",
      img: img1,
    },
    {
      _id: "2",
      img: img2,
    },
    {
      _id: "3",
      img: img3,
    },
    {
      _id: "4",
      img: img4,
    },
    {
      _id: "5",
      img: img1,
    },
    {
      _id: "6",
      img: img2,
    },
  ];

  return (
    <div
      style={{
        padding: "20px 0 50px 0",
      }}
    >
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          marginBottom: "10px",
        }}
      >
        <h2>Our Partners</h2>
      </Row>

      <Row
        gutter={{ xs: 20, sm: 20, md: 20, lg: 32 }}
        style={{
          paddingTop: "20px",
        }}
      >
        {BrandDetails?.map((details: any) => (
          <Col key={details?._id} xs={24} sm={24} md={12} lg={4}>
            <div
              style={{
                marginBottom: "30px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
                alt="service img"
                width={1000}
                height={500}
                src={details?.img}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Brands;
