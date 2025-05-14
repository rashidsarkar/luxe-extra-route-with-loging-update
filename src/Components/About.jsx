import React from "react";
import { FaBuilding, FaUsers, FaRegSmileBeam, FaWifi, FaLeaf, FaSwimmingPool, FaParking, FaDumbbell } from "react-icons/fa";
import { MdSecurity, MdPets, MdLocalLaundryService } from "react-icons/md";
import { GiElevator, GiHomeGarage } from "react-icons/gi";
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
  {
    icon: <FaWifi className="text-5xl text-[#427D9D] animate-pulse" />,
    title: "High-Speed Internet",
    desc:
      "Stay connected with fast, reliable internet access throughout the property.",
  },
  {
    icon: <FaLeaf className="text-5xl text-[#64b687] animate-bounce" />,
    title: "Eco-Friendly Living",
    desc:
      "Our buildings are designed with sustainability in mind, featuring green spaces and energy-efficient systems.",
  },
  {
    icon: <FaSwimmingPool className="text-5xl text-[#3bb3e0] animate-bounce" />,
    title: "Swimming Pool & Recreation",
    desc:
      "Relax and unwind in our luxurious swimming pool and recreation areas.",
  },
  {
    icon: <FaParking className="text-5xl text-[#503CA1] animate-pulse" />,
    title: "Ample Parking",
    desc:
      "Enjoy the convenience of secure, ample parking for you and your guests.",
  },
  {
    icon: <GiElevator className="text-5xl text-[#427D9D] animate-bounce" />,
    title: "Modern Elevators",
    desc:
      "Quick and easy access to all floors with our high-speed elevators.",
  },
  {
    icon: <MdPets className="text-5xl text-[#9BBEC8] animate-bounce" />,
    title: "Pet Friendly",
    desc:
      "We welcome your furry friends with open arms and pet-friendly amenities.",
  },
  {
    icon: <FaDumbbell className="text-5xl text-[#427D9D] animate-pulse" />,
    title: "Fitness Center",
    desc:
      "Stay active and healthy with our state-of-the-art fitness center.",
  },
  {
    icon: <MdLocalLaundryService className="text-5xl text-[#164863] animate-spin-slow" />,
    title: "Laundry Facilities",
    desc:
      "On-site laundry services for your convenience.",
  },
  {
    icon: <GiHomeGarage className="text-5xl text-[#503CA1] animate-bounce" />,
    title: "Private Garages",
    desc:
      "Select apartments offer private garages for added security and convenience.",
  },
];

const About = () => {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-[#DDF2FD] via-[#F6F6F6] to-[#9BBEC8] flex flex-col items-center py-16 px-4">
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
      <div className="grid w-full max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {aboutSections.map((section, idx) => (
          <Fade key={idx} bottom delay={idx * 100}>
            <div className="flex flex-col items-center p-8 transition-transform duration-300 bg-white shadow-xl rounded-2xl hover:scale-105 border border-[#E0E7EF]">
              {section.icon}
              <h2 className="mt-4 text-2xl font-semibold text-[#427D9D] text-center">
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
