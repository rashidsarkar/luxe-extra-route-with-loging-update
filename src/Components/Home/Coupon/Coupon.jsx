import { useEffect } from "react";

import "./Coupon.css";

const Coupon = ({ couponCode, description, discountPercentage }) => {
  return (
    <div className="containerr" data-aos="flip-left">
      <div className="coupon-card">
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/RD6w6NH/Logo-maker-online-logo-generator-Logo-AI-com-removebg-preview.png"
            alt="Coupon Logo"
            className="text-center logo bg-gray-300 p-2"
          />
        </div>
        <h3 className="lg:h-[200px]">{description}</h3>
        <div className="coupon-row">
          <span className="cpnCode" id="cpnCode">
            {couponCode}
          </span>
          <span className="cpnBtn" id="cpnBtn">
            Copy
          </span>
        </div>
        <p>Discount {discountPercentage} % </p>
        <div className=" circle1"></div>
        <div className="circle2"></div>
      </div>
    </div>
  );
};

export default Coupon;
