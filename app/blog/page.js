import BlogGrid from "@/components/BlogGrid";
import Chef from "@/components/Chef";
import Experience2 from "@/components/Experience2";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroHalf from "@/components/HeroHalf";
import Reservation from "@/components/Reservation";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <HeroHalf img="blogHero.png" title="Our Blog" />
      <BlogGrid />
      <Reservation />
      <Footer />
    </>
  );
}
