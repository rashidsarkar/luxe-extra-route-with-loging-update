import { useEffect } from "react";
import img1 from "./assets/vivid-imf-1.jpg";
import img2 from "./assets/vivid-img-2.jpg";
import { FaInfoCircle } from "react-icons/fa";
import Textify from "textify.js";
import gsap from "gsap";
import "./vividStreed.css";
function VividStreet() {
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
    <div>
      <div className="min-h-screen hero bg-transparent flex items-center justify-center lg:py-11">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow p-8 flex-col hero-content lg:flex-row">
          <div className="flex justify-center w-full lg:relative lg:w-1/2">
            <img
              src={img1}
              className="lg:w-auto lg:h-[500px] w-[200px] lg:mr-0 imgNum1  rounded-lg shadow-2xl "
            />
            <img
              src={img2}
              data-aos="fade-up"
              className="absolute w-1/2 hidden lg:block -right-10 lg:h-[400px] top-[-68px]"
            />
          </div>
          <div className="lg:pl-24 lg:w-1/2">
            <h1 className="font-bold lg:text-3xl w-96 animation-3">
              <span>751</span> VIVID STREET
            </h1>
            <p className="py-6">
              <ul className="space-y-3">
                <li className="flex items-center space-x-4">
                  <FaInfoCircle /> <p>PROPERTY SIZE:700sq ft</p>
                </li>
                <li className="flex items-center space-x-4">
                  <FaInfoCircle /> <p>STRUCTURE: 2 badrooms</p>
                </li>
                <li className="flex items-center space-x-4">
                  <FaInfoCircle /> <p>ACCOMMODATION:Furnished</p>
                </li>
                <li className="flex items-center space-x-4">
                  <FaInfoCircle /> <p>HEATING:Floor Heating</p>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VividStreet;
