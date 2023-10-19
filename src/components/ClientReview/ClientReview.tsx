"use client";

import { Col, Row } from "antd";
import review1 from "../../assets/credit-1.png";
import review2 from "../../assets/credit-2.png";
import review3 from "../../assets/credit-3.png";
import Image from "next/image";
const ClientReview = () => {
  const clientReviews = [
    {
      _id: "1",
      name: "John Doe",
      img: review1,
      rating: 5,
      reviewText:
        "I had a fantastic experience with this laptop repair service. They fixed my laptop quickly and at a reasonable price. Highly recommended!",
    },
    {
      _id: "2",
      name: "Alice Smith",
      img: review2,
      rating: 4,
      reviewText:
        "The technicians were knowledgeable and friendly. They resolved my laptop issues, and I am satisfied with the service.",
    },
    {
      _id: "3",
      name: "Bob Johnson",
      img: review3,
      rating: 5,
      reviewText:
        "Outstanding service! My laptop was repaired faster than I expected. I will definitely use this service again if needed.",
    },
  ];

  return (
    <div
      style={{
        margin: "50px 0",
      }}
    >
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          marginBottom: "40px",
        }}
      >
        <h2>Top Client Reviews</h2>
      </Row>
      <Row
        gutter={{ lg: 32 }}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {clientReviews?.map((review) => (
          <Col sm={24} md={12} lg={8} key={review?._id}>
            <div
              style={{
                marginBottom: "40px",
                boxShadow: "0 0 1rem silver",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    height: "80px",
                    marginRight: "10px",
                  }}
                  alt="service img"
                  width={500}
                  height={400}
                  src={review?.img}
                />
                <div className="">
                  <h1
                    style={{
                      fontSize: "22px",
                    }}
                  >
                    {review?.name}
                  </h1>

                  <p
                    style={{
                      fontSize: "18px",
                      marginTop: "10px",
                      color: "#4D4D4D",
                    }}
                  >
                    Rating: {review?.rating}
                  </p>
                </div>
              </div>

              <div
                style={{
                  height: "100px",
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    marginTop: "16px",
                    color: "#4D4D4D",
                  }}
                >
                  {review?.reviewText}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ClientReview;
