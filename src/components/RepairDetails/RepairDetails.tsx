import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";

const RepairDetails = () => {
  const repairDetails = [
    {
      id: "1",
      title: "Charging Port Replacement",
      img: "https://computerrepairdoctor.com/wp-content/uploads/2022/12/icon-charging.png.webp",
    },
    {
      id: "2",
      title: "Data Recovery",
      img: "https://computerrepairdoctor.com/wp-content/uploads/2022/12/icon-datarecovery.png.webp",
    },
    {
      id: "3",
      title: "Speaker Replacement",
      img: "https://computerrepairdoctor.com/wp-content/uploads/2022/12/icon-volume.png.webp",
    },
    {
      id: "4",
      title: "Motherboard Repair",
      img: "https://computerrepairdoctor.com/wp-content/uploads/2022/12/icon-motherboard.png.webp",
    },
    {
      id: "5",
      title: "Battery Replacement",
      img: "https://computerrepairdoctor.com/wp-content/uploads/2022/12/icon-battery.png.webp",
    },
    {
      id: "6",
      title: "Other Repair",
      img: "https://computerrepairdoctor.com/wp-content/uploads/2022/12/icon-other.png.webp",
    },
  ];
  return (
    <div>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          marginTop: "50px",
        }}
      >
        <h2>Computer Common Repairs</h2>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px 0",
          fontSize: "20px",
          color: "#4D4D4D",
        }}
      >
        <p>
          Our Dedicated Team Of Repair Experts Are Always Available To Get Your
          Computer Working Like Brand New
        </p>
      </Row>

      <Row
        gutter={{ lg: 32 }}
        style={{
          padding: "40px 0",
        }}
      >
        {repairDetails?.map((details: any) => (
          <Col sm={24} md={24} lg={8} key={details?.id}>
            <div
              style={{
                marginBottom: "50px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  alt="service img"
                  width={50}
                  height={50}
                  src={details?.img}
                />
              </div>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "30px 0px",
                  fontSize: "18px",
                }}
              >
                {details?.title}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RepairDetails;
