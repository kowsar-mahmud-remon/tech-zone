import Image from "next/image";
import styles from "./page.module.css";
import ProductService from "@/components/ProductService/ProductService";
import Banner from "@/components/Banner/Banner";
import ClientReview from "@/components/ClientReview/ClientReview";
import UpComingService from "@/components/UpComingService/UpComingService";
import Experience from "@/components/Experience/Experience";

export default function Home() {
  return (
    <main
      style={{
        margin: "0px 20px 0px 20px",
      }}
    >
      <Banner></Banner>
      <ProductService></ProductService>
      <UpComingService></UpComingService>
      <Experience></Experience>
      <ClientReview></ClientReview>
    </main>
  );
}
