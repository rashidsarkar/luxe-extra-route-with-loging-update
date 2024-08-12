import { Zoom } from "react-reveal";
import "./SectionHeading.css";
import { useEffect } from "react";
import Textify from "textify.js";
import gsap from "gsap";

function SectionHeading({ children }) {
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
    <h2
      data-aos="fade-up"
      className={`animation-3 text-center my-12 relative mb-10 text-4xl font-normal leading-10 uppercase before:bg-[#503CA1] before:bottom-[-10px] before:h-[4px] before:rounded-lg before:left-[50%] 
      before:absolute before:translate-x-[-50%] before:w-[70%]`}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
