import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import Signature from "@/components/Signature";
import Soul from "@/components/Soul";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Soul />
      <Signature />
      <Menu />
      <Reservation />
      <Footer />
    </>
  );
}
