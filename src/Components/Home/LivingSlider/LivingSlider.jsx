import { TypeAnimation } from "react-type-animation";
import BannerDecpt from "../../../TextEffectComponents/BannerDecpti/BannerDecpt";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { GoDotFill } from "react-icons/go";

import TypAni from "../../../Components/TypeAnimition/TypAni";
import TextScramble from "../../../TextEffectComponents/TextScramble/TextScramble";
import img1 from "./assets/img-1.jpg";
import img2 from "./assets/img-2.jpg";
import img3 from "./assets/img-3.jpg";
import Textify from "textify.js";
import gsap from "gsap";
import { useEffect } from "react";

function LivingSlider() {
  useEffect(() => {
    // Use Textify.js to animate text
    new Textify(
      {
        el: ".animation-3",
        animation: {
          stagger: 0.05,
          duration: 0.7,
          ease: "expo.inOut",
          animateProps: { rotate: 60, scale: 0, y: 0 },
        },
      },
      gsap
    );
  }, []);
  return (
    <div className="min-h-screen lg:p-20 hero bg-base-200">
      <div
        data-aos="fade-up"
        className="flex-col hero-content lg:flex-row md:gap-x-20"
      >
        <div
          data-aos="zoom-in-right"
          className="max-w-[220px]  rounded-lg shadow-2xl lg:max-w-lg md:max-w-md "
        >
          <Swiper
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={true}
            modules={[EffectCube, Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={img1}
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img2}
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={img3}
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div data-aos="zoom-in-left" className="">
          <h1 className="lg:text-3xl   lg:h-[100px] animation-3">
            <span>NEXT</span> <span>LEVEL</span> <span>OF</span>{" "}
            <span>LIVING</span>
          </h1>

          <BannerDecpt>
            <p>
              Elevate your lifestyle with our exclusive collection of premier
              apartments. Discover the epitome of comfort, style, and
              convenience. Your perfect home is just a click away – start your
              search now!
            </p>
          </BannerDecpt>
          <div>
            <ul className="">
              <li className="flex items-center ">
                <GoDotFill /> The Village Garden
              </li>
              <li className="flex items-center ">
                <GoDotFill /> Hudson Yards
              </li>
              <li className="flex items-center ">
                <GoDotFill /> Royal Rue Blanche
              </li>
              <li className="flex items-center ">
                <GoDotFill /> Torino Ey Tower
              </li>
            </ul>
          </div>
          <button className="my-6 btn btn-outline btn-primary">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default LivingSlider;
