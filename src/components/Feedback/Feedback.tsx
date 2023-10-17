"use client";

import { useGetSingleFeedbackQuery } from "@/redux/features/feedback/feedbackApi";
import { Col, Row } from "antd";
import React from "react";

const Feedback = ({ id }: any) => {
  const { data, isLoading } = useGetSingleFeedbackQuery(id);

  const feedbackDetails = data?.data;
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
        <h2>Users Feedback</h2>
      </Row>
      <Row
        gutter={{ lg: 32 }}
        style={{
          padding: "40px 0",
        }}
      >
        {feedbackDetails?.map((details: any) => (
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
                Email: {details?.userId?.email}
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "30px 0px",
                  fontSize: "18px",
                }}
              >
                Feedback: {details?.feedback}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Feedback;
