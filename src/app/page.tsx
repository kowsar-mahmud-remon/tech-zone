import Image from "next/image";
import styles from "./page.module.css";
import ProductService from "@/components/ProductService/ProductService";
import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <main
      style={{
        margin: "0px 20px 0px 20px",
      }}
    >
      <Banner></Banner>
      <ProductService></ProductService>
    </main>
  );
}
