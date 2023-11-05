"use client";

import { Col, Layout, Row } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  HeatMapOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import styles from "../../app/page.module.css";

const { Footer } = Layout;

const FooterPage = () => {
  return (
    <div className="">
      <div
        className={styles.footerImg}
        style={{
          padding: "40px 0",
          // background: "#001529",
        }}
      >
        <div
          style={{
            margin: "auto",
            maxWidth: "1440px",
            padding: "0px 20px",
          }}
        >
          <Row
            gutter={{ md: 24, lg: 32 }}
            style={
              {
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                // margin: "0 20px",
              }
            }
          >
            <Col xs={24} sm={24} md={24} lg={8}>
              <div
                style={{
                  marginBottom: "30px",
                  // display: "flex",
                  // justifyContent: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  ABOUT US
                </h1>

                <p
                  style={{
                    fontSize: "15px",
                    color: "white",
                    marginTop: "25px",
                    lineHeight: "30px",
                  }}
                >
                  Fixer Buddies offers professional laptop repair services at
                  our retail locations throughout world. The high level of
                  customer service has allowed to open multiple full-service
                  repair centers.
                </p>
              </div>

              <div
                style={{
                  marginBottom: "40px",
                  display: "flex",
                  // justifyContent: "center",
                  color: "white",
                }}
              >
                <FacebookOutlined
                  style={{
                    fontSize: "30px",
                    marginRight: "10px",
                  }}
                />
                <TwitterOutlined
                  style={{
                    fontSize: "30px",
                    marginRight: "10px",
                  }}
                />
                <InstagramOutlined
                  style={{
                    fontSize: "30px",
                    marginRight: "10px",
                  }}
                />
                <LinkedinOutlined
                  style={{
                    fontSize: "30px",
                    marginRight: "10px",
                  }}
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={6}>
              <div
                style={{
                  marginBottom: "40px",
                  // display: "flex",
                  // justifyContent: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  CONTACT US
                </h1>

                <div
                  style={{
                    marginTop: "25px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MailOutlined
                    style={{
                      color: "white",
                      fontSize: "18px",
                    }}
                  />
                  <div style={{ marginLeft: "20px" }}>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "white",
                        // marginTop: "20px",
                      }}
                    >
                      support-us@gmail.com
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "white",
                        marginTop: "10px",
                      }}
                    >
                      helpmenow@gmail.com
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <HeatMapOutlined
                    style={{
                      color: "white",
                      fontSize: "18px",
                    }}
                  />
                  <div style={{ marginLeft: "20px" }}>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "white",
                        // marginTop: "20px",
                      }}
                    >
                      Road-2,3/A South Chortha
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "white",
                        marginTop: "10px",
                      }}
                    >
                      Comilla-3500, Bangladesh
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PhoneOutlined
                    style={{
                      color: "white",
                      fontSize: "18px",
                    }}
                  />
                  <div style={{ marginLeft: "20px" }}>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "white",
                        // marginTop: "20px",
                      }}
                    >
                      Office: (+880) 0841 250 453
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "white",
                        marginTop: "10px",
                      }}
                    >
                      Cell: (+880) 0254 125 364
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={24} sm={24} md={24} lg={10}>
              <div
                style={{
                  marginBottom: "40px",
                  // display: "flex",
                  // justifyContent: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  OPENING HOURS
                </h1>

                <div
                  style={{
                    marginTop: "25px",
                    // display: "flex",
                    // alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: "15px",
                      borderBottom: "dotted",
                      borderColor: "white",
                      borderWidth: "1px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "15px",
                        color: "white",
                      }}
                    >
                      Sat - Tues :
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "white",
                      }}
                    >
                      6.00 AM - 10.00 PM
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "15px 0",
                      borderBottom: "dotted",
                      borderColor: "white",
                      borderWidth: "1px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "15px",
                        color: "white",
                      }}
                    >
                      Wed - Thurs :
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "white",
                      }}
                    >
                      8.00 AM - 6.00 PM
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "15px 0",
                      borderBottom: "dotted",
                      borderColor: "white",
                      borderWidth: "1px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "15px",
                        color: "white",
                      }}
                    >
                      Friday :
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "white",
                      }}
                    >
                      6.00 AM - 10.00 PM
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "15px 0",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "15px",
                        color: "white",
                      }}
                    >
                      Sunday :
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "white",
                      }}
                    >
                      Closed
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Footer
        style={{
          textAlign: "center",
          fontSize: "18px",
          background: "#001529",
          color: "white",
        }}
      >
        Copyright © 2023. All right reserved by techzone.com
      </Footer>
    </div>
  );
};

export default FooterPage;
