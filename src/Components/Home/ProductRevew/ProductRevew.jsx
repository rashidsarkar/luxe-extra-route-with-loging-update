import React, { useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser, FaAward } from "react-icons/fa";
import "./ProductRevew.css";

function ProductRevew() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const speed = 200; // Adjust speed as needed

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);

  return (
    <div className="counters-1">
      <div className="container">
        <div className="flex flex-wrap justify-center mx-2">
          <div data-aos="fade-right" className="w-full px-2 md:w-1/2 lg:w-1/4">
            <div className="counter-box-1">
              <div className="text-5xl text-primary ">
                <i>
                  <IoHomeOutline />
                </i>
              </div>
              <h1 className="text-5xl counter" data-target="967">
                0
              </h1>
              <h5 className="text-xl">
                Total <span>Rooms</span>
              </h5>
            </div>
          </div>

          <div data-aos="fade-up" className="w-full px-2 md:w-1/2 lg:w-1/4">
            <div className="counter-box-1">
              <div className="text-5xl text-primary">
                <i>
                  <FaRegUser />
                </i>
              </div>
              <h1 className="text-5xl counter" data-target="396">
                0
              </h1>
              <h5 className="text-xl">
                Happy <span>Clients</span>
              </h5>
            </div>
          </div>
          <div data-aos="fade-left" className="w-full px-2 md:w-1/2 lg:w-1/4">
            <div className="counter-box-1">
              <div className="text-5xl text-primary">
                <i>
                  <FaAward />
                </i>
              </div>
              <h1 className="text-5xl counter" data-target="177">
                0
              </h1>
              <h5 className="text-xl">
                Award <span>winning</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRevew;
