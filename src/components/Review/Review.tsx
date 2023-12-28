"use client";

import {
  useGetAllReviewsQuery,
  useGetSingleReviewQuery,
} from "@/redux/features/review/reviewApi";
import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import reviewImg from "../../assets/reviewImg.png";

const Review = ({ id }: any) => {
  const { data, isLoading } = useGetSingleReviewQuery(id);

  const reviewDetails = data?.data;
  return (
    <div>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          marginTop: "60px",
        }}
      >
        <h2>Users Reviews</h2>
      </Row>
      <Row
        gutter={{ lg: 32 }}
        style={{
          padding: "40px 0",
        }}
      >
        {reviewDetails?.map((details: any) => (
          <Col sm={24} md={24} lg={12} key={details?._id}>
            <div
              style={{
                marginBottom: "50px",
                border: "1px solid silver",
                borderRadius: "10px",
                padding: "30px 0",
                background: "#d3d3d3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    marginRight: "20px",
                  }}
                  alt="service img"
                  width={500}
                  height={400}
                  src={reviewImg}
                />
                <div>
                  <p
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    Name: {details?.userId?.name}
                  </p>
                  <p
                    style={{
                      margin: "10px 0px",
                      fontSize: "18px",
                    }}
                  >
                    Rating: {details?.rating}
                  </p>
                </div>
              </div>

              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "30px 0px",
                  fontSize: "18px",
                }}
              >
                Review: {details?.review}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Review;
