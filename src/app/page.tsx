import Image from "next/image";
import styles from "./page.module.css";
import ProductService from "@/components/ProductService/ProductService";

export default function Home() {
  return (
    <main
      style={{
        margin: "0px 20px 0px 20px",
      }}
    >
      <h1>This is root route</h1>
      <ProductService></ProductService>
    </main>
  );
}
