import Banar from "./Banar/Banar";

import SectionTitle from "../../TextEffectComponents/BannerDecpt/SectionTitle/SectionTitle";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import AboutBuilding from "./AboutBuilding/AboutBuilding";
import Coupon from "../../Components/Home/Coupon/Coupon";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FindUs from "./FindUs/FindUs";
import useGetCoupon from "../../API/Home/useGetCoupon";
import CustomLoading from "../../Components/CustomLoading";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import { Helmet } from "react-helmet-async";
import LivingSlider from "../../Components/Home/LivingSlider/LivingSlider";
import VideoSection from "../../Components/Home/videoSection/videoSection";
import "./home.css";
import ProductRevew from "../../Components/Home/ProductRevew/ProductRevew";
import VividStreet from "../../Components/Home/VIVIDSTREET/VividStreet";

AOS.init();
function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for each Coupon component
    AOS.refresh();
  });
  const { error, getCoupon, isError, isLoading } = useGetCoupon();
  if (isLoading) return <CustomLoading></CustomLoading>;
  if (isError) return <ErrorMessage error={error}></ErrorMessage>;
  console.log(getCoupon);

  return (
    <>
      <Helmet>
        <title>Luxe | Home</title>
      </Helmet>
      <div className="min-h-screen">
        <div className="max-w-7xl">
          <Banar></Banar>
        </div>

        <SectionHeading>about the building</SectionHeading>
        <AboutBuilding></AboutBuilding>
        <SectionTitle>Latest Coupon Codes and Deals</SectionTitle>
        <div className="grid grid-cols-1 gap-6 p-5 overflow-x-hidden overflow-y-hidden lg:grid-cols-3">
          {/* //TODO - Coupon part api teke ante hobe */}
          {getCoupon.map((coupon) => {
            return (
              <Coupon
                key={coupon._id}
                couponCode={coupon.couponCode}
                description={coupon.description}
                discountPercentage={coupon.discountPercentage}
              />
            );
          })}
        </div>
        <LivingSlider />

        <VideoSection />
        <div className="parallax"></div>
        <VividStreet />

        <FindUs />
        {/* <Coupon /> */}
        <ProductRevew data-aos="fade-up" />
      </div>
    </>
  );
}

export default Home;
