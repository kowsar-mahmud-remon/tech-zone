import "./globals.css";
import styles from "./page.module.css";
import ProductService from "@/components/ProductService/ProductService";
import Banner from "@/components/Banner/Banner";
import ClientReview from "@/components/ClientReview/ClientReview";
import UpComingService from "@/components/UpComingService/UpComingService";
import Experience from "@/components/Experience/Experience";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Appointment from "@/components/Appointment/Appointment";
import AboutUs from "@/components/AboutUs/AboutUs";

export default function Home() {
  return (
    <main
      style={{
        margin: "auto",
        padding: "0px 20px",
        maxWidth: "1440px",
      }}
    >
      <Banner></Banner>
      <ProductService></ProductService>
      <AboutUs></AboutUs>
      <UpComingService></UpComingService>
      <Appointment></Appointment>
      <ChooseUs></ChooseUs>
      <Experience></Experience>
      <ClientReview></ClientReview>
    </main>
  );
}
