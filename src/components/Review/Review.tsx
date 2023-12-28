"use client";

import {
  useGetAllReviewsQuery,
  useGetSingleReviewQuery,
} from "@/redux/features/review/reviewApi";
import { Col, Row } from "antd";
import React from "react";

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
              }}
            >
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "30px 0px",
                  fontSize: "18px",
                }}
              >
                Name: {details?.userId?.name}
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "30px 0px",
                  fontSize: "18px",
                }}
              >
                Rating: {details?.rating}
              </p>
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
