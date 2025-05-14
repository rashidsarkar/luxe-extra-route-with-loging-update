import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 w-full shadow border-t-4  pt-12 pb-6 px-4 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Description */}
        <div className="flex flex-col items-start">
          <Link to={`/`}>
            <img
              className="w-[150px] mb-4 cursor-pointer"
              src="https://i.ibb.co/RD6w6NH/Logo-maker-online-logo-generator-Logo-AI-com-removebg-preview.png"
              alt="Luxe Logo"
            />
          </Link>
          <p className="mb-4 text-gray-700">
            Elevate your living experience with <span className="font-bold text-[#427D9D]">Luxe</span>. Discover a new standard of luxury and comfort at the heart of Dhanmondi. Manage your dream home in our prestigious buildings.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-[#3b5998]"><FaFacebook className="text-2xl" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#1da1f2]"><FaTwitter className="text-2xl" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#e1306c]"><FaInstagram className="text-2xl" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#0077b5]"><FaLinkedin className="text-2xl" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[#ff0000]"><FaYoutube className="text-2xl" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-[#427D9D]">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#503CA1] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#503CA1] transition">About Us</Link></li>
            <li><Link to="/apartment" className="hover:text-[#503CA1] transition">Apartments</Link></li>
            <li><Link to="/newArive" className="hover:text-[#503CA1] transition">New Arrivals</Link></li>
            <li><Link to="/contact" className="hover:text-[#503CA1] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-[#427D9D]">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#503CA1]" /> 123 Main Street, Dhanmondi, Dhaka</li>
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-[#427D9D]" /> +880 2 1234 5678</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-[#9BBEC8]" /> info@luxeliving.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-[#427D9D]">Newsletter</h3>
          <p className="mb-3 text-gray-700">Subscribe to get the latest updates and offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#427D9D]"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[#427D9D] text-white font-semibold hover:bg-[#503CA1] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Luxe Modern Living. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
