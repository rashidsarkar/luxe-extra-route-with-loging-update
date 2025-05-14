import React from "react";
import { FaBuilding, FaUsers, FaRegSmileBeam } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { Fade } from "react-reveal";

const aboutSections = [
  {
    icon: <FaBuilding className="text-5xl text-[#503CA1] animate-bounce" />,
    title: "Modern Living Spaces",
    desc:
      "Experience luxury and comfort in our state-of-the-art apartments designed for modern lifestyles.",
  },
  {
    icon: <FaUsers className="text-5xl text-[#427D9D] animate-pulse" />,
    title: "Community Focused",
    desc:
      "Join a vibrant community with shared spaces, events, and a welcoming atmosphere for all residents.",
  },
  {
    icon: <MdSecurity className="text-5xl text-[#164863] animate-spin-slow" />,
    title: "Top-notch Security",
    desc:
      "Your safety is our priority. Enjoy peace of mind with 24/7 security and smart access systems.",
  },
  {
    icon: <FaRegSmileBeam className="text-5xl text-[#9BBEC8] animate-bounce" />,
    title: "Exceptional Service",
    desc:
      "Our dedicated team ensures your living experience is smooth, enjoyable, and hassle-free.",
  },
];

const About = () => {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-[#DDF2FD] to-[#F6F6F6] flex flex-col items-center py-16 px-4">
      <Fade bottom>
        <h1 className="text-4xl md:text-5xl font-bold text-[#503CA1] mb-4 text-center">
          About Luxe Modern Living
        </h1>
        <p className="max-w-2xl mb-12 text-lg text-center text-gray-700">
          Luxe Modern Living is your gateway to a new era of apartment living.
          We blend luxury, technology, and community to create a unique living
          experience for everyone. Discover what makes us different!
        </p>
      </Fade>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
        {aboutSections.map((section, idx) => (
          <Fade key={idx} bottom delay={idx * 150}>
            <div className="flex flex-col items-center p-8 transition-transform duration-300 bg-white shadow-lg rounded-xl hover:scale-105">
              {section.icon}
              <h2 className="mt-4 text-2xl font-semibold text-[#427D9D]">
                {section.title}
              </h2>
              <p className="mt-2 text-center text-gray-600">{section.desc}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default About;
