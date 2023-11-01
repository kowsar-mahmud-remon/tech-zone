import { Col, Row, Space, Spin } from "antd";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import samsung from "../../assets/samsung.png";
import iphone from "../../assets/iphone1.jpg";
import redmi from "../../assets/mi.png";

const UpComingService = () => {
  const upcomingServices = [
    {
      _id: "1",
      name: "Samsung",
      img: samsung,
    },
    {
      _id: "2",
      name: "iPhone",
      img: iphone,
    },
    {
      _id: "3",
      name: "Redmi",
      img: redmi,
    },
  ];
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
          marginBottom: "50px",
        }}
      >
        <h2>Upcoming Service</h2>
      </Row>

      <Row gutter={{ md: 20, lg: 32 }}>
        {upcomingServices?.map((service: any) => (
          <Col key={service?._id} sm={24} md={12} lg={8}>
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
                    height={300}
                    src={service?.img}
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
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UpComingService;
