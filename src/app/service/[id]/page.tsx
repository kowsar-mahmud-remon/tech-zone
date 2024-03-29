"use client";

import { useGetSingleServiceQuery } from "@/redux/features/service/serviceApi";
import { Card, Space, Spin } from "antd";
import Image from "next/image";
import { Button, Col, Row, message } from "antd";
import Review from "@/components/Review/Review";
import CreateReview from "@/components/Review/CreateReview";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import RepairDetails from "@/components/RepairDetails/RepairDetails";
import CreateFeedback from "@/components/Feedback/CreateFeedback";
import Feedback from "@/components/Feedback/Feedback";
import { useCreateBookingMutation } from "@/redux/features/booking/bookingApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NestedPage = ({ params }: any) => {
  const { id } = params;
  const { _id } = getUserInfo() as any;

  const userLoggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const [createBooking] = useCreateBookingMutation();

  const { data, isLoading: dataLoading } = useGetSingleServiceQuery(id);

  const serviceDetails = data?.data;

  const handleBooking = async () => {
    const confirmation = window.confirm(
      "Are you sure you want to Confirm Booking?"
    );

    if (confirmation) {
      message.loading("Creating...");
      try {
        const bookingData = {
          userId: _id,
          serviceId: id,
          serviceName: serviceDetails?.name,
          servicePrice: serviceDetails?.price,
        };

        const res: any = await createBooking(bookingData);

        if (res?.data?.success) {
          message.success("Booking Added successfully");
          router.push("/");
        } else {
          message.error("Failed to add Booking");
        }
      } catch (err: any) {
        console.error(err.message);
        message.error(err.message);
      }
    }
  };

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
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

  if (dataLoading) {
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
              {serviceDetails?.name} Laptop Repairs
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
              onClick={handleBooking}
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

      <CreateFeedback id={id}></CreateFeedback>

      <Feedback id={id}></Feedback>
    </div>
  );
};

export default NestedPage;
