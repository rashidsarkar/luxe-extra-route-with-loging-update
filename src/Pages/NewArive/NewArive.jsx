import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import img11 from "./assets/h5-apartment-img4.jpg";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import "./newArivial.css";
import AboutPart from "./AboutPart/AboutPart";
import Member from "./Member/Member";
import Interior from "./INTERIOR/Interior";
import ApartmentBanar from "../../Components/App/ApartmentBanar/ApartmentBanar";
function NewArive() {
  return (
    <>
      <ApartmentBanar
        image="https://i.ibb.co/jGr137Y/pexels-huseyn-kamaladdin-667838.jpg"
        title="Modern Urban Living"
        decpt="Experience the epitome of contemporary living in our stylish apartments. Unrivaled comfort and sophistication await you."
      />

      <div className="py-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative overflow-hidden rounded-lg group prentDiv">
              <img
                src={img3}
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg group-hover:scale-[1.1]  transition  max-h-[500px]"
              ></img>
              <div className="absolute bottom-0 w-full p-10 bg-white boxPrent group-hover:visible group-hover:opacity-1 h-2/6">
                <p className="mb-2 text-xl font-semibold text-gray-700">
                  Luxury Living Apartment
                </p>
                <p className="text-2xl text-gray-700">$5000</p>
                <p className="text-gray-700">Downtown, City Center </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden rounded-lg group prentDiv">
              <img
                src={img1}
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg group-hover:scale-[1.1]  transition  max-h-[500px]"
              ></img>
              <div className="absolute bottom-0 w-full p-10 bg-white boxPrent group-hover:visible group-hover:opacity-1 h-2/6">
                <p className="mb-2 text-xl font-semibold text-gray-700">
                  Modern Urban Oasis
                </p>
                <p className="text-2xl text-gray-700">$4500</p>
                <p className="text-gray-700">Suburb, Tranquil Area </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden rounded-lg group prentDiv">
              <img
                src={img2}
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg group-hover:scale-[1.1]  transition  max-h-[500px]"
              ></img>
              <div className="absolute bottom-0 w-full p-10 bg-white boxPrent group-hover:visible group-hover:opacity-1 h-2/6">
                <p className="mb-2 text-xl font-semibold text-gray-700">
                  Cozy Riverside Retreat
                </p>
                <p className="text-2xl text-gray-700">$4800</p>
                <p className="text-gray-700">Riverside, Scenic Views </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden rounded-lg group prentDiv">
              <img
                src={img11}
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg group-hover:scale-[1.1]  transition  max-h-[500px]"
              ></img>
              <div className="absolute bottom-0 w-full p-10 bg-white boxPrent group-hover:visible group-hover:opacity-1 h-2/6">
                <p className="mb-2 text-xl font-semibold text-gray-700">
                  Elegant High-rise Residence
                </p>
                <p className="text-2xl text-gray-700">$5500</p>
                <p className="text-gray-700">Skyline, Prestigious Address </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <AboutPart />
      <Member />
      <Interior />
    </>
  );
}

export default NewArive;
