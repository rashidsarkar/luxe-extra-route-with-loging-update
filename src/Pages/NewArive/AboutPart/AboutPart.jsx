import "./About.css";
function AboutPart() {
  return (
    <div className="flex justify-center">
      <div className="text-center  topTitle w-[770px]">
        <p data-aos="fade-up" className="text-xl aboutTitle">
          About us
        </p>
        <p data-aos="fade-down" className="text-center">
          <h2 className="lg:text-4xl">
            WELCOME TO BELFORT PROPERTY.
            <br />
            WE DEVELOP{" "}
            <img
              decoding="async"
              src="https://belfort.qodeinteractive.com/wp-content/uploads/2022/12/h5-img2.jpg"
              alt="s"
              style={{
                display: "inline",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            />
            RESIDENTIAL PROPERTIES WITH CARE. SEEING MORE{" "}
            <img
              decoding="async"
              src="https://belfort.qodeinteractive.com/wp-content/uploads/2022/12/h5-img1.jpg"
              alt="d"
              style={{
                display: "inline",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            />{" "}
            THAN JUST NUMBERS.
          </h2>
        </p>
      </div>
    </div>
  );
}

export default AboutPart;
