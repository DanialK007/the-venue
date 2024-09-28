import Chef from "@/components/Chef";
import Discover from "@/components/Discover";
import Dishes from "@/components/Dishes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroHalf from "@/components/HeroHalf";
import Reservation from "@/components/Reservation";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <HeroHalf img="menuHero.png" title="The Menu" />
      <Discover />
      <Dishes />
      <Reservation />
      <Footer />
    </>
  );
}
