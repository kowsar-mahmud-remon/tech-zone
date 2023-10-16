"use client";

import { useGetAllServicesQuery } from "@/redux/features/service/serviceApi";
import { Col, Row } from "antd";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;

const ProductService = () => {
  const { data, isLoading } = useGetAllServicesQuery({});

  const allServices = data?.data;

  console.log(data);
  return (
    <div
      style={{
        // width: "80%",
        // margin: "0 auto",
        padding: "50px 0",
      }}
    >
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
        }}
      >
        <h2>Select Your Device To Get Started</h2>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px 0",
          fontSize: "20px",
          color: "#0096FF",
        }}
      >
        <p>What Do You Need Repaired?</p>
      </Row>
      <Row gutter={{ md: 20, lg: 32 }}>
        {allServices?.map((service: any) => (
          <Col key={service?._id} sm={24} md={12} lg={8}>
            <Link href={`service/${service?._id}`}>
              <div
                style={{
                  marginBottom: "30px",
                }}
              >
                <Card
                  hoverable
                  // style={{ width: 240 }}
                  cover={
                    <Image
                      style={{ width: "100%" }}
                      alt="service img"
                      width={500}
                      height={200}
                      src={service?.imgUrl}
                    />
                  }
                >
                  {/* <Meta
                    justify="center"
                    align="middle"
                    title={service?.name}
                    description="www.instagram.com"
                  /> */}
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {service?.name}
                  </h3>
                </Card>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductService;
