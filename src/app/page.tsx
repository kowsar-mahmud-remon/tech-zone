import Image from "next/image";
import styles from "./page.module.css";
import ProductService from "@/components/ProductService/ProductService";
import Banner from "@/components/Banner/Banner";
import ClientReview from "@/components/ClientReview/ClientReview";

export default function Home() {
  return (
    <main
      style={{
        margin: "0px 20px 0px 20px",
      }}
    >
      <Banner></Banner>
      <ProductService></ProductService>
      <ClientReview></ClientReview>
    </main>
  );
}
