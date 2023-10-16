"use client";

import { useGetSingleServiceQuery } from "@/redux/features/service/serviceApi";
import { Card } from "antd";
import Image from "next/image";
import { Button, Col, Row, message } from "antd";
import Review from "@/components/Review/Review";
import CreateReview from "@/components/Review/CreateReview";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { useState } from "react";
import RepairDetails from "@/components/RepairDetails/RepairDetails";

const { Meta } = Card;

const NestedPage = ({ params }: any) => {
  const { id } = params;

  const { data, isLoading } = useGetSingleServiceQuery(id);

  const serviceDetails = data?.data;

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
              <span style={{ color: "black" }}>Repairs Price: </span>$
              {serviceDetails?.price}
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

            <Button
              type="primary"
              size="large"
              style={{
                margin: "20px 0",
              }}
            >
              Booking Now
            </Button>
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

      <RepairDetails></RepairDetails>

      <CreateReview id={id}></CreateReview>

      <Review id={id}></Review>
    </div>
  );
};

export default NestedPage;
