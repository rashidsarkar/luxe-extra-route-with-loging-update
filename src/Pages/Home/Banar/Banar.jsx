import { TypeAnimation } from "react-type-animation";
import BannerDecpt from "../../../TextEffectComponents/BannerDecpti/BannerDecpt";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./Banar.css";
import TypAni from "../../../Components/TypeAnimition/TypAni";
import TextScramble from "../../../TextEffectComponents/TextScramble/TextScramble";
import { Link } from "react-router-dom";

function Banar() {
  return (
    <div data-aos="fade-up" className="min-h-screen hero bg-transparent flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow p-8 flex-col hero-content lg:flex-row-reverse">
        <div
          data-aos="fade-up-right"
          className="max-w-[220px]  rounded-lg shadow-2xl lg:max-w-lg md:max-w-md "
        >
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={true}
            modules={[EffectCube, Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://i.ibb.co/vsJvw8S/deborah-cortelazzi-g-REqu-CUXQLI-unsplash.jpg"
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/t4GzSks/nastuh-abootalebi-y-Wwob8kw-OCk-unsplash.jpg"
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg"
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img
                src="https://i.ibb.co/8X0wG9C/aaron-huber-s95o-B2n9jng-unsplash.jpg"
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg"
              />
            </SwiperSlide> */}
            <SwiperSlide>
              <img
                src="https://i.ibb.co/8NrB31h/frames-for-your-heart-Fqqi-Av-Jejto-unsplash.jpg"
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div data-aos="fade-up-left" className="">
          <h1 className="text-5xl lg:w-[695px] lg:h-[100px]">
            <TextScramble text=" Find Your Ideal Home with Us" />
          </h1>

          <BannerDecpt>
            Discover the perfect living space with Provident Apartments. We
            provide a selection of thoughtfully designed rentals, ensuring
            comfort and convenience.
          </BannerDecpt>
          <Link to={`/newArive`} className="btn btn-primary">
            Explore Today!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banar;
