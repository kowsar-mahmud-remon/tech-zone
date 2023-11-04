"use client";

import { Col, Row } from "antd";
import img1 from "../../assets/CHOOSE-US-img-1.webp";
import img2 from "../../assets/CHOOSE-US-img-2.webp";
import img3 from "../../assets/CHOOSE-US-img-3.webp";
import img4 from "../../assets/CHOOSE-US-img-4.png";
import Image from "next/image";
const ChooseUs = () => {
  const chooseUsData = [
    {
      _id: "1",
      title: "LOW PRICE GUARANTEE",
      img: img1,
      description:
        "Shopping around for the best price? We did that too, then we priced our repairs lower. We know price is a big factor in your decision to repair your device, so we stand behind our low price guarantee. We routinely monitor local prices, but if you find a retail store with lower pricing than us, we’ll match it. Guaranteed!s",
    },
    {
      _id: "2",
      title: "RELIABLE PAID ESTIMATES",
      img: img2,
      description:
        "Not sure if your device makes sense to fix? We’ll give you a RELIABLE PAID ESTIMATE so you can make an informed decision. Don’t spend more money than you have to on a new device before you get a quote to repair the one you have. Our estimates mean you know what the repair will cost, before the Doctor operates!",
    },
    {
      _id: "3",
      title: "TRUST OUR EXPERIENCE",
      img: img3,
      description:
        "We’ve fixed over 10,000 iPhones. During that time we’ve learned a lot of tips and tricks that allow our technicians to repair your device quickly and effectively. Your device is important to you, and you can trust that our experience in iPhone repairs will ensure your repair goes smoothly.",
    },
    {
      _id: "4",
      title: "1 YEAR WARRANTY",
      img: img4,
      description:
        "We offer a 1 Year Warranty on all our standard repairs. We’ll test your device once your repair is complete, but if any issues arise later, we’re here to help. We don’t expect you to have any problems, but isn’t it nice to know you’ve got a warranty if you need it? Even once your repair is out of warranty, we can help!",
    },
  ];

  return (
    <div
      style={{
        padding: "50px 0",
      }}
    >
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          marginBottom: "20px",
        }}
      >
        <h2>WHY CHOOSE US</h2>
      </Row>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          fontSize: "20px",
          color: "#001529",
          marginBottom: "50px",
        }}
      >
        <p>
          Here’s a few reasons why our customers love us. But don’t take their
          word for it, try us yourself!
        </p>
      </Row>

      <Row
        gutter={{ lg: 32 }}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseUsData?.map((details) => (
          <Col sm={24} md={12} lg={6} key={details?._id}>
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
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: "125px",
                    height: "125px",
                    marginBottom: "20px",
                  }}
                  alt="service img"
                  width={500}
                  height={400}
                  src={details?.img}
                />
              </div>
              <h1
                style={{
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {details?.title}
              </h1>

              <div
                style={{
                  height: "220px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    marginTop: "16px",
                    color: "#4D4D4D",
                  }}
                >
                  {details?.description}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ChooseUs;
