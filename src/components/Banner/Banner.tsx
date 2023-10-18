import React from "react";
import styles from "../../app/page.module.css";

const Banner = () => {
  return (
    <div
      className={styles.bgImg}
      style={{
        marginTop: "16px",
      }}
    >
      <div
        style={{
          width: "60%",
          margin: "0 auto",
          height: "500px",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "200px",
            fontSize: "60px",
            color: "white",
          }}
        >
          PC Laptop Repair
        </h1>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            color: "white",
          }}
        >
          Repair guides and disassembly information for PC laptops of all
          shapes, sizes, and colors.
        </p>
      </div>
    </div>
  );
};

export default Banner;
