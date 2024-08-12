import Textify from "textify.js";
import gsap from "gsap";
import { useEffect } from "react";
function LivingAni({ children }) {
  useEffect(() => {
    // Use Textify.js to animate text
    new Textify(
      {
        el: ".animation-34",
        animation: {
          stagger: 0.05,
          duration: 0.8,
          ease: "expo.inOut",
          animateProps: { rotate: 60, scale: 0, y: 0 },
        },
      },
      gsap
    );
  }, []);
  return <div className="animation-34">{children}</div>;
}

export default LivingAni;
