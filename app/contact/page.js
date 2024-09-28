import Chef from "@/components/Chef";
import Discover from "@/components/Discover";
import Dishes from "@/components/Dishes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroHalf from "@/components/HeroHalf";
import Reservation from "@/components/Reservation";
import Testimonial from "@/components/Testimonial";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Header />
      <HeroHalf img="contactHero.png" title="Contact" />
      <div className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto p-5 lg:p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="">
              <div className="text-2xl lg:text-4xl">Contact info</div>
              <div className="py-10 text-black/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada lorem maximus mauris scelerisque, at rutrum nulla
                dictum. Ut ac ligula sapien. Suspendisse cursus faucibus
                finibus. Ut non justo eleifend, facilisis nibh ut, interdum
                odio. Suspendisse potenti.
              </div>
              <div className="text-3xl lg:text-6xl">The Venue</div>
              <div className="text-lg lg:text-2xl ps-1 uppercase tracking-[0.8rem]">
                Restaurant
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="border-2 border-myColor py-10 px-20">
                <div className="grid grid-cols-3 gap-y-4 max-w-xs text-black/60">
                  <div className="text-xl">Address</div>
                  <div className="col-span-2 pt-[0.3rem] text-sm">
                    1481 Creekside Lane Avila Beach, CA 931
                  </div>
                  <div className="text-xl">Phone</div>
                  <div className="col-span-2 pt-[0.3rem] text-sm">
                    +53 345 7953 324
                  </div>
                  <div className="text-xl">E-mail</div>
                  <div className="col-span-2 pt-[0.3rem] text-sm">
                    yourmail@gmail.com
                  </div>
                  <div className="col-span-3 flex justify-between px-5 pt-8">
                    <a href="" className="hover:text-myColor p-2">
                      <FaPinterest />
                    </a>
                    <a href="" className="hover:text-myColor p-2">
                      <FaFacebook />
                    </a>
                    <a href="" className="hover:text-myColor p-2">
                      <FaInstagram />
                    </a>
                    <a href="" className="hover:text-myColor p-2">
                      <FaTwitter />
                    </a>
                    <a href="" className="hover:text-myColor p-2">
                      <FaDribbble />
                    </a>
                    <a href="" className="hover:text-myColor p-2">
                      <FaBehance />
                    </a>
                    <a href="" className="hover:text-myColor p-2">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16">
            <div className="text-2xl lg:text-4xl mb-8">Our Location</div>
            <div className="h-[500px] w-full">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093795!2d144.9630577156336!3d-37.81362797975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c82c0525da0!2s1481%20Creekside%20Lane%2C%20Avila%20Beach%2C%20CA%20931!5e0!3m2!1sen!2sus!4v1637019424032!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Reservation />
      <Footer />
    </>
  );
}
