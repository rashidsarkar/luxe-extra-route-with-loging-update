import { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import AOS from "aos";

function Interior() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="min-h-screen hero bg-transparent flex items-center justify-center">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow p-8 flex-col hero-content lg:flex-row-reverse" data-aos="fade-up">
          <div className="lg:w-1/2" data-aos="fade-left">
            <img
              src="https://belfort.qodeinteractive.com/wp-content/uploads/2023/01/h5-img5.jpg"
              className="rounded-lg shadow-2xl"
              alt="Interior Design"
            />
          </div>
          <div className="lg:p-20 lg:w-1/2" data-aos="fade-right">
            <p>INTERIOR DESIGN</p>
            <h1 className="text-3xl font-bold">
              FIND A HOME THAT SUITS YOUR LIFESTYLE
            </h1>
            <p className="py-6">
              <span className="text-4xl">B</span>ring your dreams to life with
              our exceptional interior design services. Our team of experts is
              dedicated to creating spaces that reflect your unique style and
              meet your lifestyle needs.
            </p>
            <div className="space-y-4">
              <p className="text-lg font-semibold">
                HOW TO SCHEDULE A VIEWING?
              </p>
              <p>
                Schedule a viewing of your dream home by contacting our friendly
                team. Lorem ipsum proin gravida nibh vel velit auctor aliollic
                itudlorem quis bibe id auctor nisi elit consequat ipsum, nec
                sagittis sem nibh id elit.
              </p>
              <button
                className="btn btn-outline btn-primary"
                data-aos="fade-up"
              >
                <FaEye className="mr-2" />
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interior;
