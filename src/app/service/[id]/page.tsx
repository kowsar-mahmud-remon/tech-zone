"use client";

import { useGetSingleServiceQuery } from "@/redux/features/service/serviceApi";
import { Card } from "antd";
import Image from "next/image";
import { Button, Col, Row, message } from "antd";
import Review from "@/components/Review/Review";

const { Meta } = Card;

const NestedPage = ({ params }: any) => {
  const { id } = params;

  const { data, isLoading } = useGetSingleServiceQuery(id);

  const serviceDetails = data?.data;

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
    <div
      style={{
        margin: "20px 40px",
      }}
    >
      <Row
        gutter={{ lg: 32 }}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col sm={24} md={12} lg={14}>
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <h1
              style={{
                fontSize: "40px",
              }}
            >
              {serviceDetails?.name} Repairs
            </h1>
            <p
              style={{
                fontSize: "18px",
                marginTop: "16px",
                color: "#4D4D4D",
              }}
            >
              <span>Repairs Price: </span>${serviceDetails?.price}
            </p>
            <p
              style={{
                fontSize: "18px",
                marginTop: "16px",
                color: "#4D4D4D",
              }}
            >
              {serviceDetails?.description}
            </p>
          </div>
        </Col>
        <Col sm={24} md={12} lg={10}>
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <Image
              style={{ width: "100%", borderRadius: "10px" }}
              alt="service img"
              width={500}
              height={400}
              src={serviceDetails?.imgUrl}
            />
          </div>
        </Col>
      </Row>

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

      <Review id={id}></Review>
    </div>
  );
};

export default NestedPage;
