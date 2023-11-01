"use client";

import { Button } from "antd";
import styles from "../../app/page.module.css";
import Link from "next/link";

const Appointment = () => {
  return (
    <div
      className={styles.appointmentImg}
      style={{
        padding: "200px 0",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "50px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        MAKE AN APPOINTMENT
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Link href="/services">
          <Button
            size="large"
            style={{
              // padding: "0 20px",
              width: "150px",
              height: "50px",
              background: "#04294d",
              border: "0",
              color: "white",
            }}
          >
            Booking
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Appointment;
