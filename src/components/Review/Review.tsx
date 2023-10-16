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
                {details?.review}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Review;
