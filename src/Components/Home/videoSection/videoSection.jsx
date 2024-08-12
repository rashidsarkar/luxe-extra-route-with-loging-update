import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ReactPlayer from "react-player";
import VividStreet from "../VIVIDSTREET/VividStreet";
import CounterSection from "../CounterSection/CounterSection";

const VideoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Define animation properties
  const springProps = useSpring({
    height: isHovered ? "80vh" : "65vh",
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <>
      <div
        className="relative w-full py-10 overflow-hidden h-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <animated.div style={springProps}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=v02ULp_v6Uk"
            width="100%"
            height="100%"
            playing={isHovered}
            controls={isHovered}
            volume={0}
            loop
          />
        </animated.div>
      </div>

      <CounterSection />
    </>
  );
};

export default VideoSection;
